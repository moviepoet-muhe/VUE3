<template>
  <div class="category">
    <h2>category 组件</h2>
    <div class="content">分类内容区域</div>
  </div>
</template>

<script>
export default {
  name: 'Category',

  beforeRouteLeave(to, from) {
    alert('即将离开分类')
  },

  beforeRouteEnter(to, from) {
    alert('即将更新分类')
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 1000px;
  background-color: hotpink;
}
</style>
