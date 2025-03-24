<template>
    <div class="app-container">
        <h1>父组件</h1>
        <Son />
    </div>
</template>

<script setup>
import Son from './components/Son.vue'

import { provide } from 'vue'

provide('info', {a: 1, b: 2})

provide('name', '王江')

</script>

<style scoped>
h1{
   color: gold;
}
</style>