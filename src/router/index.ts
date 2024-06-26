import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'


import FlyingWord from '@/pages/FlyingWord.vue'
import game4 from '@/pages/game4.vue'
import game2 from '@/pages/game2.vue'
import UpDown from '@/pages/UpDown.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/me',
    name:'me',
    component:Login
  },{
    path:'/flyword',
    name:'flyword',
    component: FlyingWord
  },{
    path:'/lookguess',
    name:'lookguess',
    component:game4
  },{
    path:'/updown',
    name:'updown',
    component: UpDown
  },
  {
    path:'/fungrim',
    name:'fungrim',
    component:game2
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router