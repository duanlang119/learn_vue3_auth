<template>
	
	<Suspense>
		<template #default>
			<A></A>
		</template>
		<template #fallback>
			<B>加载中...</B>
		</template>
	</Suspense>
	<B></B>

	<div ref='target'>
		<Suspense v-if='targetIsVisible'>
			<template #default>
				<C ></C>
			</template>
			<template #fallback>
				加载中...
			</template>
		</Suspense>
	</div>
		
	
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'

import { onMounted } from 'vue';

const A = defineAsyncComponent(() =>
  import('./A.vue')
)

import B from './B.vue'

const C = defineAsyncComponent(() =>
  import('./C.vue')
)

const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
  	if( isIntersecting ) {
  		targetIsVisible.value = isIntersecting
  	}
    
  },
)
onMounted(()=>{
	console.log(targetIsVisible.value)
})
</script>