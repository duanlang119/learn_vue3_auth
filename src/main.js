import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import pinia from './pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'





const app = createApp(App)

// �� store ʵ����Ϊ�����װ
app.use(store)
app.use(pinia)
app.use(router)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
import 'virtual:windi.css'

import './permission'

app.mount('#app')
