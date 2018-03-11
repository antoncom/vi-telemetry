import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App'
import Home from '@/components/views/Home'
import Login from '@/components/views/Login'
import Consumption from '@/components/views/Consumption'


Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requireAuth: true,
            title: 'Главная'
        }
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login page'
        }
    }, {
        path: '/user_consumption',
        name: 'user_consumption',
        component: Consumption,
        meta: {
            requireAuth: true,
            title: 'Потребление ресурсов'
        }
    }]
})

export default router
