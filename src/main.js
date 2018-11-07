import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Basic from './views/Basic.vue'
import Vector from './views/Vector.vue'
import DynamicAdd from './views/DynamicAdd.vue'
import Draw from './views/Draw.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

// 3. Create the router
const router = new VueRouter({
  //base: __dirname,
  routes: [
    { path: "/basic", component: Basic},
    { path: "/vector", component: Vector},
    { path: "/dynamicAdd", component: DynamicAdd},
    { path: "/draw", component: Draw},
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
