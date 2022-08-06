import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      // 多页面打包配置
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html')
      }
    },
  },
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
    },
    proxy: {
      '/api': {
        // target
        // changeOrigin
        
      }
    }
  }
})
