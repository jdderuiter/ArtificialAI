import Vue from 'vue'
import VueRouter from 'vue-router'
import CameraPage from '@/pages/CameraPage'
import ProfilesPage from '@/pages/ProfilesPage'
import RatePage from '@/pages/RatePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'camera',
    component: CameraPage
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: ProfilesPage
  },
  {
    path: '/rating',
    name: 'rating',
    component: RatePage
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
