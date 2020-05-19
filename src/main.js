import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "./components/Header/Header";
import './api'
import Star from "./components/Star/Star";

Vue.config.productionTip = false
Vue.component('Header',Header)
Vue.component('Star',Star)

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
