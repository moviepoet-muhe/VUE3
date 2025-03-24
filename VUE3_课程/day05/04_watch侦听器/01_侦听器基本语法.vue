<template>
    <div class="app-container">
        <button @click="num+=1">数据更新</button>
        {{ num }}
    </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   data(){
      return {
         num: 0
      }   
   },
   /*
      watch 侦听器
      + 检测数据的变化
      + 只有数据变化时，才能触发 侦听器 工作
   */
   watch: {
      // 第一种写法
      // num(newVal, oldVal){
      //    console.log(`新值：${newVal}，旧值：${oldVal}`)
      // }

      // 第二种写法，可以配置更多的功能
      num: {
         handler(newVal, oldVal){
            console.log(`新值：${newVal}，旧值：${oldVal}`)
         },
         // immediate 表示立即执行一次，无论数据更新与否，都会先执行一次
         immediate: true
      }
   },
   methods: {
   }
}
</script>

<style scoped>

</style>