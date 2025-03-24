<template>
   <div class="app-container">
      <h1>爷爷组件：App 组件</h1>
      <!-- 使用标签发值 -->
      <NavBar money="20000" />

   </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: { NavBar },
   /**
 * 使用provide 统一下发值
 * provide 是一个函数 函数必须有返回值
 * 返回的值可以在任意子级组件接收
 */
   provide() {
      return {
         msg: '来自你爷爷的问候！',
         fd: [
            {
               id: 1,
               name: '富阿姨',
               age: 42
            },
            {
               id: 2,
               name: '富奶奶',
               age: 70
            }
         ]
      }
   },
   data() {
      return {
         result: ''
      }
   },
   methods: {

   }
}
</script>

<style scoped>
.app-container {
   width: 500px;
   min-height: 300px;
   background-color: skyblue;
}

h1 {
   color: red;
}
</style>