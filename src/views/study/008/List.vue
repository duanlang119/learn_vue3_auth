<template>
	<div> 
		这是子组件 ==> {{ msg }}
	</div>
</template>
<!-- <script type="text/javascript">
export default{
	props:['msg'],
	setup( props ){
		let obj = props.msg;
		return {
			obj
		}
	}
}
</script> -->
<script setup>
defineProps({
	msg:{
		type:String,
		default:'1111'
	}
})
</script>
<!-- <script type="text/javascript">
export default{
	props:['msg']
}
</script> -->