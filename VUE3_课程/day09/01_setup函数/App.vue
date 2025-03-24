<template>
   <div class="app-container">
      <!--
            setup() 函数
            + 组合式 api 所有的功能都是在 setup 函数内部完成的
            + setup 函数是早于 生命周期的，比 beforeCreate() 函数还执行早
            + 如果需要使用 setup 函数内部的数据，必须把数据以返回出去
            + 组合式 api 里面没有 this 存在的，所以不能使用 this
            + 组合式 api 里面函数属于一等公民，把之前的各种选项变成了一个一个的函数让咱们来使用
            setup 语法糖
            + 使用 setup 函数，需要把内部的数据返回，setup 在这里还是一个选项，非常不利于开发
            + 可以直接在 script 标记上面设置一个 setup 属性，可以把 script 变成 setup 函数内部
            + 简化了使用 setup 函数的流程
            + setup 语法糖里面使用组件不需要注册，也不需要给组件名称，
            如果非要添加可以 script 上添加一个name
       -->
      <button @click="num++">+</button>
      <button @click="add">+</button>
      {{ num }}

      <button @click="addFn">{{ count }}</button>
      <button @click="addFn2">{{ count }}</button>
      <Son></Son>
   </div>
</template>

<script>
import { ref } from 'vue'
export default {
   name: 'App',
   beforeCreate() {
      console.log('beforeCreate')
   },
   setup() {
      // 使用组合式 api
      // 定义响应式数据 可以使用 ref() 函数
      const num = ref(10)
      console.log(num.value)

      const add = () => {
         num.value++
      }
      // 如果需要使用 setup 函数内部的数据，必须把数据以返回出去
      return {
         num,
         add
      }
   }
}
</script>
<!-- 
   注意点：这个脚本块将被预处理为组件的 setup() 函数，这意味着它将为每一个组件实例都执行。<script setup> 中的顶层绑定都将自动暴露给模板 
-->
<script setup>
import Son from './components/Son.vue'

const count = ref(0)

function addFn() {
   count.value++
}

const addFn2 = () => {
   count.value += 10
}
</script>

<style scoped></style>