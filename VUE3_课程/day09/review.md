路由守卫（导航守卫）
+ 在路由进行跳转的时候做一些事情
+ 全局前置守卫
  => router.beforeEach((to, from)=>{
     // to 表示即将进入的目标
     // from 表示当前要离开的目标
  })
+ 全局后置守卫
  => router.afterEach((to, from)=>{
     // to 表示即将进入的目标
     // from 表示当前要离开的目标
  })
+ 组件独享守卫
+ 组件内守卫
+ 解析守卫
+ ...

vuex
+ 做数据状态管理的
+ 下载
  => pnpm i vuex@4.x
+ 使用
  import { createStore } from 'vuex'
  const store = createStore({
     strict: true,
     state(){
        return {}
     },
     mutations: {

     },
     actions: {

     },
     getters: {

     },
     modules: {user}
  })
  export default store
+ 模块
  const user = {
     strict: true,
     namespaced: true,
      state(){
        return {}
     },
     mutations: {

     },
     actions: {

     },
     getters: {

     },
  }
  export default user
+ 挂载使用
  import store from './store/index.js'
  app.use(store)
+ 辅助函数
  => mapState('模块名', []) --- 通过模块名返回的对象，拿到 state 选项里面的数据
  => mapGetters('模块名', ['sum']) --- mapGetters('模块名', {sum2: 'sum'}) 通过对象的形式可以进行名称的修改，避免冲突问题
  => mapMutations('模块名', [])
  => mapActions('模块名', [])

