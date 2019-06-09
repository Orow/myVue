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
            // 把下面這個組件AboutUs命名為Us，在template中的to的路徑改為{name: 'us'}，to改為:to動態綁定
            { path: "us", name:'us', component: AboutUs },
            { path: "family", component: AboutFamily },
            { path: "both", components: {
              // a: AboutUs,
              // b: AboutFamily,
              default: AboutUs,
              another: AboutFamily,
            }},
          ],
        },
        { path: "/products/:id?",
          // 具名路由
          name: 'prods',
          component: Products,
        },
      ],
    },
  ],
});
