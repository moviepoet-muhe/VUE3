<template>
    <div class="cart">
        cart 组件
        {{ route.query.a }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.query)
</script>

<style scoped>

</style>
