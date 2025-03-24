<template>
    <div class="home">
        <div class="home-header">头部区域</div>
        <div class="content">
            home 组件
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
        </div>
        <!--
            面试题
            + data 为什么是一个函数？
              => 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
              => 保证数据的独立性，组件和组件之间不能相互影响，如果 data 是一个对象的话，那么它们会共享同一份数据，彼此之间
              会产生影响，导致组件复用出问题
        -->
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
export default {
    name: 'Home',
    components: {Counter}
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
/* 深度选择器，可以进行样式穿透设置 */
/* 注意点：推荐使用 :deep() */
/* :deep(button){
    background-color: hotpink;
} */

/* ::v-deep button{
    background-color: hotpink;
} */
</style>
