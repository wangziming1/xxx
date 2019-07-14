import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "./components/home.vue"
import cart from "./components/cart.vue"
import search from "./components/search.vue"
import contact from "./components/contact.vue"

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/cart",component:cart},
    {path:"/contact",component:contact},
    {path:"/search",component:search},
  ],
  linkActiveClass:"mui-active"
})
