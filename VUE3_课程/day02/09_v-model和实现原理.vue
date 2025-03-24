<template>
    <div class="app-container">
       <h1>v-model 双向数据绑定</h1>
       <!-- v-model 双向数据绑定，所谓的双向数据绑定，意思数据改变视图改变，视图改变数据跟着改变。v-mode 主要给表单元素使用 -->
       <!-- v-model 本质其实就是动态属性绑定和 oninput 事件组合实现的 -->
       <input type="text" v-model="str">
       <p>{{ str }}</p>
       <hr/>
       <!-- <input type="text" :value="username" @input="username=$event.target.value"> -->
       <input type="text" :value="username" @input="changeValue">
       {{ username }}
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         str: '你好啊',
         username: 'admin'
      }   
   },
   methods: {
      changeValue(){
         this.username = event.target.value
      }
   }
}
</script>

<style>

</style>