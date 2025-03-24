<template>
    <div class="app-container">
       
    </div>
</template>

<script setup>
import { ref, reactive, toRaw, markRaw } from 'vue'
/*
   toRaw()
   + toRaw 用于获取一个响应式对象的原始对象
   + 可以把 响应数据 的响应式给取消掉
   markRaw()
   + 用于标记一个对象，使其永远不会被转换成响应式对象
*/ 
// const obj1 = ref({a: 1, b: 2})
// console.log(toRaw(obj1.value))

const obj2 = markRaw({a: 1, b: 2})
const res = ref(obj2)
console.log(res.value)

</script>

<style scoped>

</style>