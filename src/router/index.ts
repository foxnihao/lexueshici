import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Background from '../components/Background.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/me',
    name:'me',
    component:Login
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router