<template>
    <div class="app-container">
         <h3>事件修饰符</h3>
         <!-- stop 阻止冒泡 -->
         <div class="grandpa" @click="grandpaFn">
            grandpa
            <!-- v-on:stop="fatherFn" -->
            <!-- 
               <div class="father" @click.stop="fatherFn">
                     father
                     <div class="son" @click="sonFn">son</div>
               </div> 
            -->
            <!-- self 会把自身给跳过，stop 后续不再执行 -->
            <div class="father" @click.self="fatherFn">
                  father
                  <div class="son" @click="sonFn">son</div>
            </div>
         </div>
    </div>
    <hr/>
    <!-- prevent 阻止默认事件 -->
    <a href="https://www.4399.com" @click.prevent>4399小游戏</a>
    <hr/>
    <!-- keyup 当键盘按下时就触发事件 -->
    <!-- <input type="text" @keyup="fn"> -->
    <!-- keyup.enter 组合键，当键盘按下 enter 键时才触发 -->
    <!-- <input type="text" @keyup.enter="fn"> -->
    <!-- <input type="text" @keyup.delete="fn"> -->
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
      }   
   },
   methods: {
      grandpaFn(){
         alert('grandpa')
      },
      fatherFn(){
         alert('father')
      },
      sonFn(){
         alert('son')
      },
      fn(event){
         console.log(event.target.value)
      }
   }
}
</script>

<style>
.grandpa{
   width: 500px;
   height: 500px;
   background-color: hotpink;
}
.father{
   width: 300px;
   height: 300px;
   background-color: yellow;
}
.son{
   width: 150px;
   height: 150px;
   background-color: skyblue;
}
</style>