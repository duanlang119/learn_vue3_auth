import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "~":fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server:{
    proxy:{
      // '/eduservice': 'http://localhost:8001' 
      // '/eduservice': {
      //   target: 'http://localhost:8001',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/eduserv]ice/, '')
      // },
    }
  },

  plugins: [vue(),
    WindiCSS(),
    viteMockServe({mockPath:'./src/mock',watchFiles:true,supportTs:true}),
    AutoImport({
      imports:['vue','vue-router']//自动导入vue和vue-router相关函数
    })
  ]
})
