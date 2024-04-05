import '@/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || '旅行'
  next()
})


createApp(App).use(router).mount('#app')