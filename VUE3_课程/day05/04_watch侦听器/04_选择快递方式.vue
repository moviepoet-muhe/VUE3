<template>
   <div class="app-container">
      <h1>计算不同送货方式的费用</h1>
      <select v-model="deliveryMethod">
         <option value="youzheng">邮政</option>
         <option value="shunfeng">顺丰</option>
         <option value="yunda">韵达</option>
      </select>
      <p>总价：{{ price }}</p>
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         deliveryMethod: 'youzheng',
         price: 0
      }
   },
   watch: {
      deliveryMethod: {
         handler(value) {
            this.totalPrice(value)
         },
         immediate: true
      }
   },
   methods: {
      totalPrice(value) {
         if (value === 'youzheng') {
            this.price = 10
         }
         if (value === 'shunfeng') {
            this.price = 15
         }
         if (value === 'yunda') {
            this.price = 13
         }
      }
   }
}
</script>

<style scoped></style>