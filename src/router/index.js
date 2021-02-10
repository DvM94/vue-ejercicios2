import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejercicio1',
    name: 'Ejercicio 1',
    component: function () {
      return import('../views/Ejercicio1.vue')
    }
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio 2',
    component: function () {
      return import('../views/Ejercicio2.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
