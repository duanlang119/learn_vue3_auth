<template>
	<div>
		<h1>A组件</h1>
		{{ aNum }}
		<button @click='btn'>A按钮</button>
		<hr />
		<B></B>
	</div>
</template>

<script setup>
import B from './B.vue'
const aNum = inject('changeNum');
const btn = ()=>{
	aNum.value = 111;
}
</script>