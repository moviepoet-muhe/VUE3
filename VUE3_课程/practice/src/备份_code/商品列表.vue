<template>

  <div>

    <!-- 商品列表 -->
    <ul>
      <!-- 使用 v-for 指令遍历 product_list 数组，为每个商品生成一个列表项 -->
      <li v-for="(item, index) in product_list" :key="item.id">
        <!-- 商品图片容器 -->
        <div class="pic">
          <!-- 动态绑定图片的 src 属性 -->
          <img :src="item.url">
        </div>
        <!-- 商品标题 -->
        <p class="title">{{ item.title }}</p>
        <!-- 商品描述 -->
        <p class="des">{{ item.des }}</p>
        <!-- 商品价格 -->
        <p class="price">{{ item.price }} 元</p>
        <!-- 商品数量 -->
        <p class="price">{{ item.cart_num }} 件</p>
        <!-- 加入购物车按钮，点击时调用 addToCart 方法 -->
        <button @click="addToCart(item)">加入购物车</button>
      </li>
    </ul>
    <!-- 跳转到购物车页面的链接 -->
    <router-link to="/Cart">
      <!-- 显示购物车中商品的总数 -->
      <div class="count">
        商品共<span>{{ cartCount }}</span>件
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 商品列表数组，每个商品对象包含 id、图片链接、标题、描述、购物车数量、价格、是否选中状态和库存数量
      product_list: [
        {
          "id": 1,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "Note 10 Pro",
          "des": "天玑1100年度旗舰芯，VC液冷散热",
          "cart_num": 0,
          "price": 1699,
          "is_select": false,
          "stock": 10
        },
        {
          "id": 2,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "Redmi Note 10 5G",
          "des": "5G小金刚，旗舰长续航",
          "cart_num": 0,
          "price": 1099,
          "is_select": false,
          "stock": 8
        },
        {
          "id": 3,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米MIX FOLD",
          "des": "折叠大屏｜自研芯片",
          "cart_num": 0,
          "price": 9999,
          "is_select": false,
          "stock": 11
        },
        {
          "id": 4,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米11 Ultra",
          "des": "1/1.12''GN2｜2K四微曲屏",
          "cart_num": 0,
          "price": 5999,
          "is_select": false,
          "stock": 14
        },
        {
          "id": 5,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米11 Pro",
          "des": "1/1.12''GN2｜骁龙888",
          "cart_num": 0,
          "price": 4999,
          "is_select": false,
          "stock": 10
        },
        {
          "id": 6,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米11 青春版",
          "des": "小米11 青春版 轻薄",
          "cart_num": 0,
          "price": 2999,
          "is_select": false,
          "stock": 12
        }
      ],
      // 购物车中商品的总数
      cartCount: 0
    };
  },
  // 组件挂载完成后的钩子函数
  mounted() {
    // 调用 totalNum 方法计算购物车中商品的总数 this 指的就是当前组件的实例
    this.totalNum();
  },
  methods: {
    // 将商品添加到购物车
    addToCart(item) {
      // 从 localStorage 中获取购物车数据，如果不存在则初始化为空数组
      let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
      // 检查购物车中是否已经存在该商品
      let existingItem = cartData.find(cartItem => cartItem.id === item.id);

      // 如果商品已存在于购物车中
      if (existingItem) {
        // 如果添加后数量超过库存
        if (existingItem.cart_num + 1 > item.stock) {
          alert(`该商品库存不足，最多只能添加 ${item.stock} 件到购物车。`);
          existingItem.cart_num = item.stock;
        } else {
          // 如果添加后数量未超过库存
          existingItem.cart_num++;
        }

        // 更新 product_list 中的商品数量
        let product = this.product_list.find(p => p.id === item.id);
        if (product) {
          product.cart_num = existingItem.cart_num;
        }

      } else {
        // 如果商品不存在于购物车中
        if (item.stock < 1) {
          // 如果添加数量超过库存
          alert(`该商品库存不足，最多只能添加 ${item.stock} 件到购物车。`);
          item.cart_num = item.stock;
        } else {
          // 如果添加数量未超过库存
          item.cart_num = 1;
        }
        cartData.push(item);
      }

      // 将更新后的购物车数据存储到 localStorage 中
      localStorage.setItem('cartData', JSON.stringify(cartData));
      // 调用 totalNum 方法更新购物车中商品的总数
      this.totalNum();
    },

    // 计算购物车中商品的总数
    totalNum() {
      // 从 localStorage 中获取购物车数据，如果不存在则初始化为空数组
      let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
      // 初始化商品总数为 0
      let num = 0;
      // 遍历购物车列表，累加每个商品的购物车数量
      cartData.forEach(item => {
        num += item.cart_num;
      });
      // 更新组件的 cartCount 数据
      this.cartCount = num;
    },
  }
}
</script>

<style scoped>
/* 引入外部样式文件 */
@import './assets/styles/list.css';
</style>