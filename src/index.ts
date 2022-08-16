import { createApp } from "vue/dist/vue.esm-browser";
// import DayButton from "./button/DayButton"
// import SFCButton from "./button/SFCButton.vue"
// import JSXButton from "./button/JSXButton"
//import DButton from "./button/index"
import DayUI from "../dist/Day-ui.esm.js"
//createApp(DayButton).mount("#app")
//createApp(SFCButton).mount("#app")
//createApp(JSXButton).mount("#app")



//createApp(DButton).use(DayUI).mount("#app")

createApp({
    template: `
           <div>
              <DButton color="blue">蓝色按钮</DButton>
              <DButton color="green">绿色按钮</DButton>
              <DButton color="gray">灰色按钮</DButton>
              <DButton color="yellow">黄色按钮</DButton>
              <DButton color="red">红色按钮</DButton>
              <DButton>测试</DButton>
           </div>
       <div>
           <DButton color="blue" round plain icon="search" ></DButton>
           <DButton color="green" round plain icon="edit" ></DButton>
           <DButton color="gray" round plain icon="check" ></DButton>
           <DButton color="yellow" round plain icon="message" ></DButton>
           <DButton color="red" round plain icon="delete" ></DButton>
       </div>
          `
  }).use(DayUI).mount("#app")




const s: string = "测试unocss"
console.log(s)