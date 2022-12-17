import { defineStore } from 'pinia'
import { login, getinfo} from '@/api/manager'
import { setToken } from '@/composables/auth'

export const user = defineStore('user', {
  state: () => {
    return {
      age:18,
      nickName:'张三',
      userInfo:{}
    }
  },
  getters:{
  	changeAge(){
  		console.log('getters');
  		return this.age + 10;
  	}
  },
  actions:{
    // 获取当前登录用户信息
    async login({ username,password }){
      const res = await login(username,password)
      setToken(res.token)
      return Promise.resolve(undefined)

      // return new Promise((resolve,reject)=>{
      //     login(username,password).then(res=>{
      //         setToken(res.token)

      //         resolve(res)
      //     }).catch(err=>reject(err))
      // })
  },
  	getinfo(){
  		// this.age += val;
      return new Promise((resolve,reject)=>{
        getinfo().then(res=>{
          this.userInfo = res;
          console.log(res)
          resolve(res)
        }).catch(err=>reject(err))
      })   
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