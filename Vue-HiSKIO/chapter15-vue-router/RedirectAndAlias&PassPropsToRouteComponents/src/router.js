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
          // Alias別名
          alias: "story",
          component: About,
          children: [
            { path: "", component: AboutAllOfUs },
            // 把下面這個組件AboutUs命名為Us，在template中的to的路徑改為{name: 'us'}，to改為:to動態綁定
            { path: "us", name:'us', component: AboutUs },
            { path: "family", name:'family', component: AboutFamily },
            { path: "both",
              // Alias別名也可以是陣列
              // alias: ['/2', '2', '3'],
              components: {
              // a: AboutUs,
              // b: AboutFamily,
              default: AboutUs,
              another: AboutFamily,
            }},
          ],
        },
        { 
          // path: "products/:id?",
          // props為true
          // props: true,

          // props指定為物件
          // path: "products",
          // props: { id:10 },
          
          // props指定為函式
          // props: () => {
          //   return {
          //     id: 20,
          //   }
          // },
          // 函式也可以寫成
          path: "products/:id?",
          props: (route)=> {
            return {
              // route = this.$route
              id: route.params.id,
            };
          },

          // 具名路由
          name: 'prods',
          component: Products,
        },
        
        // 轉址
        // {
          // path: 'aboutus',
          // path: '*', 
          // redirect-字串
          // redirect: '/about/us',

          // redirect-物件
          // redirect: {name: 'family'},

          // redirect-函式
          // redirect: (from) => {
          //   // return '/about',
          //   return { name: 'family'};
          // },

        //   path: '/story',
        //   redirect: '/about',
        // },
      ],
    },
  ],
});
