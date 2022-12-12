import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  },

  server:{
    proxy:{
      '/eduservice': 'http://localhost:8001' 
      // '/eduservice': {
      //   target: 'http://localhost:8001',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/eduserv]ice/, '')
      // },
    }
  },

  plugins: [vue(),WindiCSS()]
})
