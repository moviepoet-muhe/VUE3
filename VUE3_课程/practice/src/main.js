
// 解构出 createApp 函数，用于创建应用程序（application）
import { createApp } from 'vue'

// 把根组件导入到入口文件里面
import App from './App.vue'


import './assets/js/flexbox'


// 把 App 根组件传递给 createApp 函数作为配置项
const app = createApp(App)


// 把应用程序和 index.html 页面里面的容器进行关联（挂载）
app.mount('#app')









