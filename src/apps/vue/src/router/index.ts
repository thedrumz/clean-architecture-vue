import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ChargerLayout from '../components/Charger/ChargerLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ChargerLayout',
    component: ChargerLayout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
