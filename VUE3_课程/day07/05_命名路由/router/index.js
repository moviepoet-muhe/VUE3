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

export default router