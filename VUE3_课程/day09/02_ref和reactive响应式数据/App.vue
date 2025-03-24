<template>
   <div class="app-container">
      <!-- 在template里 可以直接使用ref定义的数据 -->
      {{ num }}
      {{ obj }}
      {{ info }}

      <button @click="index++">修改</button>
      {{ index }}
   </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
/*
   定义响应式数据
   + ref()
      => 可以定义基本数据类型
      => 可以定义引用数据类型
      => ref 定义的数据，使用的时候需要加 .value，因为 ref() 函数把数据包装成了响应式对象，把值是存储在 value 属性里面的 

   + reactive()
      => 只能定义引用数据
      => 使用不需要加 .value
      => reactive 定义出来的基本数据类型，是没有响应式的功能的，所以不要使用它定义基本数据类型

   + 工作中推荐使用 ref()
*/

// 定义基本数据，使用 ref 对象把 传入的基本数据类型包装成一个对象返回的num的值 是一个对象
const num = ref(10)

// 定义引用数据类型
const obj = ref({ a: 1, b: 2 })
console.log(num.value, obj.value.a, obj.value.b)


// 定义引用数据类型
const info = reactive({ name: '张三', age: 18 })
console.log(info.name, info.age)

const index = reactive(10)
// ref 的值 挂在在对象的value属性，不能整个修改index的值
console.log(index)

</script>

<style scoped></style>