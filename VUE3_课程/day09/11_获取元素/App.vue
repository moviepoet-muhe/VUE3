<template>
    <div class="app-container">
        <div class="box" ref="box"></div>

        <p ref="p">123</p>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, useTemplateRef } from 'vue'

// 获取元素
// 获取元素版本自动进行关联的，是通用的版本
const box = ref(null)

// useTemplateRef() 获取元素，需要 vue.3.5.x 以上版本才能使用
const p = useTemplateRef('p')

// onBeforeMount 挂载前
onBeforeMount(()=>{
    console.log('挂载前')
    
})

// onMounted 挂载后
onMounted(()=>{
    console.log('挂载后')
    console.log(box.value)
    console.log(p.value)
})

// onBeforeUpdate 更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})

// onUpdated 更新后
onUpdated(()=>{
    console.log('更新后')
})

// onBeforeUnmount 取消挂载前
onBeforeUnmount(()=>{
    console.log('取消挂载前')
})

// onUnmounted 取消挂载后
onUnmounted(()=>{
    console.log('取消挂载后')
})
</script>

<style scoped>
.box{
    width: 200px;
    height: 200px;
    background-color: orange;
}
</style>