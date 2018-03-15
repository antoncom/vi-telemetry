<template>
<div class="wrapper wrapper-content animated fadeInRight">
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view class="animated"></router-view>
    </transition>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-9">
            <h2>This is main title</h2>
            <ol class="breadcrumb">
                <li>
                    <a href="index.html">This is</a>
                </li>
                <li class="active">
                    <strong>Breadcrumb</strong>
                </li>
            </ol>
        </div>
        <div class="col-lg-3">
            <div class="title-action">
                <a href="" class="btn btn-primary">This is action area</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div id="myid" class="wrapper wrapper-content">
                <!--###########-->
                <!--<dropdown class="form-group">
                    <div class="input-group">
                        <input class="form-control" type="text" name="from" v-model="dating_from">
                        <div class="input-group-btn">
                            <btn class="dropdown-toggle"><i class="glyphicon glyphicon-calendar"></i></btn>
                        </div>
                    </div>
                    <template slot="dropdown">
                        <li>

                        </li>
                    </template>
                </dropdown>-->
                <!--<slot>Дата пикер</slot>-->
                <!--<date-picker2 v-model="dating_from" initial-view="m"/>-->
                <!--###########-->
                <slot name="consumption-form">Форма  </slot>
                <slot>Пикер1</slot>
                <br />
                <br />
                <!--<slot>Пикер2</slot>-->
                <!--<slot name="data-tables"></slot>-->
                <!--<slot name="data-table"></slot>-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
    //import DatePicker2 from './datepicker/DatePicker2.vue'
export default {
    data: function () {
        return {
            date: null,
            //dating_from: ''
        }
    }
}
</script>

