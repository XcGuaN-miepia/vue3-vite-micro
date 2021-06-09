import { ComponentCustomProperties } from 'vue'
import { CommonStateType } from '@/store/common'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<CommonStateType>
  }
}