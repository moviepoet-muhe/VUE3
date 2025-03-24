<template>
    <div>
        <h3>子组件</h3>
        <!-- emit() 参数1：表示表示使用的事件名称，给父组件接收数据使用，参数2：表示传递给父组件的数据 -->
        <button @click="emit('getData', '来自儿子的家书！')">发送数据1</button>
        <button @click="emit('getData2', '1000万')">发送数据2</button>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

// 参数：表示自定义的事件名称，给父组件接收数据使用
const emit = defineEmits(['getData', 'getData2'])

</script>

<style scoped>
h3{
    color: orange;
}
</style>
