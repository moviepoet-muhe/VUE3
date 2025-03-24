<template>
    <div class="app-container">
         <h3>event 事件对象</h3>
         <hr/>
         <!-- 
            event
            + 如果调用函数的时候不传递参数，不加括号。可以在函数形参里面传入 event 可以拿到事件对象 
            + 如果遇到函数需要传递参数，又要使用事件对象 event，那么需要在函数调用的第一个参数哪里传入 $event
         -->
         <button @click="fn">哈哈</button>
         <button @click="fn2($event, 10)">嘿嘿</button>

         <div class="box" @click="fn3">
            <span>span标记</span>
            <button>按钮</button>
         </div>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
      }   
   },
   methods: {
      fn(event){
         console.log(event)
      },
      fn2(e, a){
         console.log(e.pageX, a)
      },
      // 使用事件委派机制
      fn3(e){
         console.log(e.target)
      }
   }
}
</script>

<style>
span{
   color: red;
}
.box{
   width: 200px;
   height: 200px;
   background-color: orange;
   margin: 10px;
}

.box2{
   width: 200px;
   height: 200px;
   background-color: pink;
   margin: 10px;
   display: none;
}
.base{
   font-size: 30px;
   color: yellow;
   display: block;
}
</style>