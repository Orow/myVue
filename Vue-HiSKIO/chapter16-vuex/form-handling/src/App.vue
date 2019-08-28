<template>
  <div>
    <input type="text" v-model="text" />
    <!-- <input type="text" :value="text" @input="val => text = val"/> -->

    <!-- <input type="text" :value="text" @input="setText" /> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  // 一般 v-model
  // data() {
  //   return {
  //     test: "",
  //   };
  // }
  computed: {
    // 引用vuex
    // 一般寫法
    // text() {
    //   this.$store.state.text;
    // },
    // 簡潔寫法
    // ...mapState(["text"]),

    // v-model + vuex, 寫成物件
    text: {
      // 取值
      get() {
        this.$store.state.text;
      },
      // 傳入
      set(val) {
        this.$store.commit('setText', val);
      }
    }
  },
  methods: {
    // 引用vuex
    // 一般寫法
    // setText() {
    //   this.$store.commit("setText", val);
    // },
    // 簡潔寫法
    // ...mapMutations(["setText"]),

    // v-model + vuex
  }
};
</script>