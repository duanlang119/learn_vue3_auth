import router  from '@/router'
import {getToken}  from '@/composables/auth'
import {toast}  from '@/composables/util'
import store from './store'

// 全局前置守卫
router.beforeEach(async (to, from,next) => {

    console.log(to, from)
    const token = getToken()
    // 没有登录
    if(!token&&to.path!="/login"){
        toast("请先登录","error")
        return next({path:"/login"})
    }
    // 防止重复登录
    if(token&&to.path=="/login"){
        toast("不要登录","error")
        return next({path:from.path?from.path:"/"})
    }

    // 如果用户登录了，自动获取用户信息，并存储在vuex当中

    if(token){
        await store.dispatch("getinfo")
    }

     next()
  })