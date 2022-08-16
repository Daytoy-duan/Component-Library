import DButton from "./DButton";
import { App } from "vue";

export {DButton};

// 导出VUE组件
export default {
    install(app: App){
        app.component(DButton.name, DButton)
    }
}