import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'
import me from '../components/me.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/me',
    name: 'me',
    component: me
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
