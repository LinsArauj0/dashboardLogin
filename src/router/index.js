import { createRouter, createWebHashHistory } from 'vue-router'
import LoginScreen from '../views/Login/LoginColaborador.vue'
import Utilitarios from '@/views/Utiliario/Utilitarios.vue'
import Usuarios from '@/views/Usuarios/Usuarios.vue'
import ListaUser from '@/views/ListUsuario/ListaUser.vue'
import authGuard from '@/auth/authGuard'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginScreen
  },
  {
    path:'/utilitarios',
    name: 'Utilitarios',
    component: Utilitarios,
    beforeEnter: authGuard
  },
  {
    path:"/usuarios",
    name: 'Usuarios',
    component: Usuarios,
    beforeEnter: authGuard
  },
  {
    path: "/lista",
    name: "ListEndereco",
    component: ListaUser,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
