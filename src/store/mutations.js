/*
* 包含n个直接更新状态的方法对象
* */
import {RECEIVE_GEOHASH, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation_types'

export default {
  [RECEIVE_GEOHASH](state, {geohash}) {
    state.geohash = geohash
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  }
}
