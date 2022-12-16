<template>
	<div>

		<List v-model:num='num'></List>
		<List v-model:num='num'></List>
		<List v-model:num='num'></List>

		父组件的{{num}}
	</div>
</template>

<script setup>
import List from './List.vue'
let num = ref(1);
</script>

<!-- <script type="text/javascript">
import List from '../components/List.vue'
export default{
	components:{
		List
	},
	setup(){
		let changeHome = ( n )=>{
			console.log( n.value )
		}	
		return {
			changeHome
		}
	}
}
</script>
 -->
<!-- <script type="text/javascript">
import List from '../components/List.vue'
export default{
	data () {
		return {
			n:0
		}
	},
	components:{
		List
	},
	methods:{
		changeHome( n ){
			this.n = n;
			console.log( n )
		}
	}
}
</script> -->
