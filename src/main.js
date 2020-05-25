import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import Header from "./components/Header/Header";
import Star from "./components/Star/Star";
import './mock/mock'
import './filters'
import CartControl from "./components/CartControl/CartControl";
import Split from "./components/Split/Split";

Vue.prototype.$eventBus = new Vue()

Vue.config.productionTip = false
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
Vue.component(Button.name,Button)

Vue.use(VueLazyload, {
  loading,
})
new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
