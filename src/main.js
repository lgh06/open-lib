import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
