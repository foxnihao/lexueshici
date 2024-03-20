import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Background from '../components/Background.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router