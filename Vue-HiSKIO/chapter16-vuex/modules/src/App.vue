<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="addCount">add-test</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit('addCount');
    },
  },
}
</script>