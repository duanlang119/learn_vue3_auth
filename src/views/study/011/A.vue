<template>
	<div>
		<h1>A组件</h1>
		{{s}}
		<button @click='btn'>按钮</button>
	</div>
</template>

<script setup>
import emitter from '@/plugins/Bus.js'
let s = ref('');
let str = ref('这是A组件的数据');

const btn = ()=>{
	emitter.emit('fn',str);
}

onBeforeMount(()=>{

emitter.on('fb',e=>{
	s.value = e.value;
})

})

</script>