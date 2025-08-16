import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      // Excluir directorios de documentación para evitar recargas innecesarias
      ignored: [
        '**/Referencias/**',
        '**/.trae/**',
        '**/node_modules/**',
        '**/.git/**'
      ]
    }
  }
})
