<template>
	<div>
		
		<h1>A组件</h1>
		{{ age }} {{ nickName }} {{userInfo}}
		<hr />
		getters: {{ changeAge}}
		<hr />
		actions: <button @click='addAge'>获取信息</button>

		<hr />
		shop: {{ shopList }}
		<hr />
		actions: <button @click='loginT'>登录</button>

	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { user } from '@/pinia/user'
import { shop } from '@/pinia/shop'
import { toast } from '@/composables/util'

const router = useRouter()

const userStore = user();
const shopStore = shop();


let { age , nickName ,userInfo, changeAge} = storeToRefs( userStore  );

let { shopList } = storeToRefs( shopStore  );

const addAge = ()=>{
	userStore.getinfo( 1 );
}

const form = {
  username:"dd",
  password:"111"
}

const loginT = (form)=>{
    console.log(form);
	userStore.login(form).then(res=>{
            toast("登录成功")
            router.push("/")
        }).finally(()=>{
            console.log("loading.value = false")
        })
    
}

</script>