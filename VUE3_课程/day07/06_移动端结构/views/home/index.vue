<template>
    <div class="home">
        <div class="home-header">头部区域</div>
        <div class="content">home 组件</div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home-header{
    width: 100%;
    height: 45px;
    background-color: #ff5454;
    position: fixed;
    top: 0;
}
.content{
    height: 1000px;
    background-color: gold;
    margin-top: 45px;
}
</style>
