import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Vuetifyプラグインの追加
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
