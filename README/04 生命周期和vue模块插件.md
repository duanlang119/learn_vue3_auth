# 04 生命周期和vue模块插件

4. setup
	
	4.1 是什么 ： 组合式 API

	4.2 来解决什么问题 :  使用 (data、computed、methods、watch) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，逻辑关注点的列表也会增长。尤其对于那些一开始没有编写这些组件的人来说，这会导致组件难以阅读和理解。


	4.3 响应区别： 

		vue2.x : Object.defineProperty()

		vue3.x : Proxy 

		1. Object.defineProperty()存在的问题

			1. 不能监听数组的变化
			2. 必须遍历对象的每一个属性

		2. Proxy 不需要遍历

	4.4 使用渲染函数:

		ref  :  就是定义数据的    		简单类型

		reactive  :  就是定义数据的  	复杂类型

	4.5 setup语法糖插件 ： unplugin-auto-import

		解决场景 ： 在组件中开发无需每次都引入 import { ref }..

		1. 下载安装

			npm i unplugin-auto-import -D

		2. 配置：vite.config.js中

			import AutoImport from 'unplugin-auto-import/vite'
			export default defineConfig({
			  plugins: [
			  	AutoImport({
			  		imports:['vue','vue-router']//自动导入vue和vue-router相关函数
			  	})
			  ],
			})


5. 生命周期

	5.1 选项式 API
		beforeCreate ...

	5.2 setup 组合式API

		注意：没有beforeCreate和created
		其他生命周期要使用前面加"on" 例如：onMounted

	参考链接：https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
