<template>
   <div class="app-container">
      <!-- 
           ref 
           + 是一个对象，它里面保存的是需要获取元素的相关的信息 
           + ref 表示的是响应式数据，在组合式 api 开发规范里面，使用它替代了选项式里面的 data 选项
        -->
      <div class="drag" ref="drag1">1</div>
      <div class="drag" ref="drag2">2</div>
      <button @click="getEleFn">获取元素</button>
      <input type="text" ref="input">
      <button @click="getFocusFn">获取焦点</button>
      <hr />
      <!-- ref 加在子组件上，用this.ref.xxx 获取到的是组件实例，可以使用组件的所有方法 -->
      <Hello ref="ho" />
   </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   components: { Hello },
   mounted() {
      // console.log(document.querySelector('.drag'))
      // 获取元素

      // 使用this.$refs 拿到当前组件里所有的ref对象
      // console.log(this.$refs.drag1)
      // console.log(this.$refs.drag2)
      console.log(this.$refs.ho.a)
      console.log(this.$refs.ho.b)
      this.$refs.ho.test()
   },

   methods: {
      getEleFn() {
         console.log(this.$refs.drag1)
      },
      getFocusFn() {
         console.log(this.$refs.input)
         this.$refs.input.focus()
      }
   }
}
</script>

<style scoped>
.drag {
   width: 200px;
   height: 200px;
   background-color: orange;
}
</style>