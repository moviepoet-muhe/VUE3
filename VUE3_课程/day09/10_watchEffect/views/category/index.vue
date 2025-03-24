<template>
    <div class="category">
        <h2>category 组件</h2>
        <div class="content">
            分类内容区域
            <hr/>
            {{ $store.state.num }}
            {{ $store.state.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Category',
    beforeRouteEnter (to, from) {
        console.log('进入组件被调用')
    },
    beforeRouteLeave (to, from) {
        console.log('离开组件被调用')
        if(!confirm('查看数据是否保存')){
            return false
        }
    }
}
</script>

<style scoped>
button{
    margin: 10px;
}
.content{
    width: 100%;
    height: 1000px;
    background-color: hotpink;
}
</style>
