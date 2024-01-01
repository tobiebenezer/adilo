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
    {
      path: '/recentrecording',
      name: 'showRecording',
      meta: { layout: TheSideBar },
      component: () => import('../views/ShowRecordingView.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/LivePreviewView.vue')
    }
  ]
})

export default router
