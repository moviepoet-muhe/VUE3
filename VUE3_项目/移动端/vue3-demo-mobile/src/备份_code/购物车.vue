<template>
  <!-- 应用主容器 -->
  <div class="app-container">
    <!-- 购物车表格容器 -->
    <div class="cartTable">
      <table>
        <thead>
          <tr>
            <th>全选</th>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 当购物车为空时显示提示信息 -->
          <tr v-if="!goodsList.length">
            <td>
              <h1>您的购物车空空如也！赶紧去购物车...</h1>
            </td>
          </tr>
          <!-- 遍历商品列表，渲染每个商品项 -->
          <tr v-else v-for="(item, index) in goodsList" :key="item.id">
            <!-- 商品选择框 -->
            <td>
              <!-- :checked="item.state" 动态绑定商品单选框状态 -->
              <!-- @click="isSelect(item.id) 单选框点击事件为商品的选中状态赋值 -->
              <input type="checkbox" class="select" :checked="item.state" @click="isSelect(item.id)">
            </td>

            <td>
              <!-- 商品图片，绑定商品图片URL -->
              <img :src="item.url">
              <!-- 商品标题，显示商品名称 -->
              <span>{{ item.title }}</span>
            </td>
            <!-- 商品单价 -->
            <td><span>{{ item.price }}</span></td>
            <td>
              <!-- 减少数量按钮，当数量为1时禁用减少按钮 -->
              <!--@click="subNum(item.id)" 减少按钮点击事件  -->
              <button class=" sub" :disabled="item.num === 1" @click="subNum(item.id)">-</button>
              <!-- 双向绑定每种商品的数量 -->
              <input type="text" class="count" v-model.number="item.num" @input="limitInventory(item)">
              <!-- 增加数量按钮，点击增加商品数量 -->
              <button class="add" @click="addNum(item.id)">+</button>
            </td>
            <!-- 计算并显示商品小计（数量*单价） -->
            <td><span class="price"> {{ item.num * item.price }} 元</span></td>
            <!-- 根据商品在商品列表的索引来删除选中的商品 -->
            <td><span class="del" @click="delGood(index)">删除</span></td>
          </tr>
        </tbody>
      </table>
      <!-- 底部操作区域 -->
      <div class="footer">
        <div class="left">
          <!-- 全选框  :checked="allChecked() 根据每种商品的选中状态来为全选框赋值-->
          <!-- @click="isAllChecked" 通过点击全选框来为每种商品状态来赋值 -->
          <input type="checkbox" class="allCheck" :checked="allChecked()" @click="isAllChecked" />
          <!-- 一次性通过全选按钮删除单选框为选中的商品 -->
          <span class="dlAll" @click="delGoods">删除</span>
        </div>
        <div class="rirght">
          <!-- 已选商品数量 -->
          <div class="allNum">已选商品<b class="totalNum">{{ totalNum() }}件</b></div>
          <!-- 总金额 -->
          <div class="allCount">合计<b class="money">￥{{ totalPrice() }}元</b></div>
          <!-- 结算按钮 -->
          <div class="calc">结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      // 商品列表，每个商品包含 id、图片链接、标题、描述、购物车数量、价格、是否选中、库存等信息
      goodsList: [
        {
          "id": 1,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "Note 10 Pro",
          "des": "天玑1100年度旗舰芯，VC液冷散热",
          "num": 1,
          "price": 1699,
          "state": false,
          "inventory": 10
        },
        {
          "id": 2,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "Redmi Note 10 5G",
          "des": "5G小金刚，旗舰长续航",
          "num": 1,
          "price": 1099,
          "state": false,
          "inventory": 6
        },
        {
          "id": 3,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米MIX FOLD",
          "des": "折叠大屏｜自研芯片",
          "num": 1,
          "price": 9999,
          "state": false,
          "inventory": 3
        },
        {
          "id": 4,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米11 Ultra",
          "des": "1/1.12''GN2｜2K四微曲屏",
          "num": 1,
          "price": 5999,
          "state": false,
          "inventory": 20
        },
        {
          "id": 5,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米11 Pro",
          "des": "1/1.12''GN2｜骁龙888",
          "num": 1,
          "price": 4999,
          "state": false,
          "inventory": 8
        },
        {
          "id": 6,
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=200&h=200&f=webp&q=90",
          "title": "小米11 青春版",
          "des": "小米11 青春版 轻薄",
          "num": 1,
          "price": 2999,
          "state": false,
          "inventory": 8
        }
      ],
    }
  },
  methods: {

    // 单选框 
    isSelect(id) {
      // 根据商品ID来获取当前商品
      const good = this.goodsList.find(item => item.id === id)
      // 根据单选框来为商品选中状态赋值
      good.state = !good.state
    },

    // 点击减少按钮来减少商品数量
    subNum(id) {
      // 根据商品ID来获取当前商品
      const good = this.goodsList.find(item => item.id === id)
      good.num--
    },

    // 点击增加按钮来增加商品数量
    addNum(id) {
      // 根据商品ID来获取当前商品
      const good = this.goodsList.find(item => item.id === id)
      // 判断数量与库存
      if (good.num >= good.inventory) {
        alert('库存上限')
        return
      }
      good.num++
    },

    // 限制每种商品手动输入的数量
    limitInventory(item) {
      if (item.num < 1) {
        item.num = 1; // 最小值限制
        alert('最小数量为1件')
      } else if (item.num > item.inventory) {
        item.num = item.inventory;
        alert(`库存上限为${item.inventory}件`)
      }
    },

    // 单种商品自身删除
    delGood(index) {
      this.goodsList.splice(index, 1)
    },

    // 根据每种商品的选中状态来赋值复选框状态
    allChecked() {
      if (!this.goodsList.length) {
        return false
      }
      return this.goodsList.every(item => item.state)
    },

    // 根据点击全选框来给每种商品状态赋值
    isAllChecked(e) {
      let _state = e.target.checked
      this.goodsList.forEach(item => item.state = _state)
    },

    // 一次性通过全选按钮删除单选框为选中的商品
    delGoods() {
      this.goodsList = this.goodsList.filter(item => !item.state)
    },

    // 选择的商品总件数
    totalNum() {
      return this.goodsList.filter(item => item.state).length;
    },

    // 计算商品总价格
    totalPrice() {
      // 遍历商品列表，累加选中商品的价格乘以数量
      return this.goodsList.reduce((sum, item) => {
        if (item.state) {
          sum += item.num * item.price
        }
        return sum
      }, 0)
    }

  }

}


</script>

<style>
@import'./assets/styles/cart.css';
</style>