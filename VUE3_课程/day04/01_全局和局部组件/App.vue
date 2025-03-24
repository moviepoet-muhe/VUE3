<template>
    <div class="app-container">
       <!-- 
         component 组件
         + 局部组件，只能在当前的组件里面使用
         + 全局组件，可以在任何组件里面使用 
         + 注意点
           => 组件的使用，规定是以标记的格式（底层会自动处理）
           => 使用双标记或者单标记都可以
       -->
       <h1>我是App组件</h1>
       <!-- 使用组件 -->
       <Nav />
       <!-- <Nav></Nav> -->

       <MySearch></MySearch>

       <!-- <my-search></my-search> -->
    </div>
</template>

<script>
// @ 表示的就是 src 目录
// import Nav from '@/components/Nav.vue'
import Nav from './components/Nav.vue'
export default {
   name: 'App',
   components: {Nav},
   data(){
      return {
         name: '测试'
      }   
   },
   methods: {

   }
}
</script>

<style>

</style>