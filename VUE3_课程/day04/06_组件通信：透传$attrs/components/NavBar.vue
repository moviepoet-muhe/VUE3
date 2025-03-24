<template>
    <div class="nav-bar">
        <h1>父组件：</h1>
        <!-- 注意点：透传 $attrs 给组件上面添加的属性，默认会保存到 $attrs 对象里面去 -->
        {{ $attrs }}
        <hr/>
        {{ $attrs.money }}
        {{ $attrs.a }}
        {{ $attrs.b }}

        <!-- 注意点：如果需要把父组件的数据继续透传给孙组件，可以动态绑定属性 -->
        <Search c="66" fd="富婆" v-bind="$attrs"/>
    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    name: 'NavBar',
    // props: ['a', 'b'],
    components: { Search },
    data(){
        return {
           
        }
    },
    methods: {
       
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
