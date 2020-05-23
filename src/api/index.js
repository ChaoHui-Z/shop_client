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
/*
* 配置短信验证码请求
* */
export const reqSendCode = (phone) => ajax.get(BASE + '/sendcode', {
  params: {
    phone
  }
})
/*
* 手机号验证登录
* */
export const reqSmsLogin = (phone, code) => ajax.post(BASE + '/login_sms', {phone, code})

/*
* 用户名登录验证
* */
export const reqPwdLogin = (name, pwd, captcha) => ajax.post(BASE + '/login_pwd', {name, pwd, captcha})

/*
* 获取商品列表
* */
export const reqGoods = ()=>ajax.get('/goods')
/*
* 获取商家评论列表
* */
export const reqRatings = ()=>ajax.get('/ratings')
/*
* 获取商家信息
* */
export const reqInfo = ()=>ajax.get('/info')
