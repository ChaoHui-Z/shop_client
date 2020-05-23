/*
* 管理user功能模块的状态数据模块
* */
import {CLEAR_USER, RECEIVE_USER} from "../mutation_types";

const state={
  user:{},
}
const mutations={
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  [CLEAR_USER](state) {
    state.user = {}
  },
}
const actions={
  //存储user
  saveUser({commit}, user) {
    commit(RECEIVE_USER, user)
  },
  //退出登录
  clearUser({commit}) {
    commit(CLEAR_USER)
  },
}
const getters={}
export default {
  state,
  mutations,
  actions,
  getters
}
