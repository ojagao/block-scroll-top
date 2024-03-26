import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import TopPage from '@/components/TopPage.vue'
import MountainPage from '@/components/MountainPage.vue'
import SeaPage from '@/components/SeaPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
    meta: { title: '世界旅行' }
  },
  {
    path: '/mountain',
    name: 'mountain',
    component: MountainPage,
    meta: { title: '山' }
  },
  {
    path: '/sea',
    name: 'sea',
    component: SeaPage,
    meta: { title: '海' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
