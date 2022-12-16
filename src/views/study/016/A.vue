<template>
	<div>
		<h1>A组件</h1>
		{{ num }}
		<button @click='favBtn(1)'>按钮</button>
	</div>
</template>

<script type="text/javascript">
import { fav } from './mixins/mixin.js'
export default{
	data () {
		return {
			str:'你好'
		}
	},
	mixins:[fav]
}
</script>