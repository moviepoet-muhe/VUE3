import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
/*
    路由
    + createRouter 表示创建路由
    + router 路由，负责管理整个地址
    + routes 路由相关地址配置项
    + history 路由模式
      => createWebHistory 使用的 HTML5 标准中的 history api（地址中不会出现 # 号），后面项目上线的时候需要在服务器进行对应地址配置
      => createWebHashHistory 使用的是 锚点（地址中会出现 # 号），后面项目上线的时候不需要做任何配置
    + 注意点
      => 模式是一个函数，因此在使用的时候必须加括号
*/

import routes from "./routes"
const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes
})

// 全局前置路由守卫
// 每次在进入一个新的组件里面之前会被调用
router.beforeEach((to, from)=>{
  // `to` 即将要进入的目标
  // console.log(`即将要进入的目标：`, to)
  // `from` 当前导航正要离开的路由
  // console.log(`当前导航正要离开的路由：`, from)
  // console.log('-----------')
  // 注意点：return false 表示终止进入到某个组件里面。return {name: 'cart'}、return {path: '/cart'} 表示做过限定后进入的目标组件是 cart 组件
  // return false

  // 登录鉴权（查看进入某个组件时，是否它需要登录）
  // token 令牌
  // 判断下有没有token
  const token = localStorage.getItem('token')

  // 第一层的判断只能证明你是否登录？只有没有登录时才会进入到这个判断
  if(!token){
     // 第二层的判断表示你是否需要登录的权限，如果能进入判断说明你是必须需要登录权限
     if(to.meta?.isLogin){
         return {path: '/login', query: {path: to.fullPath}}
     }
  }
})

// 全局后置路由守卫
// 每次进入到这个组件时被调用 --- pc 端里面使用较多
router.afterEach((to, from)=>{
   document.title = to.meta.title
})


export default router