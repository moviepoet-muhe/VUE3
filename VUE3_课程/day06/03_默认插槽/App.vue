<template>
    <div class="app-container">
         <!--
            slot 插槽
            + 你可以理解为一个 '坑', 这个 '坑'是你挖的，需要你埋掉
            + 插槽你也可以理解为是一个占位
            插槽类型
            + 默认插槽
              => 直接把需要添加的内容放在组件双标记中间即可
              => 默认插槽只能存在一个，要不然插入的内容其实就是被复用了
         -->
         <List>
            <img src="./assets/26.jpg" alt="">
         </List>
         <List>
            <img src="./assets/27.jpg" alt="">
         </List>
         <List>
            <p>你好啊</p>
         </List>
    </div>
</template>

<script>
import List from './components/List.vue'
export default {
   name: 'App',
   components: {List},
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