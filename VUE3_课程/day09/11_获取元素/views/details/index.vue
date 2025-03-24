<template>
    <div class="details">
        details 组件
        <p>接收 query 参数：{{ $route.query }}</p>
        <p>接收 params 参数：{{ $route.params }}</p>
    </div>
</template>

<script>
export default {
    name: 'Details',
    
}
</script>

<style scoped>

</style>
