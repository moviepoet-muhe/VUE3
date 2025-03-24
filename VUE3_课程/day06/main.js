// 解构出 createApp 函数，用于创建应用程序（application）
import { createApp } from 'vue'

// 引入 css 文件
// import '../public/bootstrap.min.css'

// 把根组件导入到入口文件里面
import App from './11_Teleport 传送门/App.vue'

// 引入全局组件 MySearch
// import MySearch from './components/MySearch.vue'

// 把 App 根组件传递给 createApp 函数作为配置项
const app = createApp(App)

// 注册全局组件（参数1表示组件名称，参数2表示引入的组件） 
// app.component('MySearch', MySearch)

// 全局自定义指令
app.directive('color', {
    // el 表示的是当前设置了指令的那个元素
    // binding 表示的是指令相关的对象
    mounted(el, binding) {
        el.style.color = binding.value
    }
})

// 引入动画库
import 'animate.css'

// 把应用程序和 index.html 页面里面的容器进行关联（挂载）
app.mount('#app')
