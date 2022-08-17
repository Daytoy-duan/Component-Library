import { createApp } from "vue/dist/vue.esm-browser";
import DayUI from './entry'
createApp({
       template:`
       <div style="margin-bottom:20px;">
       <DButton color="blue">主要按钮</DButton>
       <DButton color="green">绿色按钮</DButton>
       <DButton color="gray">灰色按钮</DButton>
       <DButton color="yellow">黄色按钮</DButton>
       <DButton color="red">红色按钮</DButton>
   </div>
   <div style="margin-bottom:20px;"
   >
       <DButton color="blue" plain>朴素按钮</DButton>
       <DButton color="green" plain>绿色按钮</DButton>
       <DButton color="gray" plain>灰色按钮</DButton>
       <DButton color="yellow" plain>黄色按钮</DButton>
       <DButton color="red" plain>红色按钮</DButton>
   </div>
   <div style="margin-bottom:20px;">
       <DButton size="small" plain>小按钮</DButton>
       <DButton size="medium" plain>中按钮</DButton>
       <DButton size="large" plain>大按钮</DButton>
   </div>
   <div style="margin-bottom:20px;">
       <DButton color="blue" round plain icon="search">搜索按钮</DButton>
       <DButton color="green" round plain icon="edit">编辑按钮</DButton>
       <DButton color="gray" round plain icon="check">成功按钮</DButton>
       <DButton color="yellow" round plain icon="message">提示按钮</DButton>
       <DButton color="red" round plain icon="delete">删除按钮</DButton>
   </div>
   <div style="margin-bottom:20px;">
       <DButton color="blue" round plain icon="search"></DButton>
       <DButton color="green" round plain icon="edit"></DButton>
       <DButton color="gray" round plain icon="check"></DButton>
       <DButton color="yellow" round plain icon="message"></DButton>
       <DButton color="red" round plain icon="delete"></DButton>
   </div>
       `
      })
   .use(DayUI)
   .mount("#app");