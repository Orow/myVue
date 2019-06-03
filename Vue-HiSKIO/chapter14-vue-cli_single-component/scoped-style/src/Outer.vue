<template>
  <div class="area">
    <h1>Outer</h1>
    <Inner/>
  </div>
</template>

<script>
import Inner from "./Inner.vue";
export default {
  components: {
    Inner
  }
};
</script>

<style scope>
h1 {
  color: red;
}
.area {
  border: 2px blue solid;
}
</style>
