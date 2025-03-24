<template>
    <div class="home">
        <div class="home-header">头部区域</div>
        <div class="content">
            home 组件
            <!-- 注意点：vuex 设计的思想是单项的数据流，不能直接进行数据的修改，直接修改这样也不利于后期的代码维护 -->
            <!-- <button @click="$store.state.num++">修改 store 里面的数据</button> -->
            <!-- <br/> -->
            <!-- <button @click="$store.commit('modifyNum', 2)">通过 vux 提供的方法进行数据的修改1</button>
            <button @click="changeNumFn">通过 vux 提供的方法进行数据的修改2</button>
            <button @click="$store.dispatch('modifyNum2', 10)">通过 vux 提供的方法进行数据的修改3</button> -->
            <!-- <br/> -->
            <!-- {{ $store.state.num }}
            {{ $store.state.name }} -->

            <!-- <hr/> -->

            <!-- {{ $store.getters.sum }} -->

            <!-- 
                没有使用模块化之前的代码
                <button @click="modifyNum(10)">修改1</button>
                <button @click="modifyNum2(20)">修改2</button>
                {{ num }}
                {{ name }}
                {{ sum }} 
             -->

             <!-- {{ user.num }}
             {{ sum }} -->

             <!-- {{ name }} -->

             <button @click="modifyNum(10)">修改3</button>
             <button @click="modifyNum2(20)">修改4</button>
             {{ num }}
        </div>
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'Home',
    components: {Counter},
    computed: {
        // ...mapState(['num', 'name']),
        // ...mapGetters(['sum'])

        // 注意点：这种写法必须解构多个模块，返回结果是一个对象
        // ...mapState(['user', 'login']),
        // ...mapGetters('user', ['sum'])

        ...mapState('user', ['num', 'name']),
    },
    data(){
        return {
        }
    },
    methods: {
        // changeNumFn(){
        //     this.$store.commit('modifyNum', 3)
        // }
        
        ...mapMutations('user', ['modifyNum']),
        ...mapActions('user', ['modifyNum2'])
    }
}
</script>

<style scoped>
.home-header{
    width: 100%;
    height: 45px;
    background-color: #ff5454;
    position: fixed;
    top: 0;
}
.content{
    height: 1000px;
    background-color: gold;
    margin-top: 45px;
}
button{
    margin: 10px;
    display: block;
}
</style>
