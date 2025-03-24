<template>
  <div class="home">
    <div class="home-header">头部区域</div>
    <div class="content">home 组件

      <Count />
    </div>


  </div>
</template>

<script>
import Count from '@/components/count.vue'
export default {
  name: 'Home',
  components: {
    Count
  },

}
</script>

<style scoped>
.home-header {
  width: 10rem;
  height: 1.3333rem;
  background-color: #ff5454;
  position: fixed;
  top: 0;
}

.content {
  width: 100%;
  height: 1000px;
  background-color: gold;
  margin-top: 1.3333rem;
}

.content :deep(button) {
  background-color: aqua;
}
</style>
