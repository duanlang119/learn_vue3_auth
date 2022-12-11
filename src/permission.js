import router  from '~/router'
import {getToken}  from '~/composables/auth'
import {toast}  from '~/composables/util'
import store from './store'

// ȫ��ǰ������
router.beforeEach(async (to, from,next) => {

    console.log(to, from)
    const token = getToken()
    // û�е�¼
    if(!token&&to.path!="/login"){
        toast("���ȵ�¼","error")
        return next({path:"/login"})
    }
    // ��ֹ�ظ���¼
    if(token&&to.path=="/login"){
        toast("��Ҫ��¼","error")
        return next({path:from.path?from.path:"/"})
    }

    // ����û���¼�ˣ��Զ���ȡ�û���Ϣ�����洢��vuex����

    if(token){
        await store.dispatch("getinfo")
    }

     next()
  })