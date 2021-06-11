import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from '@/utils/axios'
import ElementPlus from 'element-plus'
import 'normalreset.css/normalreset.css' // 重置样式
import '@/assets/css/flex.scss' // 布局样式
import '@/assets/css/index.scss' // 公共样式
import 'element-plus/lib/theme-chalk/index.css' // element样式

interface IRenderProps {
  container: Element | string;
}

const app = createApp(App)

app.config.globalProperties.$http = axios // axios全局配置

function render(props: IRenderProps) {
  const { container } = props

  store.forEach(({ module, key }) => {
    app.use(module, key)
  })

  app.use(router).use(ElementPlus).mount(container)
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: '#app' })
}

//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log('subapp bootstraped')
}

export async function mount(props: any) {
  console.log('mount subapp', props)
  render(props)
}

export async function unmount() {
  console.log('unmount college app')
  app.unmount()
}

export async function update(props: any) {
  console.log('update', props)
}
