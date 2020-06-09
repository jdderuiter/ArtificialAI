import Vue from 'vue'
import VueRouter from 'vue-router'
import CameraPage from '@/pages/CameraPage'
import TestPage from '@/pages/TestPage'
import TestWatch from '@/pages/TestWatch'
import ProfilesPage from '@/pages/ProfilesPage'
import RatePage from '@/pages/RatePage'
import DeletePage from '@/pages/DeletePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'camera',
    component: CameraPage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/watch',
    name: 'testwatch',
    component: TestWatch
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: ProfilesPage
  },
  {
    path: '/delete',
    name: 'delete',
    component: DeletePage
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
