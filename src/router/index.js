import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Profiles from '@/views/Profiles'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: Profiles
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
