import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheSideBar from "@/components/layout/TheSideBar.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: TheSideBar },
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   meta: { layout: TheSideBar },
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
