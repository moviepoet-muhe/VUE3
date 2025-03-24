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
import Details from '@/views/details/index.vue'
import NotFind from '@/views/not-find/index.vue'

const routes = [
    // 配置根组件
    {
        path: '/',
        redirect: '/home' // 表示如果匹配到的是根组件，那么重定向到 Home 组件
    },
    {
        path: '/home',
        name: 'h', // 命名路由，当匹配的路径片段过长的时候，可以用来简化路径
        components: {  // 命名视图，有时候想同时 (同级) 展示多个视图，而不是嵌套展示
            default: Home,
            footer: ()=> import('@/components/TabBar.vue')
        },
        meta: {title: '首页'}, // meta 表示路由元信息
    },
    {
        path: '/category',
        name: 'ct',
        components: {
            header: ()=> import('@/components/NavBar.vue'),
            default: Category,
            footer: ()=> import('@/components/TabBar.vue')
        },
        meta: {title: '分类'},
    },
    {
        path: '/cart',
        name: 'cr',
        components: {
            header: ()=> import('@/components/NavBar.vue'),
            default: Cart,
            footer: ()=> import('@/components/TabBar.vue')
        },
        meta: {title: '购物车', isLogin: true}
    },
    {
        path: '/mine',
        name: 'm',
        component: Mine,
        components: {
            header: ()=> import('@/components/NavBar.vue'),
            default: Mine,
        },
        meta: {title: '我的', isLogin: true}
    },
    {
        path: '/details', 
        name: 'dl',
        component: Details,
        meta: {title: '详情'}
    },
    {
        path: '/login',
        component: ()=> import('@/views/login/index.vue')
    },
    {
        path: '/:pathMatch(.*)', // 匹配不存在的组件
        component: NotFind,
    }
]

export default routes