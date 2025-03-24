<template>
   <div class="app-container">
      <button @click="arr.name = '王旭'">数据更新1</button>
      <button @click="arr.like.a = 66">数据更新2</button>
      <hr />
      {{ arr }}

      <hr />
      <button @click="arr2[0] = '王江'">数据更新1</button>
      <button @click="arr2[1].a = 88">数据更新2</button>
      {{ arr2 }}
   </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   data() {
      return {
         num: 0,
         arr: { name: '王江', like: { a: 1, b: 2 } },
         arr2: ['王旭', { a: 1, b: 2 }]
      }
   },
   /*
      watch 侦听器
      + 检测数据的变化
      + 只有数据变化时，才能触发 侦听器 工作
      + 注意点
        => 无法直接监听整个对象的，可以通过 deep: true 属性配置深度监听
        => 监听对象时的属性值，需要给对象和属性外层加上引号，这是由对象的语法决定的
        => 可以监听整个数组，但是无法监听到数组里面具体的哪一项，但是对象可以
   */
   watch: {
      arr(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      'arr.name'(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      'arr.like.a'(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      'arr.like'(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      ['arr.like']: {
         handler(newVal, oldVal) {
            console.log(newVal, oldVal)
         },
         deep: true
      },

      arr: {
         handler(newVal, oldVal) {
            console.log(newVal, oldVal)
         },
         deep: true
      },

      arr2: {
         handler(newVal, oldVal) {
            console.log(newVal, oldVal)
         },
         deep: true
      }
   },
   methods: {
   }
}
</script>

<style scoped></style>