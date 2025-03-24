<template>
    <div class="app-container">
        <!-- 注意点：v-color 自定义指令，值里面其实是一个表达式，需要传递的类型是一个字符串 -->
        <h1 v-color="'red'">全局自定义指令</h1>
        <p v-color="'gold'">王江喜欢学习，今天没有精力！</p>

        <input type="text" v-focus="true">
    </div>
</template>

<script>
export default {
   name: 'App',
   components: {},
   // 自定义局部指令
   directives: {
      focus: {
         mounted(el, binding){
            // console.log(el, binding)
            if(binding.value === true){
               el.focus()
            }
         }
      }
   },
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