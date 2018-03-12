<template>
    <!--<div>-->
    <!--<p-check class="p-icon p-round p-round p-fill p-tada" v-model="my_check" color="success">-->
        <!--<i class="icon fa fa-check fa-1x" slot="extra"></i>-->
        <!--Pay Bills-->
    <!--</p-check>-->

    <!--<p-check class="p-default p-round p-smooth p-plain" color="success-o">Add</p-check>-->

    <!--<p-check class="p-icon p-round p-smooth p-plain" color="success-o">-->
        <!--<i slot="extra" class="icon fa fa-check fa-1x"></i>-->
        <!--Favorite-->
    <!--</p-check>-->

    <!--<p-radio class="p-icon p-round p-smooth p-plain" name="radio1" v-model="my_radio" value="Male" color="success-o">-->
        <!--<i slot="extra" class="icon fa fa-check fa-1x"></i>-->
        <!--Male-->
    <!--</p-radio>-->

    <!-- or if it's only p-default and p-round you can leave out class attribute -->
    <!--<p-radio name="radio1" v-model="my_radio" value="Female">Female</p-radio>-->

    <!--&lt;!&ndash; you can use p-input too &ndash;&gt;-->
    <!--<p-input type="radio" name="radio1" v-model="my_radio" value="Special">Special</p-input>-->
    <!--</div>-->


    <div class="container-fluid">
        <form name="consumption_form">
            <div class="row  border-bottom white-bg dashboard-header">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li v-for="res in firstHalf(resources)">
                                    <p-radio class="p-icon p-round p-smooth p-plain" name="radio1" v-model="resid" :value="res.id" color="success-o">
                                        <i slot="extra" class="icon fa fa-check fa-1x"></i>
                                        {{res.name}}
                                    </p-radio>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li v-for="res in secondHalf(resources)">
                                    <p-radio class="p-icon p-round p-smooth p-plain" name="radio1" v-model="resid" :value="res.id" color="success-o">
                                        <i slot="extra" class="icon fa fa-check fa-1x"></i>
                                        {{res.name}}
                                    </p-radio>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <hr class="style11">
                            <p-radio class="p-icon p-round p-smooth p-plain" name="radio1" v-model="resid" value="0" color="success-o">
                                <i slot="extra" class="icon fa fa-check fa-1x"></i>
                                Все энергоресурсы
                            </p-radio>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <form class="form-inline">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li>
                                    <p-radio class="p-icon p-round p-smooth p-plain" name="period" v-model="togglePeriod" :value="1" color="success-o">
                                        <i slot="extra" class="icon fa fa-check fa-1x"></i>
                                        Произвольные даты
                                    </p-radio>
                                </li>
                                <li>
                                    <p-radio class="p-icon p-round p-smooth p-plain" name="period" v-model="togglePeriod" :value="2" color="success-o">
                                        <i slot="extra" class="icon fa fa-check fa-1x"></i>
                                        Даты по месяцам
                                    </p-radio>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <template v-if="getPeriod == 1">
                                <label>Начальная дата:</label>
                                <dropdown class="form-group">
                                    <div class="input-group">
                                        <input class="form-control" type="text" name="from" v-model="dating">
                                        <div class="input-group-btn">
                                            <btn class="dropdown-toggle"><i class="glyphicon glyphicon-calendar"></i></btn>
                                        </div>
                                    </div>
                                    <template slot="dropdown">
                                        <li>
                                            <date-picker v-model="dating"/>
                                        </li>
                                    </template>
                                </dropdown>
                                <label>Конечная дата:</label>
                                <dropdown class="form-group">
                                    <div class="input-group">
                                        <input class="form-control" type="text" name="to" v-model="dating">
                                        <div class="input-group-btn">
                                            <btn class="dropdown-toggle"><i class="glyphicon glyphicon-calendar"></i></btn>
                                        </div>
                                    </div>
                                    <template slot="dropdown">
                                        <li>
                                            <date-picker v-model="dating"/>
                                        </li>
                                    </template>
                                </dropdown>
                            </template>
                            <template v-else>
                                <label>Начальный месяц:</label>
                                <dropdown class="form-group">
                                    <div class="input-group">
                                        <input class="form-control" type="text" name="from" v-model="dating">
                                        <div class="input-group-btn">
                                            <btn class="dropdown-toggle"><i class="glyphicon glyphicon-calendar"></i></btn>
                                        </div>
                                    </div>
                                    <template slot="dropdown">
                                        <li>
                                            <date-picker v-model="dating"/>
                                        </li>
                                    </template>
                                </dropdown>
                                <label>Конечный месяц:</label>
                                <dropdown class="form-group">
                                    <div class="input-group">
                                        <input class="form-control" type="text" name="to" v-model="dating">
                                        <div class="input-group-btn">
                                            <btn class="dropdown-toggle"><i class="glyphicon glyphicon-calendar"></i></btn>
                                        </div>
                                    </div>
                                    <template slot="dropdown">
                                        <li>
                                            <date-picker v-model="dating"/>
                                        </li>
                                    </template>
                                </dropdown>
                            </template>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    </div>
</template>

<script type="text/babel">
export default {
    data: () => {
        return {
            resid: 0,
            resources: [],
            date: {
                from: null,
                to: null,
                period: 2
            }
        }
    },
    created: function()    {
        Vue.axios.get('/resources')
            .then(response => {
                this.resources = response.data
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    methods: {
        firstHalf: function (resources) {
            console.log(resources)
            return Vue._.take(resources, Math.ceil(resources.length/2))
        },
        secondHalf: function (resources) {
            return Vue._.takeRight(resources, Math.floor(resources.length/2))
        }
    },
    computed:  {
        dating: {
            get: function() {
                return this.date.from
            },
            set: function(val) {
                this.date.from = val
            }
        },
        getPeriod:  {
            get: function() {
                return this.date.period
            },
            set: function(val) {
                this.date.period = val

            }
        },
        togglePeriod:  {
            get: function() {
                return this.date.period
            },
            set: function(val) {
                this.date.from = null
                this.date.to = null
                this.date.period = val
            }
        }
    }
}
</script>

<style scoped>
    .pretty {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .pretty label   {
        font-color: #189818;
        border: 1px solid red;
    }

    hr.style11 {
        height: 6px;
        background: url(http://ibrahimjabbari.com/english/images/hr-11.png) repeat-x 0 0;
        border: 0;
    }
</style>