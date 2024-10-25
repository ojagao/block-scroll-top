import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import TopPage from '@/components/TopPage.vue'
import MountainPage from '@/components/MountainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
    meta: { title: 'リロード可能' }
  },
  {
    path: '/stop-scroll',
    name: 'mountain',
    component: MountainPage,
    meta: { title: 'リロード不可' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
