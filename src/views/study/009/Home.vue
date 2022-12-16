<template>
	<div>
		<List @fn='changeHome'></List>
		父组件： {{msg}}
	</div>
</template>

<script setup>
import List from './List.vue'
let msg=ref(20)
const changeHome = (n)=>{
	console.log( n.value );
	msg=n
}
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
