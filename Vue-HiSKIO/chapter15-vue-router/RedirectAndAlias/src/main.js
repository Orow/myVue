import Vue from 'vue'
// import VueRouter from 'vue-router'; // 只用在這無效
// import App from './App.vue' // 透過router.js管理就不需要import App.vue
import router from './router'
// Vue.use('VueRouter'); // 只用在這無效

new Vue({
  el: '#app',
  // render: h => h(App) // 用router.js管理就不用createElement的函式來render
  router,
  template: '<router-view/>',

})
