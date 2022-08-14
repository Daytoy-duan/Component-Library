import { createApp } from "vue"
import DayButton from "./button/DayButton"
import SFCButton from "./button/SFCButton.vue"
import JSXButton from "./button/JSXButton"

createApp(DayButton).mount("#app")
createApp(SFCButton).mount("#app")
createApp(JSXButton).mount("#app")

const s: string = "测试vite是否可以调试ts代码"
console.log(s)