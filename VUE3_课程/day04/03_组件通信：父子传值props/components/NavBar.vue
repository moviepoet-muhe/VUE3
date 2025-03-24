<template>
    <div class="nav-bar">
        <h1>子组件：{{ title }}</h1>
        <!-- 注意点：父组件传递过来的数据，不能进行修改，因为数据是单项的（单选数据流） -->
        <button @click="a1++">更新数据</button>
        {{ a }}
        {{ a1 }}
        {{ list }}
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    // 第二步：通过 props 来接收
    // props: ['title', 'a', 'b']
    props: {
        title: {
            type: String, // 传递过来数据的类型
            default: 'admin', // 默认值，如果没有传递的话
            required: false // 参数是否需要传递
        },
        a: {
            type: Number,
        },
        list: {
            type: Array
        }
    },
    data(){
        return {
            // 注意点：如果想要把父组件传递过来的数据变成响应式，可以在 data 里面重新赋值操作
            a1: this.a
        }
    }
}
</script>

<style scoped>
.nav-bar{
    width: 300px;
    height: 200px;
    background-color: hotpink;
}
h1{
    color: gold;
}
</style>
