<template>
	<div>
		<h1>B组件</h1>
		{{ s }}
		<button @click='btn'>按钮</button>
	</div>
</template>

<script setup>
import emitter from '@/plugins/Bus.js'

let s = ref('');
let str = ref('这是来自B组件的数据');
const btn = ()=>{
	emitter.emit('fb',str);
}

onBeforeMount(()=>{

	emitter.on('fn',e=>{
		s.value = e.value;
	})

})

</script>