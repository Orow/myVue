<template>
  <div>
    <div>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
// import Vue from "vue";
// import VueRouter from "vue-router";
// import Products from "./Products.vue";
// import About from "./About.vue";
// import AboutAllOfUs from "./AboutAllOfUs.vue";
// import AboutUs from "./AboutUs.vue";
// import AboutFamily from "./AboutFamily.vue";

// Vue.use(VueRouter);

// export default {
  // router: new VueRouter({
  //   routes: [
  //     // { path: "/about", component: About },
  //     // { path: "/products", component: Products }

  //     // dynamic route matching
  //     // { path: "/about", component: About },
  //     // { path: '/:page', component: About },
  //     // { path: "/products/:id?", componeㄑnt: Products }

  //     // nested routes
  //     { path: "/about", component: About, children:[
  //       { path: '', component: AboutAllOfUs},
  //       { path: "us", component: AboutUs },
  //       { path: "family", component: AboutFamily },
  //     ]},
  //     { path: "/products/:id?", component: Products}
  //   ]
  // })
// };
</script>