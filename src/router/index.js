import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import home from '../view/home.vue'
import main from '../components/main.vue'
import me from '../components/me.vue'
import pub from '../components/pub.vue'
import detail from '../components/detail.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'main',
        name: 'main',
        component: main
      },
      {
        path: 'pub',
        name: 'pub',
        component: pub
      },
      {
        path: 'me',
        name: 'me',
        component: me
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
