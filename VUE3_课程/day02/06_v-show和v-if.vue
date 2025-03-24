<template>
    <div class="app-container">
      <!-- v-if 其实就是 js 里面的选择结构 -->
      
         <div v-if="!cart.length">您的购物车空空如也！赶紧去购物吧...</div>
         <div v-else>
            购物车内容
         </div> 
     
      
         <p v-if="score>=90">优秀</p>
         <p v-else-if="score>=80">你也不错</p>
         <p v-else-if="score>=70">继续保持</p>
         <p v-else-if="score>=60">恭喜及格了</p>
         <p v-else>不及格</p> 
     
      
         <button @click="show = !show">显示/隐藏</button>
         <div class="box" v-if="show"></div> 
     
      <!-- v-show是根据表达式之真假值，切换元素的 display CSS属性 -->
      
         <button @click="show = !show">显示/隐藏</button>
         <div class="box" v-show="show"></div> 
      
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         cart: [{a: 1}, {b: 2}],
         score: 80,
         show: false
      }   
   },
   methods: {
      
   }
}
</script>

<style>
.box{
   width: 200px;
   height: 200px;
   background-color: orange;
}
</style>