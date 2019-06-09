import Vue from "vue";
import VueRouter from "vue-router";

import App from './App.vue';
import Products from "./Products.vue";
import About from "./About.vue";
import AboutAllOfUs from "./AboutAllOfUs.vue";
import AboutUs from "./AboutUs.vue";
import AboutFamily from "./AboutFamily.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        // nested routes
        {
          path: "about",
          component: About,
          children: [
            { path: "", component: AboutAllOfUs },
            { path: "us", component: AboutUs },
            { path: "family", component: AboutFamily },
          ],
        },
        { path: "/products/:id?", component: Products },
      ],
    },
  ],
});
