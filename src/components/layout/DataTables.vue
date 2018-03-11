<template>
        <table ref="data_table" class="table table-striped table-bordered table-hover dataTable"></table>
</template>

<script>
    export default {
        props: {
            table_headers: {
                type: Array,
                default: []
            },
            api_uri:    {
                type: String,
                default: "No API url set"
            }
        },
        data: function () {
            return {
                users: []
            }
        },
        methods:{
            buttonPressed(){
                alert('Button was pressed');
            },
            createDataTable () {
                let vm = this
                let table = $(this.$el)
                if(this.users){
                    // Преобразуем массив объектов в массив массивов
                    var keys = Object.keys(this.users[0]);
                    var op = this.users.reduce(function(a, b) {
                        var arr = keys.reduce(function(x, y) {
                            return x.concat([b[y]]);
                        }, [])
                        return a.concat([arr]);
                    }, []);

                    // Создаём DataTable
                    table.DataTable({
                        columns: this.table_headers,
                        data: op,
                        language: {
                            url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Russian.json"
                        },
                    });
                }
            }
        },
        mounted: function () {
            let vm = this
            $.ajax({
                url: Vue.axios.defaults.baseURL + vm.api_uri,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-Auth-Token', sessionStorage.getItem('token'));
                },
                success(res) {
                    vm.users = res
                    vm.createDataTable();
                }
            });
        }
    }
</script>

<style>/*  */</style>
