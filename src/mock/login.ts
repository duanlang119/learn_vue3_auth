import {MockMethod} from 'vite-plugin-mock'

export default [
    {
        url:'/api/login',
        method:'post',
        response:({query})=>{
            return {
                code: 20000,
                data:{
                    token:'adminislogined'
                }
            }
        }
    },
    {
        url:'/api/info',
        method:'post',
        response:({query})=>{
            return {
                code: 20000,
                data:{
                    roles:'[admin]',
                    name:'admin',
                    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                }
            }
        }
    }
]