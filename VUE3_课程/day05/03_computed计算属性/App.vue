<template>
    <div class="app-container">
       {{ getSum() }}
       {{ getSum() }}
       {{ getSum() }}

       {{ sum }}
       {{ sum }}
       {{ sum }}


       <hr />

       <button @click="num++">更新数据</button>
       {{ num }}
       <hr />
       <button @click="num2++">更新数据</button>
       {{ num2 }}

       <hr />
       <button @click="num3++">更新数据</button>
       {{ num3 }}
    </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   data(){
      return {
         list: [10, 20, 30],
         num: 10
      }   
   },
   /*
      computed 计算属性
      + 计算属性，计算出的结果是属性，默认存在缓存
      + 注意点
        => 计算属性 和 定义在 data 选项里面的属性，都是一样的，建议最好不要重复定义
        => 计算属性是基于 元数据 计算出来的，如果 元数据 发生改变，那么计算属性要重新计算出新的值
        => 计算属性默认是只读的，不能直接对属性进行修改
        => 计算属性的值如果需要进行修改，推荐使用 get() 和 set() 方式进行，set 和 get 必须放在对象语法里面 
      + 计算属性底层原理
        => 其实就是使用的 get 和 set 方法，对象里面的获取器（getter） 和 设置器（setter）
   */
   computed: {
      sum(){
         console.log('computed，你看看我执行几次')
         return this.list.reduce((sum, item)=>{
            return sum += item
         }, 0)
      },

      num2(){
         return this.num + 2
      },

      // 计算属性的修改
      num3: {
         // 注意点：如果在对象里面需要写 key: value 形式，对象里面如果方法也支持简写。如果是函数里面，这里是不能支持函数的简写形式
         get(){
            return this.num + 3
         },
         set(value){
            this.num = value
         }
      }
   },
   methods: {
      getSum(){
         console.log('methods，你看看我执行几次')
         return this.list.reduce((sum, item)=>{
            return sum += item
         }, 0)
      }
   }
}
</script>

<style scoped>

</style>