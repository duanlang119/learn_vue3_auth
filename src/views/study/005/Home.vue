<template>
  <div class="home">
    {{ obj }}
    <hr />
    {{ msg }} ==> {{msgChange}}
    <hr />
    {{ name }}   {{ age }}

    <button @click='btn'>按钮</button>
  </div>
</template>

<script setup>
let msg = ref('这是ref响应数据');
let obj = reactive({
  name:'张三',
  age:18,
  str:computed(()=>{
    return obj.name.slice(1,2)
  })
})

// let msgChange = computed(()=>{
//   return msg.value.slice(1,3);
// })

let msgChange = computed({
  get(){
    return msg.value.slice(1,6);
  },
  set(){
    console.log('设置了')
  }
})



let { name , age } = toRefs(obj);

const btn = ()=>{
  msgChange.value = '111';
  name.value='里斯'
  msg.value = '你好呀修改了呀';
}
onMounted(()=>{
  console.log('onMounted');
})
</script>
<!-- 
<script>
import { reactive,onMounted , toRefs ,computed }  from 'vue'
export default {
  name: "Home",
  setup(){

    let obj = reactive({
      name:'张三',
      age:18
    });
    const btn = ()=>{
      obj.name = '里斯'
    }
    onMounted(()=>{
      console.log('onMounted');
    })

    return {
        ...toRefs(obj),
        btn
    }
  },
  mounted(){
    console.log('mounted');
  }
};
</script> -->