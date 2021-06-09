import { AxiosInstance } from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: AxiosInstance
  }
}
