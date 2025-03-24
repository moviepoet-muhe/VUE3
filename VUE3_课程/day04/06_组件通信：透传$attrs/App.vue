<template>
    <div class="app-container">
       <h1>爷爷组件：App 组件</h1>
       <NavBar money="20000" a="10" b="20"/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
   // 祖孙传值
   provide(){
      return {
        
      }
   },
   data(){
      return {
         result: ''
      }   
   },
   methods: {

   }
}
</script>

<style scoped>
.app-container{
   width: 500px;
   min-height: 300px;
   background-color: skyblue;
}
h1{
   color: red;
}
</style>