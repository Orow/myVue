<template>
  <div>
    <h1>Products</h1>

    <!-- dynamic route matching -->
    <h2>{{id}}</h2>
  </div>
</template>


<script>
// dynamic route matching
// products帶內容
const products = {
  7: "Snorkel",
  10: "Mask",
  15: "Fins"
};

export default {
  computed: {
    // id() {
    //   return this.$route.params.id;
    // },
    // products帶內容
    id() {
      return products[this.$route.params.id];
      // return products[this.$route.query.id];
    },
  },
};
</script>