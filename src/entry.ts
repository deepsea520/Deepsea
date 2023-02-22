import { App } from "vue"
import SButton from "./button/index"
import SFCButton from "./button/SFCButton.vue"
import JSXButton from "./button/JSXButton"

// 导出单独组件
export { SFCButton, JSXButton, SButton }

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component('SFCButton', SFCButton)
    app.component(SButton.name, SButton)
    app.component(JSXButton.name, JSXButton)
  },

}