<template>
	<div>
		{{ userInfo }}
		<button @click='btn'>修改info</button>
		<h1>A组件</h1>
		{{ aNum }}
		<hr />
		<B></B>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'
let store = useStore();


let userInfo = computed( ()=> store.state.user.userInfo );
const btn = ()=>{
	store.commit('changeInfo')
}


import B from './B.vue'
const aNum = inject('changeNum');
</script>

<!-- <script setup>

import { useStore } from 'vuex'

let store = useStore();
let num = computed( ()=> store.state.num );
let total = computed( ()=> store.getters.total );
const btn = ()=>{
	//store.commit('changeNum',300)
	store.dispatch( 'changeBtn' )
}


 
import B from './B.vue'
const aNum = inject('changeNum');
</script> -->