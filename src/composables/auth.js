import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey = "admin-token"
const cookie = useCookies()

// ��ȡtoken
export function getToken(){
    return cookie.get(TokenKey)
}

// ����token
export function setToken(token){
    return cookie.set(TokenKey,token)
}


// ���token
export function removeToken(){
    return cookie.remove(TokenKey)
}