import axios from 'axios'
export function request(config){
  //创建axios的实例
  const instance=axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1/',
    timeout: 5000
  })
  //创建拦截器请求拦截
  instance.interceptors.request.use(config =>{
    return config
  },err =>{

  })
  //响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },err=>{
    console.log(err)
  })
  //发送真正的网络请求
  return instance(config)
}
