<template>
    <div class="app-container">
        {{ sum }}
        <button @click="add = 60">修改计算属性</button>
        {{ add }}
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const list = ref([1, 2, 3, 10, 8, 10, 12])

const sum = computed(()=> list.value.reduce((total, item)=>{
    return total += item
}, 0))


const num = ref(10)

const add = computed({
    get(){
        return num.value + 10
    },
    set(value){
        num.value += value
    }
})
</script>

<style scoped>
h1{
   color: gold;
}
</style>