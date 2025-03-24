<template>
    <div class="app-container">
        <!-- nav-bar -->
        <NavBar />
        <h1>我是首页！</h1>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
   data(){
      return {
         
      }   
   },
   methods: {

   }
}
</script>

<!-- scoped 提供了样式作用域，可以让样式只在当前的作用域下生效，解决了组件样式冲突问题 -->
<style scoped>
h1{
   color: red;
}
</style>