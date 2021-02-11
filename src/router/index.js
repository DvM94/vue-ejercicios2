import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejercicio1 from '../views/Ejercicio1.vue'
import Ejercicio2 from '../views/Ejercicio2.vue'
import Ejercicio3 from '../views/Ejercicio3.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejercicio1',
    name: 'Ejercicio 1',
    component: Ejercicio1
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio 2',
    component: Ejercicio2
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio 3',
    component: Ejercicio3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
