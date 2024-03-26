import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstBootView from '@/views/FirstBootView.vue'
import LoginView from '@/views/LoginView.vue'
// import FirstBootView from '@/views/FirstBootView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
      // component: FirstBootView,
      // component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SettingUpAppLoadingScreenView.vue')
    }
  ]
})

export default router
