<template>
    <div class="app-container">
      <!-- 
         <RouterLink to="/home">首页</RouterLink>
         <RouterLink to="/category">分类</RouterLink>
         <RouterLink to="/cart">购物车</RouterLink>
         <RouterLink to="/mine">我的</RouterLink>  

         <RouterLink :to="{name: 'h'}">首页</RouterLink>
         <RouterLink :to="{name: 'ct'}">分类</RouterLink>
         <RouterLink :to="{name: 'cr'}">购物车</RouterLink>
         <RouterLink :to="{name: 'm'}">我的</RouterLink> 
      -->

      <button @click="$router.push({name: 'h'})">首页</button>
      <button @click="$router.push({name: 'ct'})">分类</button>
      <button @click="$router.push({name: 'cr'})">购物车</button>
      <button @click="$router.push({name: 'm'})">我的</button>

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
      
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>
a{
   margin: 10px;
}
button{
   margin: 10px;
}
</style>