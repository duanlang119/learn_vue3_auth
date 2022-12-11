import axios from "axios"
import { toast } from '~/composables/util'
import { getToken } from '~/composables/auth'

const service = axios.create({
    baseURL:"/api"
})

// �������������
service.interceptors.request.use(function (config) {
    // �ڷ�������֮ǰ��Щʲô
    // const cookie = useCookies()
    // const token = cookie.get("admin-token")
    const token = getToken()
    if(token){
        config.headers["token"] = token

    }


    return config;
  }, function (error) {
    // �����������Щʲô
    return Promise.reject(error);
  });

// �����Ӧ������
service.interceptors.response.use(function (res) {
    // ����Ӧ��������ʲô
    return res.data.data;
  }, function (error) {
    // ElNotification({
    //     message: error.response.data.msg || "����ʧ��",
    //     type: 'error',
    //     duration:3000
    // })

    toast(error.response.data.msg || "����ʧ��",'error')

    // ����Ӧ��������ʲô
    return Promise.reject(error);
  });


export default service