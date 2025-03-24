<template>
    <div class="app-container">
       <h1>父组件：App 组件</h1>
       <!-- 父子组件传值，把父组件里面的数据传递给子组件 -->
       <!-- 第一步：在引用组件的地方，通过自定义属性来传递 -->
       <NavBar title="王江" :a="10" :list="list"/>
       <!-- 
         <NavBar title="陈辰🐂" />
         <NavBar title="王旭喜欢洗脚" /> 
       -->
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
   data(){
      return {
         list: ['陈辰', '王旭', '王江爱黑丝']
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