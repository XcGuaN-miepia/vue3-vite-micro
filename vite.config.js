/* eslint-disable no-undef */
import path from 'path'
import vue from '@vitejs/plugin-vue'
// import { name } from './package.json'
import qiankun from 'vite-plugin-qiankun'

const useDevMode = true

export default {
  base: '/vue3-vite-mirco/',
  plugins: [
    vue(),
    qiankun('admin', {
      useDevMode
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  // build: {
  //   target: 'esnext',
  //   lib: {
  //     name: `${name}-[name]`,
  //     entry: path.resolve(__dirname, 'src/main.ts'),
  //     formats: ['umd']
  //   },
  //   rollupOptions: {
  //     output: {
  //       inlineDynamicImports: true
  //     }
  //   }
  // }
}
