<template>
  <div class="home">
    {{ obj }}
    {{ arr }}
    <button @click='btn'>按钮</button>
    <HelloWorld msg="Welcome to Your Vue.js App" ref='hw'/>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import { ref , reactive } from 'vue'
export default {
  name: "Home",
  setup(){

    let arr = ref(['a','b','c']);

    let obj = reactive({
      a:1,
      b:2
    })

    let btn = ()=>{
      arr.value[0] = 'xxxx'
    }
    return {obj,btn ,arr }
    
  },
  components: {
    HelloWorld,
  },
};
</script>