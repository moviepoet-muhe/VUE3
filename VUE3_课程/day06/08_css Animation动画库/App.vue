<template>
    <div class="app-container">
       <button @click="type='animate__backInLeft'">执行动画1</button>
       <button @click="type='animate__fadeInDownBig'">执行动画2</button>
       <button @click="type='animate__lightSpeedInRight'">执行动画3</button>
       <!-- animate__animated 这个名称是必须的，就类似于咱们之前使用 iconfont 字体图标一样 -->
       <div :class="['box', 'animate__animated', type]"></div>
    </div>
</template>

<script>
export default {
   name: 'App', 
   components: {},
   data(){
      return {
         type: 'animate__lightSpeedInRight'
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: skyblue;
  margin: 100px auto;
}
</style>