<template>
    <div class="app-container">
        <!-- 
            <div class="box1" v-if="show">
            <h2>呵呵</h2>
            <p>你好</p>
         </div>
         <div class="box2" v-else>
            <p>测试数据</p>
         </div> 
        -->
        <!-- template 模板标记，可以用来把内容当成一个整体，但是它并不会显示在页面里面，尤其配合 v-if 来一起使用，提高性能 -->
        <template v-if="show">
            <h2>呵呵</h2>
            <p>你好</p>
        </template>
        <template v-else>
            <p>测试数据</p>
        </template>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            show: false
        }
    }
}
</script>

<style></style>