import { defineStore } from 'pinia'

export const user = defineStore('user', {
  state: () => {
    return {
      age:18,
      nickName:'张三'
    }
  },
  getters:{
  	changeAge(){
  		console.log('getters');
  		return this.age + 10;
  	}
  },
  actions:{
  	upAge( val ){
  		this.age += val;
  	}
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [{
      key: 'test_user',
      storage: localStorage,
      //paths: ['age']
    }]
  }
})