import { RouteRecordRaw } from 'vue-router'

import Main from '@/views/main/main.vue'
import Test1 from '@/views/test1/test1.vue'

const CommonRouter: RouteRecordRaw[] = [{
  path: '/main',
  name: '工作台',
  component: Main
}, {
  name: '测试2',
  path: '/test2',
  component: Test1
}, {
  name: '测试3',
  path: '/test3',
  component: Test1
}]

export default CommonRouter
