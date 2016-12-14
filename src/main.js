import Vue from 'vue'
import App from './App.vue'
import Index from './components/Index.vue'

import Result from './components/Result.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter);



const routes = [
  { path: '/index', component: Index },
  { path: '/res', component: Result },
  { path: '*', component: Index }
]

const router = new VueRouter({
  mode: 'hash',
  routes // （缩写）相当于 routes: routes
})

export {router}

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

if (location.hash == '#/' ||location.hash == ''){
  router.replace('/index')
}
