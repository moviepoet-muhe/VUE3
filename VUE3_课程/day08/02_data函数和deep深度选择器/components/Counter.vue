<template>
    <div class="counter">
        <button @click="num--">-</button>
        <span>{{ num }}</span>
        <button @click="num++">+</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data(){
        return {
            num: 0
        }
    },
}
</script>

<style scoped>
button{
    width: 50px;
    height: 30px;
    margin: 5px;
    background-color: skyblue;
    border: none;
}
</style>
