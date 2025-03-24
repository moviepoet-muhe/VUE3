<template>
    <div class="app-container">
        <h1>父组件</h1>
        <Son a="10" b="20" :info="info"/>
    </div>
</template>

<script setup>
import Son from './components/Son.vue'

import { ref, reactive } from 'vue'

const info = ref({id: 1, name: '张三', age: 18})

</script>

<style scoped>
h1{
   color: gold;
}
</style>