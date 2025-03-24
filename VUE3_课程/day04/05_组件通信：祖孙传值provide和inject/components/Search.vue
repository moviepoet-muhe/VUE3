<template>
    <div class="search">
        <h1>孙组件：</h1>
        <input type="text" placeholder="请输入你要搜索的商品">
        {{ money }}
        {{ msg }}
        <ul>
            <li v-for="item in fd" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    // 接收父组件NavBar传过来的值
    props: ['money'],
    // 接收爷爷组件App传过来的值
    inject: ['msg', 'fd'],

    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.search {
    width: 160px;
    min-height: 120px;
    background-color: greenyellow;
}
</style>
