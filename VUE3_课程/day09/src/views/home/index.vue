<template>
    <div class="home">
        <div class="home-header">头部区域</div>
        <div class="content">
            home 组件
            <button @click="router.push({path: '/cart', query: {a: 10, b: 20}})">购物车</button>

            <button @click="goFn">我的</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goFn = ()=> {
    router.push({path: '/mine'})
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
