<template>
  <div class="home">
     {{ msg }}
     {{ obj }}
     <button @click='btn'>按钮</button>
  </div>
</template>

<script setup>
let msg = ref('这是ref响应数据');
let obj = reactive({
  a:1,
  b:2
})
const btn = ()=>{
  msg.value = '你好呀修改了呀';
}
onMounted(()=>{
  console.log('onMounted');
})
</script>

<!-- <script>
import { onMounted }  from 'vue'
export default {
  name: "Home",
  data (){
    console.log('data');
    return {}
  },
  setup(){
    console.log('setup')
    onMounted(()=>{
      console.log('onMounted');
    })
  },
  mounted(){
    console.log('mounted');
  }
};
</script> -->