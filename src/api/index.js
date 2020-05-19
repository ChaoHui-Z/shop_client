/*
* 包含多个接口请求函数模块
* */
import ajax from './ajax'

const BASE = '/api'
/*
* 根据经纬度获取位置详情
* */
export const reqGeohash = (longitude, latitude) => ajax.get(BASE + `/position/${latitude},${longitude}`)

// 获取食品分类列表
export const reqCategorys = () => ajax.get(BASE + '/index_category')

//  根据经纬度获取商铺列表
export const reqShops = ({latitude, longitude}) => ajax({
  url: BASE + '/shops',
  params: {
    latitude,
    longitude
  }
})
