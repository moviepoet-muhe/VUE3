<template>
    <div class="category">
        <h2>category 组件</h2>

        <hr/>
        <!-- 
            <button @click="$router.push('/category/a')">A 组件</button>
            <button @click="$router.push('/category/b')">B 组件</button>
            <button @click="$router.push('/category/c')">C 组件</button>
        -->

        <button @click="$router.push({name: 'aa'})">A 组件</button>
        <button @click="$router.push({name: 'bb'})">B 组件</button>
        <button @click="$router.push({name: 'cc'})">C 组件</button>

        <div class="content">
            <!-- 二级路由的出口 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Category'
}
</script>

<style scoped>
button{
    margin: 10px;
}
.content{
    width: 500px;
    height: 300px;
    background-color: hotpink;
}
</style>
