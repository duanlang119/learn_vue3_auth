## 16 Mixin : 混入
11. Mixin : 混入

	是什么：来分发 Vue 组件中的可复用功能

	11.1 setup写法
		mixin.js
			import { ref } from 'vue'
			export default function(){

				let num = ref(1);
				let fav = ref(false);

				let favBtn = ()=>{
					num.value += 1;
					fav.value = true;
					setTimeout(()=>{
						fav.value = false;
					},2000)
				}

				return {
					num,
					fav,
					favBtn
				}

			}

		组件：
			<template>
				<div>
					<h1>A组件</h1>
					{{ num }}
					<button @click='favBtn'>
						{{ fav ? '收藏中...' : '收藏' }}
					</button>
				</div>
			</template>

			<script setup>
			import mixin from '../mixins/mixin.js'
			let { num , fav , favBtn } = mixin();
			</script>


	11.2 选项式api写法

		mixin：
			export const fav = {
				data () {
					return {
						num:10
					}
				},
				methods:{
					favBtn( params ){
						this.num += params;
					}
				}
			}

		组件：
			<template>
				<div>
					<h1>A组件</h1>
					{{ num }}
					<button @click='favBtn(1)'>按钮</button>
				</div>
			</template>

			<script type="text/javascript">
			import { fav } from '../mixins/mixin.js'
			export default{
				data () {
					return {
						str:'你好'
					}
				},
				mixins:[fav]
			}
			</script>