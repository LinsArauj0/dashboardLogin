<template>
    <header class="menu-horizontal fixed-top">
      <ul class="header-menu">
        <li><router-link to="#"><img src="../../icons/menu.png"/></router-link></li>
      </ul>
      <div class="header-menu-text">
        <div>
          <ul class="utilitarios">
            <li class="menu-itens"> 
              <router-link to="/utilitarios" >Utilitários </router-link> 
            </li>
            <li v-if="currentRoute !== '/utilitarios' && currentRoute !== '/'" class="menu-itens">
              <span class="mr-2">/</span>
              <router-link to="/usuarios"> 
                Usuarios</router-link>
            </li>
          </ul>
        </div>
          <div class="manager">
            <span >Manager</span>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    computed: {
      currentRoute() {
        return this.$route.path;
      }
    }
  }
  </script>
  
  <style scoped>
  @import './navbar.css';
  </style>