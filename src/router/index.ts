import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Background from '../components/Background.vue'
import TopTab from '@/components/TopTab.vue'
import FlyingWord from '@/pages/FlyingWord.vue'
import game4 from '@/pages/game4.vue'
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
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router