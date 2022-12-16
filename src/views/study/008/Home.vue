<template>
	<div>
		<List :msg='msg'></List>
	</div>
</template>

<script setup>
import List from './List.vue'
let msg = ref('这是父传过去的数据');
</script>

<!-- <script type="text/javascript">
import List from '../components/List.vue'
export default{
	data () {
		return {
			msg:'这是传过去的数据'
		}
	},
	components:{
		List
	}
}
</script>
 -->
