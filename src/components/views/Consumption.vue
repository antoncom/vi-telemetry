<template>
<div id="wrapper">
    <nprogress-container></nprogress-container>
    <nav-bar></nav-bar>

    <div id="page-wrapper" class="gray-bg">
        <page-top></page-top>
        <page-main>
            <data-tables
                slot="data-tables"
                :api_uri="api_address"
                :table_headers="headers"
            >
            </data-tables>
            <!--<consumption-form slot="consumption-form"></consumption-form>-->
        </page-main>
        <page-footer></page-footer>
    </div>
</div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { NavBar, PageTop, PageMain, DataTables, PageFooter } from '../layout'

export default {
    components: {
        NavBar,
        PageTop,
        PageMain,
        DataTables,
        PageFooter,
        NprogressContainer
    },

    data() {
        return {
            search: 'weqeqweqe',
            api_address: '/consumption?type=2',
            headers: [
                { title: 'Дата' },
                { title: 'Ресурс', class: 'some-special-class' },
                { title: 'Потребление по ОДУ' },
                { title: 'Сумма потребления по квартирам' },
            ]
        }
    },
    watch:{
        users: function(val){
            console.log('WATCH [Consumption]')
            console.log(this.users)

        }
    },
    computed: {
        filteredUsers: function () {
            console.log('COMPUTED [Consumption] - filteredUsers')
            let self = this
            console.log(this.users)
            return self.users
        }
    }
}
</script>

<style>
</style>