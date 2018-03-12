var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: __dirname + '/build/assets',
        filename: 'js/[name].js',
        publicPath: '/assets',
        chunkFilename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            // Will contain the css files all extracted to the style.css inside
            use: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /datatables\.net.*.\js$/,
            loader: 'imports-loader?define=>false'
        }, {
            test: /\.(png|gif|svg|jpe?g)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]' // Less than 8kb returns the file data of a url, the units of k
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: extractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader' // <- This is the vue-loader dep, so if you use npm3, do not need to explicitly install
                    })
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/,
            include: [
                path.join(__dirname, 'src'),
                /vue2-datatable-component/
            ]
        //}, {
        //}, {
        //    test: /\.js$/,
        //    exclude: /node_modules/,
        //    loader: 'babel-loader'
        }, { // Load jQuery plugin and inject the jquery object
            test: '/src/assets/js/**/*.js$',
            loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
        }]
    },
    plugins: [
        // The generated js file header comment
        new webpack.BannerPlugin('RRS Admin'),
        // Environment variables in the code to take effect
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production') // or production，Environment configuration
        }),
        // Automatically generate the entry html file
        new htmlWebpackPlugin({
            template: __dirname + '/src/index.tpl.html', // The template file path
            inject: 'body', // Injected into the body
            filename: '../index.html' // Files generated into the build/
        }),
        // The entrance of all the commons of js packaged into a commons.js file. Now only receive a object of configuration parameters, before the multi-parameter configuration is no longer supported. Here using install the jquery package, and then would use the imports-loader will be$inject jquery plugin, here is no longer use
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'commons',
        //     filename: 'js/commons.js',
        //     minChunks: Infinity
        // }),
        // Extraction of css files into a single file
        new extractTextPlugin('css/style.css'),
        // Injecting a global variable, you first need to install the Jquery library
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    resolve: {
        // require when you omit the extension, such as: require('module') do not need module.js
        extensions: ['.js', '.vue', 'json'],
        // Alias, you can directly use alias to represent the set of paths, and other
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // Default require the vue import is the vue package. js file in the configuration of the main field of the corresponding file, there is a need to re-sticky, otherwise it will error
            '@': path.join(__dirname, './src') // The@to point to the source folder directory
        }
    },
    // Open source-the map, the webpack has a variety of source-map in the official website of the document can be found
    devtool: 'eval-source-map'
        // ,
        // externals: {
        //     jquery: 'window.jQuery'
        // }
}
