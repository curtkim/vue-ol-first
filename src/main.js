import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Basic from './views/Basic.vue'
import Feature from './views/Feature.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

// 3. Create the router
const router = new VueRouter({
  //base: __dirname,
  routes: [
    { path: "/basic", component: Basic},
    { path: "/feature", component: Feature},
  ]
});


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
