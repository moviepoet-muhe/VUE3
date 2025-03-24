<template>
    <div class="app-container">
      
      <button @click="$router.push('/category')">分类页面</button>
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