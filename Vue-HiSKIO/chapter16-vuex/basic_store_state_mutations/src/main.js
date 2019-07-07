import Vue from 'vue'
import App from './App.vue'

import store from './store'; // 這邊import，app.vue就可以用this.$route

new Vue({
  store, // 這邊有 import store 才需要放在這
  el: '#app',
  render: h => h(App)
})
 