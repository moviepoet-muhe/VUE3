<template>
    <div class="search-content">
        <hr />
        <input type="text" v-model="msg">
        <button>搜索</button>
    </div>
</template>

<script>
export default {
    name: 'MySearch',
    data() {
        return {
            msg: '请输入你要搜索的内容'
        }
    }
}
</script>

<style></style>
