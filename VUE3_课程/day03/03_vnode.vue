<template>
    <div class="app-container">
       <button @click="fn">获取vnode</button>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         
      }   
   },
   methods: {
      fn(){
         // 文档碎片，把所有的操作完成，要追加到真实的DOM里面，可以先把元素放在 document.createDocumentFragment() 里面
         // 再一次追加，这样节省性能
         // 虚拟 DOM 底层使用的就是 document.createDocumentFragment() 
         // document.createDocumentFragment() 
         // this --- vue 代理对象
         console.log(this)
      }
   }
}
</script>

<style>

</style>