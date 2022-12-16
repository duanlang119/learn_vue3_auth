<template>
	
	<A></A>
	
</template>

<script setup>
import A from './A.vue'
let num = ref(100);
provide('changeNum', num );
</script>