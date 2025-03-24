<template>
    <div>
        <h3>这是 A 组件</h3>
    </div>
</template>

<script>
export default {
    name: 'ComA',
    data(){
        return {
           
        }
    },
    unmounted(){
        console.log('A 组件取消挂载')
    }
}
</script>

<style scoped>
h3{
    color: red;
}
</style>
