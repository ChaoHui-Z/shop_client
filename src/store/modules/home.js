/*
* 管理home功能模块的状态数据模块
* */
import {RECEIVE_CATEGORYS, RECEIVE_GEOHASH, RECEIVE_SHOPS} from "../mutation_types";
import {reqCategorys, reqGeohash, reqShops} from "../../api";

const state = {
  latitude: '34.75',
  longitude: '113.60',
  geohash: {},// 获取地区位置
  categorys: [],// 获取视频分类列表
  shops: [], // 获取商铺列表
}
const mutations = {
  [RECEIVE_GEOHASH](state, {geohash}) {
    state.geohash = geohash
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
}
const actions = {
  // 获取位置信息
  async getGeohash({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqGeohash(longitude, latitude)
    if (result.code === 0) {
      const geohash = result.data
      commit(RECEIVE_GEOHASH, {geohash})
    }
  },
  // 获取食物分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //  获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
