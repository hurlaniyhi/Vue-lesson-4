import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import VueRouter from 'vue-router'
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
import SubRouteOne from './components/SubRouteOne'
import SubRouteTwo from './components/SubRouteTwo'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: "/", component: ProductListOne},
    {path: "/next", component: ProductListTwo,
      children: [
        {path: "child1", component: SubRouteOne},
        {path: "child2", component: SubRouteTwo}
      ]}
  ],
  mode: "history"
})



new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
})
