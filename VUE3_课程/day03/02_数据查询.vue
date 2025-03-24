<template>
    <div class="app-container">
       <button @click="requestFn">获取数据</button>
       <img :src="imgUrl" alt="" width="300">
    </div>
</template>

<script>
import axios from 'axios'
export default {
   name: 'App',
   // 创建后
   // created(){
   //    this.requestFn()
   // },
   // 挂载后
   // mounted(){
   //    this.requestFn()
   // },
   data(){
      return {
         imgUrl: ''
      }   
   },
   methods: {
      requestFn(){
         // console.log('hello')
         axios.get('https://v2.xxapi.cn/api/heisi').then(res=>{
            console.log(res.data.data)
            this.imgUrl = res.data.data
         })
      }
   }
}
</script>

<style>

</style>