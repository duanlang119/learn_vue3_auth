<template>
	<div> 
		<h1>这是list.vue组件</h1>
		<hr />
		子：{{ num }}
		<button @click='btn'>按钮</button>
	</div>
</template>

<script setup>
	
const props = defineProps({
	num:{
		type:Number,
		default:100
	}
})

const emit = defineEmits(['update:num'])

const btn = ()=>{
	let num1=props.num+1;
	emit('update:num',num1);
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