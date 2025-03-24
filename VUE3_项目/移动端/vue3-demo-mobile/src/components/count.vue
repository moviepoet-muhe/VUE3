<template>
  <div class="count">
    <button>-</button>
    <span>{{ num }}</span>
    <button>+</button>
  </div>
</template>

<script>
export default {
  name: 'Count'
}
</script>

<style scoped>
.count button {
  width: 1.3333rem;
  height: 1.3333rem;
  background-color: wheat;
}

.count span {
  display: inline-block;
  width: 1.3333rem;
  height: 1.3333rem;
  background-color: hotpink;
}
</style>
