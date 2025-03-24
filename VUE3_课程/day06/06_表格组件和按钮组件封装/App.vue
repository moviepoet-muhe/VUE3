<template>
    <div class="app-container">
         <!-- 第一个表格组件没有传递自己的数据过去，使用的是默认数据 -->
         <Table>
            <template #header>
               <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>作者</th>
               </tr>
            </template>
            <template #body="{row}">
               <tr>
                  <td>{{ row.id }}</td>
                  <td>{{ row.name }}</td>
                  <td>{{ row.author }}</td>
               </tr>
            </template>
         </Table>

         <!-- 第二个表格组件，需要传递自己的数据过去 -->
         <Table :data="info">
            <template #header>
               <tr>
                  <th>学号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>性别</th>
                  <th>编辑</th>
               </tr>
            </template>
            <template #body="{row}">
               <tr>
                  <td>{{ row.id }}</td>
                  <td>{{ row.name }}</td>
                  <td>{{ row.age }}</td>
                  <td>{{ row.sex }}</td>
                  <td>
                     <button>编辑</button>
                     <button>删除</button>
                  </td>
               </tr>
            </template>
         </Table>
    </div>

    <hr />

    <Button type="edit">编辑</Button>
    <Button type="delete">删除</Button>
    <Button type="warning">警告</Button>
</template>

<script>
import Table from './components/Table.vue'
import Button from './components/Button.vue'
export default {
   name: 'App',
   components: {Table, Button},
   data(){
      return {
         info: [
            {id: 1, name: '王江', age: 18, sex: '男'},
            {id: 2, name: '王旭', age: 20, sex: '男'},
            {id: 3, name: '邓为', age: 18, sex: '男'},
         ]
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>

</style>