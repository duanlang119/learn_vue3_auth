import { ElNotification } from 'element-plus'

// �ɹ���ʾ
export function toast(message,type='success',dangerouslyUseHTMLString=false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration:3000
    })
}