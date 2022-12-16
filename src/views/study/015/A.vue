<template>
	<div style='height: 600px;background: green;'>
		{{res}}
		<h1>A组件</h1>
		
	</div>
</template>

<script setup>
import axios from 'axios';
let list = ref([]);
let res = await axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders');
list.value = res.data.data.list
</script>

