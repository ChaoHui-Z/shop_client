/*
* 管理shop功能模块的状态数据模块
* */
import {RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS} from "../mutation_types";
import {reqGoods, reqInfo, reqRatings} from "../../api";

const state={
  goods:[], // 食品列表
  ratings:[], //商家评论
  info:{},  //商家介绍
}
const mutations={
  [RECEIVE_GOODS](state, goods) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, ratings) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, info) {
    state.info = info
  }
}
const actions={
  //  异步获取食品列表
  async getGoods({commit}) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, goods)
    }
  },
  //  异步获取食品列表
  async getRatings({commit}) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, ratings)
    }
  },
  //  异步获取食品列表
  async getInfo({commit}) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, info)
    }
  }
}
const getters={}
export default {
  state,
  mutations,
  actions,
  getters
}
