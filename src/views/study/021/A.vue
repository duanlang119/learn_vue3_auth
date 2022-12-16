<template>
	<div>
		
		<h1>A组件</h1>
		{{ age }} {{ nickName }} 
		<hr />
		getters: {{ changeAge}}
		<hr />
		actions: <button @click='addAge'>增加年龄</button>
		<hr />
		shop: {{ shopList }}

	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { user } from '@/pinia/user'
import { shop } from '@/pinia/shop'

const userStore = user();
const shopStore = shop();


let { age , nickName , changeAge} = storeToRefs( userStore  );

let { shopList } = storeToRefs( shopStore  );

const addAge = ()=>{
	userStore.upAge( 1 );
}

</script>