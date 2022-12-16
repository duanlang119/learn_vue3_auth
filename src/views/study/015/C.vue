<template>
	<div>
		<h1>C组件==>{{ list }}</h1>
		<img src="@/assets/1.png" style='width:300px;height: 300px;'>
	</div>
</template>

<script setup>
import axios from 'axios';
let list = ref([]);
let res = await axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders');
list.value = res.data.data.list
</script>

