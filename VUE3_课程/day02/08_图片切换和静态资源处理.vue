<template>
    <div class="app-container">
       <img :src="imgList[index]" alt="" width="100">
       <!-- <img src="./assets/26.jpg" alt="" width="100"> -->
       <hr/>
       <!-- 
         <button @click="index--">previous</button>
         <button @click="index++">next</button> 
       -->
       <button @click="previousFn">previous</button>
       <button @click="nextFn">next</button>
    </div>
</template>

<script>
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
export default {
   name: 'App',
   /*
      assets 文件夹里面放问题
      + public 目录里面的图片不会被 vite 所处理，会直接平移过去
      + assets 目录里面的图片会被 vite 工具所处理，为了保证图片的唯一性，会给图片地址后面默认添加 hash 值，再一个 assets 也不会再处理后的目录里面出现，
      有可能会被改成其他的名称，因此直接引入 assets 里面的图片路径在模板里面渲染的时候，不会显示图片
      + assets 目录里面的图片在 template 模板里面可以正常的显示，因为 vite 处理的规则不一样，可以正常显示
   */
   data(){
      return {
         imgList: [
            new URL('./assets/26.jpg', import.meta.url).href, 
            new URL('./assets/27.jpg', import.meta.url).href, 
            new URL('./assets/28.jpg', import.meta.url).href, 
            new URL('./assets/29.jpg', import.meta.url).href, 
         ],
         index: 0
      }   
   },
   methods: {
      nextFn(){
         this.index++
         // this.imgList.length = 4 - 1 = 3
         // 3 === 3 满足
         if(this.index === this.imgList.length){
            this.index = 0
         }
      },
      previousFn(){
         if(this.index === 0){
            this.index = this.imgList.length
         }
         this.index--
      }
   }
}
</script>

<style>

</style>