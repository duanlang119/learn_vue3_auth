## 一、创建vue3项目 : 基于构建工具webpack vue create 项目名称 
1. 基于webpack的项目有一个问题，就是编译慢 
2. 解决：使用vite 3. vite优势：在开发过程中大大提升我们的效率 

https://vitejs.cn/vite3-cn/guide/why.html#the-problems

## 二、 创建vue3项目 ： 
基于vite npm init @vitejs/app 

项目名称 **如果选择vue的项目，默认版本是vue3 

### 2.1 vite + vue3 的方式 
1. 把create创建vue的src整个复制粘贴到基于vite的项目中 
2. 把create创建的package.json中的 "dependencies": { "core-js": "^3.6.5", "vue": "^3.0.0", "vue-router": "^4.0.0-0", "vuex": "^4.0.0-0" }, **复制粘贴到vite的项目中 
3. npm i ：安装依赖 
4. npm run dev 启动修改错误 

### 2.2 vite + vue2 的方式 
1. 把create创建vue的src整个复制粘贴到基于vite的项目中 
2. 把create创建的package.json中的 "dependencies": { "core-js": "^3.6.5", "vue": "^2.6.11", "vue-router": "^3.2.0", "vuex": "^3.4.0" }, **复制粘贴到vite的项目中 
3. npm i ：安装依赖 
4. npm install vite-plugin-vue2 -D 
5. 在vite.config.js配置 import { defineConfig } from 'vite' import { createVuePlugin } from 'vite-plugin-vue2' export default { plugins: [ createVuePlugin(/* options */) ], } 6. cnpm i vue-template-compiler -S