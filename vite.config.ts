import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需引入 path 模块

export default defineConfig({
  plugins: [
    vue(),
  ],

  resolve: {
    // 🔴 配置路径别名，让 @ 指向 src 目录
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
