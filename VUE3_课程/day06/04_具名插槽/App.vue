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
            + 具名插槽
              => 给对应的插槽取名称
              => 如果插槽不起名称，那么它就是默认插槽，会自动添加一个隐式的 name="default"
              => 具名插槽使用，必须在组件里面配合 template 模板标记一起
              =>  v-slot:pic 简写 #pic
         -->
         <List>
            <!-- 
               <template v-slot:pic>
                  <img src="./assets/26.jpg"/>
               </template> 
            -->
            <template #pic>
               <img src="./assets/26.jpg"/>
            </template>
            <template #default>
               <p>我是内容区域</p>
            </template>
            <template #desc>
               <p>哈哈，我是描述内容</p>
            </template>
         </List>
         <List>
            <template #pic>
               <img src="./assets/27.jpg"/>
            </template>
            <template #default>
               <p>我是内容区域</p>
            </template>
            <template #desc>
               <p>哈哈，我是描述内容</p>
            </template>
         </List>
         <List>
            <template #pic>
               <img src="./assets/28.jpg"/>
            </template>
            <template #default>
               <p>我是内容区域</p>
            </template>
            <template #desc>
               <p>哈哈，我是描述内容</p>
            </template>
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