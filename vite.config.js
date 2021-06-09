/* eslint-disable no-undef */
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { name } from './package.json'

export default {
  base: '/vue3-vite-mirco/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
}
