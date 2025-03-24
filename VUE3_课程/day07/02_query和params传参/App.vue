<template>
    <div class="app-container">
      
      <!-- 
         <RouterLink to="/home">首页</RouterLink>
         <RouterLink to="/category">分类</RouterLink>
         <RouterLink to="/cart">购物车</RouterLink>
         <RouterLink to="/mine">我的</RouterLink>  
      -->

      <!-- query 传递参数，参数格式：之前的查询字符串。传递的参数在浏览器的地址栏可以看到 -->
      <!-- <RouterLink to="/details?a=100&b=200">详情</RouterLink> -->

      <!-- <button @click="$router.push('/details?a=100&b=200')">去详情页面</button> -->

      <!-- <button @click="$router.push({path: '/details', query: {id: '0012356', price: 2000}})">去详情页面</button> -->

      <!-- parmas 传参，传递的参数，参数名称不会在地址栏显示，只会显示值。参数后面的 ? 表示可选参数 -->
      <!-- <RouterLink to="/details/0012356/手机">详情</RouterLink> -->
      <!-- <button @click="$router.push('/details/1000')">去详情页面</button> -->
      
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

</style>