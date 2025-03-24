<template>
    <div class="app-container">
        <button @click="age++">修改年龄</button>
        <p> {{ age }} 岁</p>
        <button @click="height++">修改身高</button>
        <p>{{ height }} cm</p>
        <button @click="weight++">修改体重</button>
        <p>{{ weight }} 斤</p>
    </div>
</template>

<script setup>
import { ref, watch, reactive, watchEffect } from 'vue'

const age = ref(16)
const height = ref(150)
const weight = ref(100)

// watchEffect() 不需要你具体要监听的数据源，可以根据你使用了那个数据，满足条件就会自动进行监听
watchEffect(()=>{
    if(age.value >= 18){
        console.log('你成年了，可以独立了')
    }
    if(weight.value>=120){
        console.log('改减肥了')
    }
})
</script>

<style scoped>

</style>