## 17 Provide和Inject

12. Provide / Inject  ==> 依赖注入
	
	提供：
		<script setup>
		provide('changeNum', num );
		</script>

	注入：
		<template>
			<div>
				<h1>B组件</h1>
				{{ bNum }}
			</div>
		</template>

		<script setup>
		const bNum = inject('changeNum');
		</script>