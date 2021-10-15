import * as VueRouter from 'vue-router'
import store from '@/store/common'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'

import MainRouter from './main'

const routes:VueRouter.RouteRecordRaw[] = [{
  path: '/',
  component: Home,
  children: MainRouter
}, {
  path: '/404',
  component: NotFound
}
//  {
//   path: '/:pathMatch(.*)*',
//   redirect: '/404'
// }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/vue3-vite-mirco'),
  // history: VueRouter.createMemoryHistory('/vue3-vite-mirco'),
  // history: VueRouter.createMemoryHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)

  if(to.path === '/login' || to.path === '/main' || to.path === '/404') {
    next()
  } else {
    store.commit('addTabList', {
      key: to.path,
      title: to.name
    })
    next()
  }
})

export default router
