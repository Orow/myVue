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

  // mapState, mapMutations 結合ES6 Spread 語法來寫多個 computed 跟 methods
  computed: {
   ... mapState(['count'])
  },
  methods: {
    ...mapMutations(['addCount'])
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
