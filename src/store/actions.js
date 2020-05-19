/*
* 包含n个间接更新状态的方法对象
* */
import {reqCategorys, reqGeohash, reqShops} from '../api'
import {RECEIVE_GEOHASH, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation_types'

export default {
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
  }
}
