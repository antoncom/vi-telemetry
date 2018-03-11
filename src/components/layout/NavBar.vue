<template>
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                         </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="#" @click.prevent="logout">Logout</a></li>
                        </ul>
                </div>
                <div class="logo-element">
                    IN+
                </div>
            </li>

            <router-link tag="li" to="/" exact-active-class="active">
                <a href="/">
                    <i class="fa fa-th-large"></i>
                    <span class="nav-label">Главная</span>
                </a>
            </router-link>

            <router-link tag="li" to="user_consumption" exact-active-class="active">
                    <a href="user_consumption">
                        <i class="fa fa-th-large"></i>
                        <span class="nav-label">Потребление</span>
                    </a>
            </router-link>
        </ul>

    </div>
</nav>
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