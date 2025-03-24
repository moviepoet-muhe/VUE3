<template>
    <div class="app-container">
        <h1>胡子语法</h1>
        <!-- 注意点：胡子语法里面只能写 表达式，语法里面不推荐做比较复杂的操作。有些操作虽然不报错，有可能显示的结果跟你预期的不一样 -->
        <button @click="a++">+</button>
        {{ a }}
        <hr/>
        {{ num > 10 ? '大于' : '小于'  }}
        <hr/>
        {{ x = 20}}
        <hr/>
        {{ list.filter((item)=> item>=30) }}
        <hr/>
        {{ getSum() }}
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         a: 1,
         num: 20,
         list: [10, 20, 30]
      }
   },
   methods: {
      getSum(){
         return this.list.reduce((sum, item)=> sum += item, 0)
      }
   }
}
</script>

<style>

</style>