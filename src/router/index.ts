import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import game4 from '../pages/game4.vue'
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
  },
  {
    path:'/ktcsc',
    name:'ktcsc',
    component:game4
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router