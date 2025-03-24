
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import Cart from '@/views/cart/index.vue'
import Mine from '@/views/mine/index.vue'

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
      footer: () => import('@/components/TabBar.vue')
    },
    meta: { title: '首页' }, // meta 表示路由元信息
  },
  {
    path: '/category',
    name: 'ct',
    components: {
      header: () => import('@/components/NavBar.vue'),
      default: Category,
      footer: () => import('@/components/TabBar.vue')
    },
    meta: { title: '分类' },
  },
  {
    path: '/cart',
    name: 'cr',
    components: {
      header: () => import('@/components/NavBar.vue'),
      default: Cart,
      footer: () => import('@/components/TabBar.vue')
    },
    meta: { title: '购物车', isLogin: true }
  },
  {
    path: '/mine',
    name: 'm',
    component: Mine,
    components: {
      header: () => import('@/components/NavBar.vue'),
      default: Mine,
    },
    meta: { title: '我的', isLogin: true }
  },
  {
    path: '/login',
    name: 'lg',
    component: () => import('@/views/login/index.vue'),
  }
]

export default routes