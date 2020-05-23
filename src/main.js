import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import Header from "./components/Header/Header";
import Star from "./components/Star/Star";
import './mock/mock'

Vue.config.productionTip = false
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component(Button.name,Button)

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
