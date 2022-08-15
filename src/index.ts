import { createApp } from "vue"
import DayButton from "./button/DayButton"
import SFCButton from "./button/SFCButton.vue"
import JSXButton from "./button/JSXButton"
import DButton from "./button/DButton"
import DayUI from "./entry"
//createApp(DayButton).mount("#app")
//createApp(SFCButton).mount("#app")
//createApp(JSXButton).mount("#app")

createApp(DButton).mount("#app")



const s: string = "测试unocss"
console.log(s)