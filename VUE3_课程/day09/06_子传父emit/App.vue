<template>
    <div class="app-container">
        <h1>父组件</h1>
        <Son @getData="fn" @getData2="fn2"/>
    </div>
</template>

<script setup>
import Son from './components/Son.vue'

const fn = (payload)=> {
   console.log(payload)
}

const fn2 = (payload)=> {
   console.log(payload)
}
</script>

<style scoped>
h1{
   color: gold;
}
</style>