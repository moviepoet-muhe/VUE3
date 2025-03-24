<template>
    <div>
        <h3>子组件</h3>
        {{ obj }}
        {{ name }}
    </div>
</template>

<script setup>
import { inject } from 'vue'

// 注意点：和 props 接收不一样，需要使用返回值。接收数据的参数可以是数组，也可以是字符串
const obj = inject('info')
const name = inject(['name'])

</script>

<style scoped>
h3{
    color: orange;
}
</style>
