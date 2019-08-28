<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="addCount">add-test</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    todosItems() {
      return this.$store.state.todos.items;
    },
    // 使用map方式，用mapStater舉例
    ...mapState([
      'todos/items',
      'todos/rank',
      'todos/status',
      'todos/loading',
    ]),
    // 假設模組中有設定namespaced: true, 可以把模組名稱用字串再傳入的參數第一個
    ...mapState('todos', [
      'items',
      'rank',
      'status',
      'loading',
    ]),
    ...mapState('member', [
      'items',
      'rank',
      'status',
      'loading',
    ]),
  },
  mounted() {
    // this.$store.dispatch('fetchItems');

    // namespaced: true
    this.$store.dispatch("todos/fetchItems");
    this.$store.dispatch("member/fetchItems");
  }
};
</script>