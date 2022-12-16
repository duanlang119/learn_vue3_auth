<template>
  <div class="home">
    <ul>
      <li v-for='item in 5' :key='item' :ref="setItemRef">
        {{ item }}
      </li>
    </ul>

    <HelloWorld msg="Welcome to Your Vue.js App" ref='hw'/>
    
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  name: "Home",
  data () {
    return {
      msg:'123',
      itemRefs:[]
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    //console.log( this.itemRefs );
    console.log( this.$refs.hw )
  },
  methods:{
    setItemRef( el ){
      if (el) {
        this.itemRefs.push(el)
      }
    }
  },
  components: {
    HelloWorld,
  },
};
</script>