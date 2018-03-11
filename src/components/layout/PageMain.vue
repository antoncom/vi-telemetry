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

                <!--<p-check name="my_check" color="primary" v-model="my_check" class="pretty p-icon p-round p-jelly">-->
                    <!--<i slot="extra" class="icon mdi mdi-check"></i>-->
                    <!--{{my_check}}-->
                <!--</p-check>-->

                <!--<p-check class="p-icon p-round p-tada" color="primary-o" v-model="my_check">-->
                    <!--<i slot="extra" class="icon mdi mdi-heart"></i>-->
                    <!--Good-->
                <!--</p-check>-->

                <p-check class="p-icon p-round p-round p-fill p-tada" v-model="my_check" color="success">
                    <i class="icon fa fa-check fa-1x" slot="extra"></i>
                    Pay Bills
                </p-check>

                <p-check class="p-default p-round p-smooth p-plain" color="success-o">Add</p-check>

                <p-check class="p-icon p-round p-smooth p-plain" color="success-o">
                    <i slot="extra" class="icon fa fa-check fa-1x"></i>
                    Favorite
                </p-check>

                <p-radio class="p-icon p-round p-smooth p-plain" name="radio1" v-model="my_radio" value="Male" color="success-o"><i slot="extra" class="icon fa fa-check fa-1x"></i>Male</p-radio>

                <!-- or if it's only p-default and p-round you can leave out class attribute -->
                <p-radio name="radio1" v-model="my_radio" value="Female">Female</p-radio>

                <!-- you can use p-input too -->
                <p-input type="radio" name="radio1" v-model="my_radio" value="Special">Special</p-input>

                <!--<slot name="consumption-form"></slot>-->
                    <slot name="data-tables"></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            my_check: '',
            my_radio: ''
        }
    },
    watch:  {
        my_check: function(val)   {
            console.log("CHECK="+val)
        },
        my_radio: function(value)   {
            console.log("RADIO="+value)
        }
    }
}
</script>

<style>
.pretty {
    font-size: 20px;
}
</style>