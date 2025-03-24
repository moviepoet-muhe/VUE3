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
        component: Home,
        meta: {title: '首页'} // meta 表示路由元信息
    },
    {
        path: '/category',
        name: 'ct',
        component: Category,
        meta: {title: '分类'},
        // redirect: '/category/a', // 二级路由重定向
        redirect: {name: 'bb'},
        children: [
            {
                path: 'a',
                name: 'aa',
                component: ()=> import('@/views/com-a/index.vue'),
            },
            {
                path: 'b',
                name: 'bb',
                component: ()=> import('@/views/com-b/index.vue'),
            },
            {
                path: 'c',
                name: 'cc',
                component: ()=> import('@/views/com-c/index.vue'),
            }
        ]
    },
    {
        path: '/cart',
        name: 'cr',
        component: Cart,
        meta: {title: '购物车'}
    },
    {
        path: '/mine',
        name: 'm',
        component: Mine,
        meta: {title: '我的'}
    },
    {
        path: '/details', 
        name: 'dl',
        component: Details,
        meta: {title: '详情'}
    },
    {
        path: '/:pathMatch(.*)', // 匹配不存在的组件
        component: NotFind,
    }
]

export default routes