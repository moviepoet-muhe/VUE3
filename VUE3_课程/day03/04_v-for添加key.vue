<template>
    <div class="app-container">
       <ul>
         <li v-for="(item, index) in books" :key="item.id">
            书名：{{ item.name }}，作者{{ item.author }} 
            <span @click="delFn(index)">删除</span>
         </li>
       </ul>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         books: [
            {id: 1, name: '大哥', author: '未知'},
            {id: 2, name: '蛊真人', author: '未知'},
            {id: 3, name: '完美世界', author: '辰东'},
         ]
      }   
   },
   methods: {
      delFn(index){
         this.books.splice(index, 1)
      }
   }
}
</script>

<style>

</style>