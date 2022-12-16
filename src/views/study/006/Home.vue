<template>
	<div>
		<input type="" name="" v-model='msg'>
		<input type="" name="" v-model='str'>
		<input type="" name="" v-model='obj.a'>
		<input type="" name="" v-model='obj.arr'>
	</div>
</template>

<script setup>
let msg = ref('这是数据');
let str = ref('数据2');
let obj = reactive({
	a:1,
	arr:['a','b','c']
})
watch( msg , (newVal,oldVal)=>{
	console.log(  newVal,oldVal  )
},{
	immediate:true
})

watch( ()=>obj.arr , (newVal,oldVal)=>{
			console.log( newVal,oldVal )
		})

</script>
<!-- <script type="text/javascript">
export default{
	setup(){

		let msg = ref('这是一个数据');
		let str = ref('这是str');
		let obj = reactive({
			a:1,
			arr:['a','b','c']
		})

		watchEffect(()=>{
			console.log(  msg.value  )
		})

		watch( ()=>obj.arr , (newVal,oldVal)=>{
			console.log( newVal,oldVal )
		})

		watch( msg , (newVal,oldVal)=>{
			console.log(  newVal,oldVal )
		},{
			immediate:true
		})

		watch( str , (newVal,oldVal)=>{
			console.log(  newVal,oldVal )
		},{
			immediate:true
		})

		watch([msg,str],(newVal,oldVal)=>{
			console.log(  newVal,oldVal )
		},{
			immediate:true
		})

		return {
			msg,
			str,
			obj
		}
	}
}
</script> -->

<!-- <script type="text/javascript">
export default {
	data () {
		return {
			msg:'这是一个数据',
			obj:{
				a:1
			}
		}
	},
	watch:{
		msg( newVal , oldVal ){
			console.log( newVal , oldVal  )
		},
		msg:{
			handler(newVal , oldVal){
				console.log( newVal , oldVal  )
			},
			immediate:true
		},
		obj:{
			handler(newVal , oldVal){
				console.log( newVal , oldVal  )
			},
			immediate:true,
			deep:true
		}
	}
}
</script> -->