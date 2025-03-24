<template>
    <div>
        <h3>这是 C 组件</h3>
        <input type="text" v-model="num">
    </div>
</template>

<script>
export default {
    name: 'ComC',
    data(){
        return {
            num: 0
        }
    },
    unmounted(){
        console.log('C 组件取消挂载')
    }
}
</script>

<style scoped>
h3{
    color: palegreen;
}
</style>

