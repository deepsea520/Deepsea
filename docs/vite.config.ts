// vitepress 默认是不需要配置 vite.config.ts的，但是因为需要使用插件

import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import Unocss from "../config/unocss"

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
    // 这里变更一下端口
  server: {
    port: 3000
  }
});
