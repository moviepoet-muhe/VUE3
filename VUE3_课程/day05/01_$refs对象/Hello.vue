<template>
    <div class="hello">
        <h1>Hello 组件</h1>
    </div>
</template>

<script>
export default {
    name: 'Hello',
    data(){
        return {
           a: 1,
           b: 20
        }
    },
    methods: {
       test(){
          console.log('这是测试方法')
       }
    }
}
</script>

<style scoped>
h1{
    color: gold;
}
</style>
