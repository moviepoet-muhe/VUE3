<template>
    <div class="app-container">
       <div class="mask" v-if="isLodding">
            <div>
               <h3>{{count}}s</h3>
               <img src="https://spider.ws.126.net/31e23022a96e40fd87b354d90aba1a32.gif" alt="">
            </div>
       </div>
    </div>
</template>

<script>
export default {
   name: 'App',
   // 当页面创建后好，咱们调用这个函数
   created(){
      console.log('我被调用了')
      this.initFn()
   },
   data(){
      return {
         isLodding: true,
         count: 3,
         timer: 0 // 为什么 timer 赋值为 0 呢? 其实这里初始值为其他的也可以，主要考虑到后面使用 ts，给 ts 添加类型方便，定时器返回的id或者叫做序号类型就是 number
      }   
   },
   methods: {
      initFn(){
         // setTimeout(()=>{
         //    this.isLodding = false
         // }, 3000)

         this.timer = setInterval(()=>{
            this.count--
            if(this.count<0){
               this.isLodding = false
               clearInterval(this.timer)
            }
         }, 1000)
      }
   }
}
</script>

<style>
*{
   margin: 0;
   padding: 0;
}
.mask{
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, .5);
}
.mask div{
   width: 200px;
   height: 200px;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   margin: auto;
}
.mask div img{
   width: 200px;
   height: 200px;
}
</style>