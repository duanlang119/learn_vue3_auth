## 18. Vuex
13. Vuex
	
	13.1 state:
		let num = computed( ()=> store.state.num );
	13.2 getters:
		let total = computed( ()=> store.getters.total );
	13.3 mutations:
		store.commit('xxx')
	13.4 actions:
		store.dispatch( 'xxx' )
	13.5 modules: 

		和之前的版本使用一样

	13.6 Vuex持久化存储【插件】

		1. npm i vuex-persistedstate -S

		2. import persistedState from 'vuex-persistedstate'

		3. export default createStore({
		  modules: {
		  	user
		  },
		  plugins:[persistedState({
		  	key:'xiaoluxian',
		  	paths:['user']
		  })]
		});


	
