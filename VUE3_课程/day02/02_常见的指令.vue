<template>
    <div class="app-container">
        <h3>
            指令：vue.js 里面的指令分为内置指令和自定义指令，大多数情况下咱们都是使用的内置指令。
            所谓的指令就是 vue 把一些常见的操作进行封装，给咱们提供了一个自定义属性让你直接使用，
            当你使用这个指令的时候，底层会自动去做相对应的操作。指令默认都是以 v- 开头的
         </h3>

         <hr/>

         <p>胡子语法：{{ str1 }}</p>
         <p>胡子语法：{{ str2 }}</p>
         
         <!-- v-text 和 v-html 指令本质上就是 js 里面的 innerText 和 innerHTML -->
         <p v-text="str1"></p>
         <p v-text="str2"></p>
         <p v-html="str2"></p>

         <!-- v-on 绑定事件，简写 @  -->
         <!-- 注意点：函数的调用可以加括号，也可以不加括号。如果需要传递参数，那么就需要添加括号 -->
         <button v-on:click="fn1(10)">王江绑定事件1</button>
         <button @click="fn2()">王江绑定事件2</button>

         <hr/>

         <button @click="add1(1)">数量的增加1</button>
         <button @click="add2(2)">数量的增加2</button>
         <h3>{{ num }}</h3>

         <hr/>

         <!-- v-bind 动态绑定属性，简写 : 例如：:class。当进行动态绑定属性后，属性值里面可以解析变量  -->
         <img v-bind:src="url" alt="" width="200"> 
         <img :src="url" alt="" width="200">

         <div class="box base">哈哈</div>
         <div :class="['box', 'base']">哈哈</div>
         <div :class="{box: 'box'}">哈哈</div>
         <button @click="show = !show">显示样式</button>
         <div :class="{box2: true, base: show}">哈哈</div>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         str1: '王江喜欢 vue.js !',
         str2: '<span>指令看看区别 !</span>',
         num: 0,
         url: 'https://img2.baidu.com/it/u=2542207923,825788580&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1740675600&t=026a3e7e7aea65624107ee57df39e820',
         show: false
      }
   },
   methods: {
      fn1(a){
         alert('你好'+ a)
      },
      fn2(){
         alert('你好2')
      },
      add1(a){
         this.num += a
      },
      add2(b){
         this.num += b
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