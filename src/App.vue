<template>
  <div>
    
    <NavBar v-if="!isLoginRouter()"/>
    <Sidebar v-if="!isLoginRouter()"/>
    <RouterView />
  </div>
</template>

<script>
import NavBar from './components/NavBar/Navbar.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
  export default {
    name: 'App',
    components: {
      NavBar,
      Sidebar,
    },
    methods:{
      isLoginRouter(){
        return this.$route.name === 'Login'
      }
    }
  }
</script>

<style>
@import './App.css';
@import './bootstrap.css';
</style>