<template>
    <div class="app-container">
        <!-- 传送门，可以把它里面的结构传送到其他的位置去 -->
        <!-- 
            <Teleport to="body">
               <Model></Model>
            </Teleport> 
        -->

        <Teleport to=".content">
           <Model></Model>
        </Teleport>
    </div>
</template>

<script>
import Model from './components/Model.vue'
export default {
   name: 'App', 
   components: {Model},
   data(){
      return {
         
      }   
   }
}
</script>

<style>
*{
   margin: 0;
   padding: 0;
}
.app-container{
   width: 600px;
   height: 600px;
   background-color: orange;
   opacity: .5;
}
</style>