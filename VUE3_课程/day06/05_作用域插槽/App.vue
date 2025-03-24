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
            + 作用域插槽
              => 可以通过数据的传递，来展示不同的数据
              => 数据是子组件提供，父组件使用
         -->
         <List :data="personList">
             <template #default="{item}">
                <li>书名：{{ item.name }}，作者：{{ item.age }}, 爱好：{{ item.like }}</li>
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
         personList: [
            {id: 1, name: '王江', age: 18, like: '洗脚'},
            {id: 2, name: '王旭', age: 16, like: '睡觉'},
            {id: 3, name: '陈辰', age: 24, like: '学习'},
         ]
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>

</style>