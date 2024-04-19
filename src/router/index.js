import { createRouter, createWebHashHistory } from 'vue-router'
import LoginScreen from '../views/Login/LoginColaborador.vue'
import Utilitarios from '@/views/Utiliario/Utilitarios.vue'
import Usuarios from '@/views/Usuarios/Usuarios.vue'
import Error from '@/views/PageError/Error.vue'
import authGuard from '@/auth/authGuard'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginScreen
  },
  {
    path:'/error-404',
    component: Error,
    beforeEnter: authGuard
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
    path:'/:catchAll(.*)',
    redirect: '/error-404'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
