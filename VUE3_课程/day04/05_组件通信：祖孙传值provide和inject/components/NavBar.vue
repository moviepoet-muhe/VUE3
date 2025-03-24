<template>
    <div class="nav-bar">
        <h1>子组件：</h1>
        <!-- 子组件接收到爷爷组件传过来的值又传给孙子 -->
        <Search :money="money" />
    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    name: 'NavBar',
    components: { Search },
    // 接收爷爷组件传过来的值
    props: ['money'],
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.nav-bar {
    width: 300px;
    height: 200px;
    background-color: hotpink;
}

h1 {
    color: gold;
}
</style>
