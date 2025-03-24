<template>
  <div class="cart">
    <p class="cart-title">cart 组件</p>
    <div class="cart-content">购物车内容区域</div>
  </div>
</template>

<script>


export default {
  name: 'Cart',

  data() {
    return {

    }
  },
}
</script>

<style scoped>
.cart-title {
  background: yellowgreen;
  height: .8rem;
}

.cart-content {
  height: 1000px;
  background-color: skyblue;
}
</style>