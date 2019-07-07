<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="addCount">add</button>
    <!-- 傳入payload -->
    <button @click="addCount(2)">add</button>
    <!-- mutations 中傳入物件，函式命名更改 -->
    <button @click="add(2)">add</button>
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
  

    // mapState 傳入陣列
    // computed: mapState([
    //   'count',
    //   'lists',
    //   'username'
    // ]),

    // mapState 傳入物件
    ...mapState({
      // 字串
      storecount: 'count',
      // 函式
      storecoun(state){
        return state.count 
      },
      // 沒用到this所以可以用箭頭函式則等於以下
      // storecount: state => state.count,
    }),
  },
  methods: {
    ...mapMutations(['addCount'])
  },

  // 以上 state
  // 以下 mutations
  methods: {
    addCount(){
      // 第二個參數為payload
      // this.$store.commit('addCount', 2); 

      // commit 也能傳入物件，傳入物件時，mutations裡面payload參數就需要指定到該名稱
      this.$store.commit({
        type: 'addCount', // mutations名字
        // 其他屬性隨便命名
        step: 2,
      });
    },
  },
  // mapMutations, payload 透過函式綁定html tag中傳入
  methods: mapMutations(['addCount']),
  methods: mapMutations({
    add: 'addCount',
  }),

}
</script>

<style>

</style>
