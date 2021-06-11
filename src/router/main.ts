import { RouteRecordRaw } from 'vue-router'

import Main from '@/views/main/main.vue'
import Test1 from '@/views/test1/test1.vue'
import Test2 from '@/views/test2/test2.vue'

const CommonRouter: RouteRecordRaw[] = [{
  path: '/main',
  name: '工作台',
  component: Main
}, {
  name: '测试2',
  path: '/test1',
  component: Test1
}, {
  name: '测试3',
  path: '/test2',
  component: Test2
}]

export default CommonRouter
