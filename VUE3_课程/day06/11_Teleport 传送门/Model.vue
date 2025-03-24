<template>
    <div class="model">
        我是模态框
    </div>
</template>

<script>
export default {
    name: 'Model',
    data(){
        return {
            num: 0
        }
    }
}
</script>

<style scoped>
.model{
    width: 300px;
    height: 300px;
    background-color: skyblue;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
</style>

