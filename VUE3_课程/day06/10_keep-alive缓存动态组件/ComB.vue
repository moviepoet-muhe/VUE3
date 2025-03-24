<template>
    <div>
        <h3>这是 B 组件</h3>
        <button @click="num--">-</button>
        {{ num }}
        <button @click="num++">+</button>
    </div>
</template>

<script>
export default {
    name: 'ComB',
    data(){
        return {
            num: 0
        }
    },
    // activated(){
    //     // activated 每次进入缓存也都都会执行
    //     console.log('每次进入缓存也都都会执行')
    // },
    // deactivated(){
    //     // 钩子是在组件被 <keep-alive> 缓存起来并且不再活跃时调用的
    //     console.log('缓存起来并且不再活跃时调用的')
    // }

    unmounted(){
        console.log('B 组件取消挂载')
    }

}
</script>

<style scoped>
h3{
    color: green;
}
</style>

