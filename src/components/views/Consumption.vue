<template>
<div id="wrapper">
    <nprogress-container></nprogress-container>
    <nav-bar></nav-bar>

    <div id="page-wrapper" class="gray-bg">
        <page-top></page-top>
        <page-main>
            <!--<data-table slot="data-table"></data-table>-->
            <consumption-form slot="consumption-form"></consumption-form>
            <!--<consumption-form></consumption-form>-->
            <!--<date-picker2 v-model="dating_from" initial-view="m"></date-picker2>-->

            <!--<date-picker v-model="dating_from" :months-only="true" auto-date="45" initial-view="m" />-->

        </page-main>
        <page-footer></page-footer>
    </div>
</div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { NavBar, PageTop, PageMain, ConsumptionForm, PageFooter, DatePickerPlaceholder } from '../layout'
//import DatePicker from 'DatePicker'
//import DatePicker from '../../../node_modules/uiv/src/components/datepicker/DatePicker.vue'

export default {
    components: {
        NavBar,
        PageTop,
        PageMain,
        ConsumptionForm,
        PageFooter,
        NprogressContainer,
        DatePickerPlaceholder
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
            ],
            from: ''
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
        },
        dating_from: {
            get: function() {
                return this.from
            },
            set: function(val) {
                this.from = val
            }
        },
    }
}
</script>

<style>
</style>