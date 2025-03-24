<template>
    <div class="app-container" v-cloak>
      <!-- v-cloak 指令：当网络比较慢的情况下，会直接显示胡子语法在网页中，使用这个可以直接隐藏胡子语法 -->
      {{ name }}
      <!-- v-pre 跳过该元素及其所有子元素的编译 -->
      <p v-pre>胡子语法：{{ name }}</p>
      <button @click="name='王旭'">更新姓名</button>
      <!-- v-onoce 仅渲染元素和组件一次，并跳过之后的更新 -->
      <h3 v-once>{{ name }}</h3>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         name: 'hello，欢迎！'
      }   
   },
   methods: {
      
   }
}
</script>

<style>
[v-cloak]{
   display: none;
}
</style>