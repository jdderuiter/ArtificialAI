import Vue from 'vue'
import VueRouter from 'vue-router'
import CameraPage from '@/pages/CameraPage'
import OnboardingPageAI from '@/pages/OnboardingPages/AI'
import OnboardingPageSubject from '@/pages/OnboardingPages/Subject'
import WatchPage from '@/pages/WatchPage'
import ProfilePage from '@/pages/ProfilePage'
import RatePage from '@/pages/RatePage'
import DeletePage from '@/pages/DeletePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/camera',
    name: 'camera',
    component: CameraPage
  },
  {
    path: '/test',
    name: 'test',
    redirect: '/'
  },
  {
    path: '/onboarding-ai',
    name: 'onboarding-ai',
    component: OnboardingPageAI
  },
  {
    path: '/',
    name: 'onboarding',
    component: OnboardingPageSubject
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
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
