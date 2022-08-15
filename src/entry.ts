import { App } from "vue";
import DayButton from "./button/DayButton";
import SFCButton from "./button/SFCButton.vue"
import JSXButton from "./button/JSXButton";
// 组件库具备的单独导出
export { DayButton, SFCButton, JSXButton};

// 编写install方法
export default {
    install(app: App): void{
        app.component(DayButton.name, DayButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    }
}