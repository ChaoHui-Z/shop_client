import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from './getters'
import home from "./modules/home";
import user from "./modules/user";
import shop from "./modules/shop";

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    home: home,
    user: user,
    shop: shop
  }
})
