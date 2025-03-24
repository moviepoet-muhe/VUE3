<template>
    <div class="app-container">
       <input type="text" v-model="msg" v-if="show" ref="input">
       <span v-else>{{ msg }}</span>
       <button @click="editFn">编辑</button>
       <button @click="show = false">确定</button>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const msg = ref('admin')
const show = ref(false)

// 获取元素
const input = ref(null)

const editFn = async ()=> {
    show.value = true
    // 等待下一次 DOM 更新刷新的工具方法
    await nextTick()
    input.value.focus()
    console.log(input.value)
}
</script>

<style scoped>
button{
    margin: 10px;
}
</style>