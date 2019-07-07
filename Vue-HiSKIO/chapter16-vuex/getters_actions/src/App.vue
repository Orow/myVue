<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  computed : {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['addCount']),
  },

};
</script>

<style>

</style>
