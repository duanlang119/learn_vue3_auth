<template>
	<div>
		{{ changeNum }}
		{{ changeNum }}
		{{ changeNum }}

		<h1>A组件</h1>
		{{ num }}
		{{ name }}
		<button @click='changeName'>修改名称</button>
		<button @click='btn'>+=操作</button>
		<button @click='reset'>reset</button>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/pinia'
const store = useStore();

let { name , num , changeNum } = storeToRefs(store);

const changeName = ()=>{

	// name.value = '李四';
	// num.value = 10;

	//批量更新
	store.$patch(state=>{
		state.num++;
		state.name = '炸雷';
	})

}


const btn = ()=>{
	store.upNum( 200 );
}

const reset = ()=>{
	store.$reset();
}
</script>