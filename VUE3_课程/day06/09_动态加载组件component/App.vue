<template>
    <div class="app-container">
        <div class="tab">
           <div class="btn">
              <span @click="loadCom='ComA'">组件1</span>
              <span @click="loadCom='ComB'">组件2</span>
              <span @click="loadCom='ComC'">组件3</span>
           </div>
           <div class="content">
              <!-- 动态加载组件 -->
              <component :is="loadCom"></component>
           </div>
        </div>
    </div>
</template>

<script>
import ComA from './components/ComA.vue'
import ComB from './components/ComB.vue'
import ComC from './components/ComC.vue'
export default {
   name: 'App', 
   components: {ComA, ComB, ComC},
   data(){
      return {
         loadCom: 'ComA'
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>
.tab{
   width: 500px;
   min-height: 300px;
   background-color: skyblue;
   margin: 50px auto;
}
.tab .btn{
  display: flex;
  height: 40px;
  align-items: center;
  background-color: gold;
  cursor: pointer;
}
.tab .btn span{
   width: 33%;
   text-align: center;
}
</style>