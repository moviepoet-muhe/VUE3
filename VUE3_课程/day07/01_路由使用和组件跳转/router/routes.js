/*
    routes 配置项
    + 是一个对象 {}
    + 对象里面的属性
      => path 表示最终在地址栏上面需要匹配的地址片段 
      => component 表示匹配到了这个地址片段后，对应去在 App 组件里面加载那个组件
    + http://localhost:5173/ <---> / 表示的是根地址 
*/

import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import Cart from '@/views/cart/index.vue'
import Mine from '@/views/mine/index.vue'

const routes = [
    // 配置根组件
    {
        path: '/',
        component: Home // 表示如果匹配到的是 根 地址，那么就让加载 Home 组件
    },
    {
        path: '/home',
        component: Home,
        meta: {title: '首页'} // meta 表示路由元信息
    },
    {
        path: '/category',
        component: Category,
        meta: {title: '分类'}
    },
    {
        path: '/cart',
        component: Cart,
        meta: {title: '购物车'}
    },
    {
        path: '/mine',
        component: Mine,
        meta: {title: '我的'}
    },
]

export default routes