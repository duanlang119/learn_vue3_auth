## 21 Pinia持久化存储
14. Pinia

	14.1 Vuex和pinia的区别

		参考网址： https://github.com/vuejs/rfcs/pull/271 

		1. pinia没有mutations，只有：state、getters、actions
		2. pinia分模块不需要modules（之前vuex分模块需要modules）
		3. pinia体积更小（性能更好）
		4. pinia可以直接修改state数据

	14.2 pinia使用

		npm install pinia-plugin-persist

		官方网址：https://pinia.vuejs.org/

		具体使用：https://xuexiluxian.cn/blog/detail/242b0ed71feb412991f04d448fc86636

	14.3 pinia持久化存储

		参考链接：https://xuexiluxian.cn/blog/detail/acebacd99612447e8c80dcf6354240f6