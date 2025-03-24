<template>
    <div class="app-container">
      <!-- v-model 默认采用的事件是原生 js 里面的 oninput 事件，lazy 修饰符，可以把事件改成 onblur 事件 -->
      <input type="text" v-model.lazy="msg">
      {{ msg }}
      <!-- number：自动将用户的输入值转为数值类型（如果能转的话） -->
      <input type="text" v-model.number="num1">
      <input type="text" v-model.number="num2">
      <button @click="getNum">计算</button>
      <input type="text" :value="res">
      <!-- trim：自动过滤用户输入的首尾空白字符 -->
      <input type="text" v-model.trim="desc">
      <button @click="getInfo">获取值</button>
    </div>
</template>

<script>
export default {
   name: 'App',
   /*
      {{}}
      + 胡子语法
      + 插值语法
      this
      + vue 里面的 this 指向的是代理对象，就是 vue 的实例对象
      + 当咱们使用 this 的时候，会默认把 data 里面的数据拿出来给咱们使用 
      + 数据虽然是放在 data 选项中的，但是使用的时候其实是把数据拿出来给到 vue 实例 --- this
   */ 
   data(){
      return {
         msg: 'hello',
         num1: 0,
         num2: 0,
         res: '',
         desc: ''
      }   
   },
   methods: {
      getNum(){
         this.res = this.num1 + this.num2
      },
      getInfo(){
         console.log(this.desc)
      }
   }
}
</script>

<style>

</style>