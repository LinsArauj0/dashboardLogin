<template>
     <div id="main">
        <header class="menu-horizontal">
            <ul class="header-menu">
                <li><router-link to="#"><img src="../../icons/menu.png"/></router-link></li>
            </ul>
            <div class="header-menu-text">
                <ul>
                    <li><router-link to="#" class="utilitarios">Utilitários</router-link></li>
                    <li><router-link to="#" class="manager">Manager</router-link></li>
                </ul>
            </div>
        </header>
        <nav class="menu-vertical">
            <ul class="menu">
                <li><router-link to="#"><img src="../../icons/dashboard.png"/></router-link></li>
                <li><router-link to="#"><img src="../../icons/Group6.png"/></router-link></li>
                <li><router-link to="#"><img src="../../icons/Group.png"/></router-link></li>      
                <li><router-link to="#"><img src="../../icons/customer-service.png"/></router-link></li>      
                <li><router-link to="#"><img src="../../icons/lipboard-notes.png"/></router-link></li>      
                <li><router-link to="#"><img src="../../icons/outline-settings.png"/></router-link></li>                     
            </ul>
        </nav>
    </div>
</template>

<script>
export default{
    name:'HeaderScreen',  
}
</script>

<style>
@import './Header.css';
</style>