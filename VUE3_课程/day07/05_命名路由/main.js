// 解构出 createApp 函数，用于创建应用程序（application）
import { createApp } from 'vue'

// 引入 css 文件
// import '../public/bootstrap.min.css'

// 把根组件导入到入口文件里面
import App from './App.vue'

// 引入全局组件 MySearch
// import MySearch from './components/MySearch.vue'

// 把 App 根组件传递给 createApp 函数作为配置项
const app = createApp(App)

// 引入路由
import router from './router'

// 使用路由
app.use(router)

// 把应用程序和 index.html 页面里面的容器进行关联（挂载）
app.mount('#app')
