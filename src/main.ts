import '@/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || '世界旅行'
  next()
})

createApp(App).use(router).mount('#app')