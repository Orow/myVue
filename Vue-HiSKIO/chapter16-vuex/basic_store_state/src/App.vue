<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
// import store from './store'; // 這邊import，下面直接取用store即可
import {mapState, mapMutations} from 'vuex';

export default {
  // computed: {
  //   count(){
  //     return this.$store.state.count; // store 在 main.js
  //     // return store.state.count; // store 在本頁實例 import
  //   },
  // },
  
  // methods: {
  //   addCount(){
  //     this.$store.commit('addCount'); // store 在 main.js
  //     // store.commit('addCount'); // store 在本頁實例 import
  //   },
  // },

  // mapState
  // computed: mapState(['count']),

  // mapMutations
  // methods: mapMutations(['addCount']),

  data(){
    return {
      localCount: 0,
    };
  },

  // mapState, mapMutations 結合ES6 Spread 語法來寫多個 computed 跟 methods
  computed: {
    ... mapState(['count']),
    //  本身實例的computed
    myCount(){
      return this.localCount;
    },
  },

  // mapState 傳入陣列
  // computed: mapState([
  //   'count',
  //   'lists',
  //   'username'
  // ]),

  methods: {
    ...mapMutations(['addCount'])
  },

}
</script>

<style>

</style>
