<template>
  <div>
    <NavBar v-if="usuarioService.usuarioAutenticado() && !isLoginRouter()" />
    <Sidebar v-if="usuarioService.usuarioAutenticado() && !isLoginRouter()" />
    <RouterView />
  </div>
</template>

<script>
import NavBar from './components/NavBar/Navbar.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import UsuarioService from './service/resource/UsuarioService';

export default {
  name: 'App',
  data() {
    return {
      usuarioService: new UsuarioService(),
    }
  },
  components: {
    NavBar,
    Sidebar,
  },
  methods: {
    isLoginRouter() {
      return this.$route.name === 'Login'
    }
  },
}
</script>

<style scoped>
@import './App.css';
@import './bootstrap.css';
</style>