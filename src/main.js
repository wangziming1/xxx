import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Header,Swipe, SwipeItem  } from 'mint-ui';

import axios from "axios"

import "../lib/css/mui.css"
import "../lib/fonts/mui-icons-extra.ttf"
import "../lib/css/icons-extra.css"

Vue.component(Header.name, Header);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
