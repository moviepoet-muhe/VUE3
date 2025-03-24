<template>
    <div class="app-container">
      <!-- 用户偏好设置：当用户更改他们的偏好设置时，如主题颜色、字体大小等，可以使用 watch 来监听这些变化，并立即应用到应用中 -->
      <button @click="them='hotpink'">粉色</button>
      <button @click="them='skyblue'">蓝色</button>
      <button @click="them='purple'">紫色</button>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         them: 'hotpink'
      }   
   },
   watch: {
      them: {
         handler(value){
            this.setThemFn(value)
         },
         // 立即执行
         immediate: true
      },
   },
   methods: {
      setThemFn(value){
         document.body.style.backgroundColor = value
      }
   }
}
</script>

<style scoped>

</style>