<template>
	<div>

		<router-link to='/about'>关于我们</router-link>
		<button @click='go'>按钮</button>
		
	</div>
</template>

<script setup>
let router = new useRouter;
let route = new useRoute;
console.log( route.query.act )
let go = ()=>{
	router.push('/about')
}
</script>

<!-- <script type="text/javascript">
export default{
	setup(){
		let uses = new useRouter;

		let go = ()=>{
			uses.push('/about')
		}

		return { go }
	}
}
</script> -->
