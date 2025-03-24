<template>
    <div class="nav-bar">
        <h1>子组件：</h1>
        <!-- 第一步：通过这个事件发送 -->
        <button @click="sendData">来自好大儿的礼物🎁</button>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    
    data(){
        return {
           list: ['奥特曼', '🚗', '作业本']
        }
    },
    methods: {
        // 第二步：使用 $emit() 传递数据
        // 通过 $emit() 进行数据的发送
        sendData(){
            // 参数1 表示传递数据的事件名称（自定义，父组件用来接收数据使用）
            // 参数2 表示需要传递过去的数据
            // this.$emit('getData', '奥特曼')
            this.$emit('getData', this.list)
        }
    }
}
</script>

<style scoped>
.nav-bar{
    width: 300px;
    height: 200px;
    background-color: hotpink;
}
h1{
    color: gold;
}
</style>
