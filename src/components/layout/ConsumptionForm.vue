<template>
    <form id="form_consumption" method="get" class="form-horizontal" novalidate="novalidate">
        <div class="col-sm-6">
            <div class="form-group">
                <div id="resources_radio">
                    <div class="col-sm-6">
                        <!--Resources radio boxes-->
                        <div class="i-checks"><label class=""><div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" value="1" name="res" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Холодное водоснабжение </label></div><div class="i-checks"><label class=""><div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" value="2" name="res" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Горячее водоснабжение </label></div><div class="i-checks"><label class=""><div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" value="4" name="res" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Газоснабжение </label></div></div>
                    <div class="col-sm-6">
                        <!--Resources radio boxes-->
                        <div class="i-checks"><label class=""><div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" value="3" name="res" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Электроэнергия </label></div><div class="i-checks"><label class=""><div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" value="100" name="res" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Стоки </label></div></div>
                </div>
                <div class="col-sm-12">
                    <div class="hr-line-dashed"></div>
                    <div class="i-checks"><label class=""> <div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green checked" style="position: relative;"><input type="radio" value="0" name="res" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Все энергоресурсы </label></div>
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group">
                <div class="col-sm-12">
                    <input class="form-control" type="hidden" name="from" value="">
                    <input class="form-control" type="hidden" name="to" value="">
                    <input class="form-control" type="hidden" name="type" value="">
                    <input class="form-control" type="hidden" name="period" value="">
                    <div class="i-checks daterange"><label class=""> <div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" value="option1" name="a" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Произвольные даты: </label>
                        <div class="input-daterange input-group" id="datepicker" style="display: none;">
                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                            <input class="form-control" type="text" name="daterange" value="">
                        </div>
                    </div>
                    <div class="i-checks datemonth"><label class=""> <div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green" style="position: relative;"><input type="radio" checked="" value="option2" name="a" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> По выбранному месяцу: </label>
                        <div class="input-group date" id="date_month">
                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>HELLO
                            <!--<input type="text" class="form-control" value="">-->
                            <input class="form-control" type="text" name="daterange_months" value="">
                            <input class="form-control" type="text" name="daterange_months" value="">


                        </div>
                    </div>
                    <div class="i-checks dateday"><label class=""><div class="iradio_square-green" style="position: relative;"><div class="iradio_square-green checked" style="position: relative;"><input type="radio" checked="" value="option2" name="a" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <i></i> Конкретная дата: </label>
                        <div class="input-group date" id="date_day">
                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                            <input type="text" class="form-control" value="">
                        </div>
                    </div>
                </div>
                <!--<div class="col-sm-6">-->
                <!---->
                <!---->

                <!--</div>-->
                <div class="col-sm-12">
                    <div class="hr-line-dashed"></div>
                    <button class="btn btn-primary" type="submit">Save changes</button>

                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>
</style>