import axios from 'axios'

//二次封装
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})
//请求拦截器
// requests.interceptors.request.use((config)=>{
//     return config
// })
requests.interceptors.request.use((config) => {
    // if(config.method === 'post') {
    //   config.data = qs.stringify(config.data);
    // }
    return config; 
  }, (error) => {
    return Promise.reject(error);
    // return Promise.reject(new Error('faile'))
  });
//响应拦截器
requests.interceptors.response.use((res)=>{
    return res.data
},(error)=>{
    return error
})

export default requests