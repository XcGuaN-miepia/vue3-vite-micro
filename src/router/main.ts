import { RouteRecordRaw } from 'vue-router'

const CommonRouter: RouteRecordRaw[] = [{
  path: '/main',
  name: '工作台',
  component: () => import('@/views/main/main.vue')
}, {
  name: '测试2',
  path: '/test1',
  component: () => import('@/views/test1/test1.vue')
}, {
  name: '测试3',
  path: '/test2',
  component: () => import('@/views/test2/test2.vue')
}]

export default CommonRouter
