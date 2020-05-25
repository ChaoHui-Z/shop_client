/*
* 管理shop功能模块的状态数据模块
* */
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_CURRENT,
  REDUCE_FOOD_CURRENT,
  CLEAR_CART
} from "../mutation_types";
import {reqGoods, reqInfo, reqRatings} from "../../api";

const state = {
  goods: [], // 食品列表
  ratings: [], //商家评论
  info: {},  //商家介绍
  shopCard: [] // 购物车列表
}
const mutations = {
  [RECEIVE_GOODS](state, goods) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, ratings) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, info) {
    state.info = info
  },
  [ADD_FOOD_CURRENT](state, food) {
    if (food.current) {
      food.current++
    } else {
      Vue.set(food, 'current', 1)
      state.shopCard.push(food)
    }
  },
  [REDUCE_FOOD_CURRENT](state, food) {
    if (food.current > 0) {
      food.current--
      if (food.current === 0) {
        state.shopCard.splice(state.shopCard.indexOf(food), 1)
      }
    }
  },
  //清空购物车
  [CLEAR_CART](state) {
    state.shopCard.forEach(food => {
      food.current = 0
    })
    state.shopCard = []
  },

}

const actions = {
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
  },
  updateCurrent({commit}, {flag, food}) {
    if (flag) {
      commit(ADD_FOOD_CURRENT, food)
    } else {
      commit(REDUCE_FOOD_CURRENT, food)
    }
  }
}
const getters = {
  // 总数量
  totalCount(state) {
    return state.shopCard.reduce((pre, food) => pre + food.current, 0)
  },

  // 总价格
  totalPrice(state) {
    return state.shopCard.reduce((pre, food) => pre + food.current * food.price, 0)
  },
  // 总商家评论数

  totalRatingsCount(state) {
    return state.ratings.length
  },
  //总商家推荐评论数
  positiveRatingsCount(state) {
    return state.ratings.reduce((pre, rating) => pre + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
