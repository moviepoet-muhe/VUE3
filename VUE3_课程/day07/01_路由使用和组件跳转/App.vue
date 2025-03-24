<template>
    <div class="app-container">
       <!--
           spa 单页面应用开发
           + Single Page Application
           + 最终会把所有的内容都加载到一个页面
           + 页面和页面之间切换的时候不会有刷新
       -->
      <!-- RouterLink 表示跳转到那个组件 -->
      <!-- 
         <RouterLink to="/home">首页</RouterLink>
         <RouterLink to="/category">分类</RouterLink>
         <RouterLink to="/cart">购物车</RouterLink>
         <RouterLink to="/mine">我的</RouterLink> 
      -->
      
      <!-- 
         <RouterLink v-for="item in routerList"  :to="item.path" :key="item.id">
            {{ item.title }}
         </RouterLink> 
      -->

      <!-- 
         <RouterLink v-for="item in list"  :to="item.path" :key="item.id">
            {{ item.meta.title }}
         </RouterLink> 
      -->

      <!-- 注意点：在组合式 api 中，使用的时候会导入一个 router 对象，然后可以直接使用，但是在选项式 api 中，必须使用 $router -->

      <!--
         路由跳转方式
         + 声明式导航
           => 直接 RouterLink 上的 to 属性
         + 编程式导航
           => $router.push()
      -->
      <button @click="$router.push('/cart')">购物车页面</button>
      <button @click="$router.push('/category')">分类页面</button>
      <button @click="goMineFn">我的页面</button>


      <!-- RouterView 路由出口：最终组件在哪里进行展示 -->
      <RouterView></RouterView>

    </div>
</template>

<script>
import routes from './router/routes'
export default {
   name: 'App', 
   computed: {
      list(){
         return routes.slice(1)
      }
   },
   data(){
      return {   
         // routerList: [
         //    {id: 1, path: '/home', title: '首页'},
         //    {id: 2, path: '/category', title: '分类'},
         //    {id: 3, path: '/cart', title: '购物车'},
         //    {id: 4, path: '/mine', title: '我的'},
         // ]
      }   
   },
   methods: {
      goMineFn(){
         // this.$router.push('/mine')
         // replace 是把之前的地址直接替换掉，没有历史记录的，而 push 方法存在历史记录
         this.$router.replace('/mine')
      }
   }
}
</script>

<style scoped>

</style>