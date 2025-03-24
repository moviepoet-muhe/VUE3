<template>
    <div class="nav-bar">
        <!-- <span @click="$router.go(-1)">返回</span>头部区域 -->
        <span @click="$router.back()">返回</span>头部区域
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.nav-bar{
    width: 100%;
    height: 45px;
    background-color: #e5e5e5;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    display: flex;
}
.nav-bar span{
    margin-right: 100px;
    margin-left: 10px;
}
</style>
