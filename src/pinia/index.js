import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      num: 0,
      name: 'Eduardo',
      changeNum:['a','b','c']
    }
  },
  getters:{
    counterPar(  ){
        console.log(111);
        return this.num + 100;
    }
},
  actions:{
    changeCounter( val ){
        this.num += val;
    }
}
})