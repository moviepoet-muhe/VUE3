<template>
    <div>
        <h1>Nav 组件</h1>
        <p>我是{{ msg }}</p>
        <button @click="list">查看商品列表</button>
        <MySearch></MySearch>
    </div>
</template>

<script>
import MySearch from './MySearch.vue';

export default {
    name: 'Nav',
    data(){
        return {
            msg: '导航组件'
        }
    },
    methods: {
        list(){
            alert('详情...')
        }
    }
}
</script>

<style>

</style>

