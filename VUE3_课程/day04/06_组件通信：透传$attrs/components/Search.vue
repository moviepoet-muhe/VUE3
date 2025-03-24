<template>
    <div class="search">
        <h1>孙组件：</h1>
        <input type="text" placeholder="请输入你要搜索的商品">
        {{ $attrs }}
    </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return {
           
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.search{
    width: 160px;
    min-height: 120px;
    background-color: greenyellow;
}
</style>
