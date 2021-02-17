import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejercicio1 from '../views/Ejercicio1.vue'
import Ejercicio2 from '../views/Ejercicio2.vue'
import Ejercicio3 from '../views/Ejercicio3.vue'
import Ejercicio4 from '../views/Ejercicio4.vue'
import Ejercicio5 from '../views/Ejercicio5.vue'
import Ejercicio6 from '../views/Ejercicio6.vue'
import Ejercicio7 from '../views/Ejercicio7.vue'

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
  },
  {
    path: '/ejercicio4',
    name: 'Ejercicio 4',
    component: Ejercicio4
  },
  {
    path: '/ejercicio5',
    name: 'Ejercicio 5',
    component: Ejercicio5
  },
  {
    path: '/ejercicio6',
    name: 'Ejercicio 6',
    component: Ejercicio6
  },
  {
    path: '/ejercicio7',
    name: 'Ejercicio 7',
    component: Ejercicio7
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
