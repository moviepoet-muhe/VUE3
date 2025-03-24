import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  // 当使用 hash 模式时，需要使用 createWebHashHistory 作为 history 选项
  // history: createWebHashHistory(),
  routes

});

// 全局前置守卫
router.beforeEach((to, from) => {
  // console.log('即将进入的路由：', to);
  // console.log('即将离开的路由：', from);
  // 可以在这里进行路由权限的判断 
  // 例如：如果用户进入购物车页面没有登录，就跳转到登录页面 用token判断
  const token = localStorage.getItem('token');
  if (!token) {
    if (to.meta.isLogin) {
      return {
        path: '/login',
        query: { path: to.fullPath }
      }
    }
  }
})

// 全局后置路由守卫
router.afterEach((to, from) => {
  document.title = to.meta.title;
})

export default router;
