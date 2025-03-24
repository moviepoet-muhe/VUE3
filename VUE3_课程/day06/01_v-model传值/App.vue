<template>
    <div class="app-container">
        <!--
           v-model
           + 双向数据绑定
           + 实现原理
             => 动态数据绑定 :value
             => 使用 @input 事件 或者 @change
           + 使用范畴
             => 可以给表单使用
             => 可以给自定义组件使用
           + 注意点
             => v-model 给自定义组件使用，可以实现组件通信
        -->
        <!-- <SelectCity v-model="cityId"/> -->
        <!-- <SelectCity v-model:modelValue="cityId"/> -->
        <SelectCity v-model:wj="cityId"/>
    </div>
</template>

<script>
import SelectCity from './components/SelectCity.vue'
export default {
   name: 'App',
   components: {SelectCity},
   data(){
      return {
         cityId: '001'
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>

</style>