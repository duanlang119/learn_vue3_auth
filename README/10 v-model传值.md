## 10 v-model传值

	4.11 v-model传值

		父:
			<List v-model:num='num'></List>
			<script setup>
			import List from '../components/List.vue'
			let num = ref(1);
			</script>
		子:
			const props = defineProps({
				num:{
					type:Number,
					default:100
				}
			})
			const emit = defineEmits(['update:num'])
			const btn = ()=>{
				emit('update:num',200);
			}
