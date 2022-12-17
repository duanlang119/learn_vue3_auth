import { createStore } from 'vuex'
import { login, getinfo} from '@/api/manager'
import { setToken } from '@/composables/auth'

// ����һ���µ� store ʵ��
const store = createStore({
    state () {
      return {
        user: {}
      }
    },
    mutations: {
      //��¼�û���Ϣ
      SET_USERINFO(state,user){
        state.user=user
      }
    },
    actions:{
      // ��ȡ��ǰ��¼�û���Ϣ
      async login( { username,password }){
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
      // ��ȡ��ǰ��¼�û���Ϣ
      getinfo({ commit}){
        return new Promise((resolve,reject)=>{
          getinfo().then(res=>{
            commit("SET_USERINFO",res)
            resolve(res)
          }).catch(err=>reject(err))
        })        
      }

    }
  })

  export default store