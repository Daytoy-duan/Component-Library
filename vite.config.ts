import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const rollupOptions = {
  external: [
    "vue",
    "vue-router"
  ],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts", // 入口文件
      name: "DayUI",
      fileName: "Day-ui",
      // 导出的模块格式
      formats: ["esm", "umd", "iife"]
    }
  }
});