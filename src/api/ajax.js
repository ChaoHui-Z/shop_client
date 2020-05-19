/*
* 配置拦截器
* */
import axios from 'axios'
import qs from 'qs'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  const {method, data} = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  alert('请求异步' + error.message)
  // 中断Promise链
  return new Promise(() => {
  })
})
export default axios
