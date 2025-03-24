<template>
    <div class="app-container">
       <button @click="show =! show">显示隐藏</button>
       <Transition>
          <p v-if="show">hello，我是动画</p>
       </Transition>
       <TransitionGroup>
         <p v-if="show">hello，我是动画</p>
         <p v-if="show">hello，我是动画</p>
       </TransitionGroup>
    </div>
</template>

<script>
export default {
   name: 'App',
   components: {},
   data(){
      return {
         show: false,
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>
/* 没有设置name之前的，默认类名 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 设置了name后的类名 */
.zt-enter-active,
.zt-leave-active {
  transition: opacity 0.5s ease;
}

.zt-enter-from,
.zt-leave-to {
  opacity: 0;
}
</style>