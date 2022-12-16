<template>
	<div> 
		这是子组件 ==> {{ num }}
		<button @click='changeNum'>按钮</button>
	</div>
</template>

<script setup lang='ts'>
let num = ref(200);

const emit = defineEmits<{
  (e: 'fn', id: number): void
}>()

const changeNum = ()=>{
	emit('fn',num)
}	
</script>



<!-- <script type="text/javascript">
export default{
	setup(props,{ emit }){	

		let num = ref(100);
		const changeNum = ()=>{
			emit('fn',num)
		}

		return {
			num,
			changeNum
		}
		
	}
}
</script> -->


<!-- <script type="text/javascript">
export default{
	data () {
		return {
			num:10
		}
	},
	methods:{
		changeNum(){
			this.$emit('fn',this.num)
		}
	}
}
</script> -->