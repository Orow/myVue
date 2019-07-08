<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  computed : {
    ...mapState(['items']),

    // 只有這個組件用到的話就寫在這 - filter 出還沒有 done 的 item 然後計算長度
    itemsNotFinish(){
      return this.items.filter(item => !item.done).length;
    },
    // 從 store 傳來，使用 mapGetters
    ...mapGetteres(['itemNotFinish']),
  },
  methods: {
    ...mapMutations(['addCount']),
    test(){
      this.itemsWithID(2) // id=2 傳入
    },
  },

  // 以上 getters
  // 以下 actions

  mounted() {
    this.$store.dispatch('fetchTodos');
    // 傳入第二個參數當 payload
    this.$store.dispatch('fetchTodos', {id:2});
    // 也一樣可以傳入物件
    this.$store.dispatch({
      type: 'fetchTodos',
      id: 2,
    });

    // 用 mapActions 後
    this.fetchTodos({id:2});

    // 回傳 promise 並 resolve 可以當 promise 用
    this.fetchTodos({id:2})
    .then(()=>{
      
    })
  },
  methods: mapActions(['fetchTodos']),

};
</script>

<style>

</style>
