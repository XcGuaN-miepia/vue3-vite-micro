import axios from 'axios'

interface Queue {
  url: string,
  method?: string,
  data?: any
}
const CancelToken = axios.CancelToken
// 请求队列
let queue: Queue[] = []

const request = axios.create({
  timeout: 100000 // 默认10s超时
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 拦截器中添加source，不污染全局
  const source = CancelToken.source()

  config.cancelToken = source.token
  // 判断队列中有无相同接口
  if(queue.find((data: Queue) => JSON.stringify(data) === JSON.stringify({ url: config.url,method: config.method,data: config.data }))) {
    source.cancel('')
  } else {
    // 添加到队列
    queue.push({
      url: String(config.url),
      method: config.method,
      data: config.data
    })
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(response => {
  // 清空相同信息
  queue = queue.filter((data: Queue) => JSON.stringify(data) !== JSON.stringify({ url: response.config.url,method: response.config.method,data: response.config.data }))
  const res = response.data

  return res
}, err => {
  if(axios.isCancel(err)) {
    // delete source.token.reason
    console.log('cancel')
  }
  console.log(err)
})

export default request
