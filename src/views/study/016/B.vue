<template>
	<div>
		<h1>B组件</h1>
		{{ num }}
		<button @click='favBtn(2)'>按钮</button>
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
