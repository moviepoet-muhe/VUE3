<template>
    <div class="app-container">
       <h1>父组件：App 组件</h1>
       好大儿的礼物：{{ result }}
       <!-- 子传父：子组件的数据传递给父组件 -->
       <!-- 第三步：接收传递过来的数据，注意，必须使用子组件自定义的函数 -->
       <!-- <NavBar @getData="getDataFn"/> -->
       <!-- 注意点：子组件传递过来的数据，在使用获取函数的时候，加了括号，那么会把数据绑定到 $event 上面 -->
       <NavBar @getData="getDataFn($event)"/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
   data(){
      return {
         result: ''
      }   
   },
   methods: {
      getDataFn(payload){
         console.log(payload)
         this.result = payload
      }
   }
}
</script>

<style scoped>
.app-container{
   width: 500px;
   min-height: 300px;
   background-color: skyblue;
}
h1{
   color: red;
}
</style>