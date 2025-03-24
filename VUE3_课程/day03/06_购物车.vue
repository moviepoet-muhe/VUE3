<template>
    <div class="app-container">
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
                    <tr v-if="!product_list.length">
                        <td colspan="6" height="100">
                            <h1>您的购物车空空如也！赶紧去购物车...</h1>
                        </td>
                    </tr>
                    <tr v-for="(item, index) in product_list" :key="item.id" v-else>
                        <td><input type="checkbox" value="" class="select" :checked="item.is_select"
                                @click="selectFn(item.id)"></td>
                        <td>
                            <img :src="item.url">
                            <span style="font-size:14px;">{{ item.title }}</span>
                        </td>
                        <td><span>{{ item.price }}</span></td>
                        <td>
                            <button class="sub" @click="subFn(item.id)" :disabled="item.cart_num === 1">-</button>
                            <input type="text" :value="item.cart_num" class="count">
                            <button class="add" @click="addFn(item.id, item.stock)">+</button>
                        </td>
                        <td><span class="price">{{ item.cart_num * item.price }}元</span></td>
                        <td><span class="del" @click="delFn(index)">删除</span></td>
                    </tr>
                </tbody>
            </table>
            <div class="footer">
                <div class="left">
                    <input type="checkbox" class="allCheck" @click="allSelectFn" :checked="isSelectFn()" />
                    <span class="dlAll" @click="dlAllFn">删除</span>
                </div>
                <div class="rirght">
                    <div class="allNum">已选商品<b class="totalNum">{{ product_list.length }}</b>件</div>
                    <div class="allCount">合计 ￥<b class="money">{{ totalPriceFn() }}</b>元</div>
                    <div class="calc">结算</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    // 生命周期钩子函数：表示当页面中的数据更新后执行
    updated() {
        this.saveStorgeFn()
    },
    data() {
        return {
            product_list: [
                {
                    "id": 1,
                    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "Note 10 Pro",
                    "des": "天玑1100年度旗舰芯，VC液冷散热",
                    "cart_num": 1,
                    "price": 1699,
                    "is_select": false,
                    "stock": 10
                },
                {
                    "id": 2,
                    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "Redmi Note 10 5G",
                    "des": "5G小金刚，旗舰长续航",
                    "cart_num": 1,
                    "price": 1099,
                    "is_select": false,
                    "stock": 6
                },
                {
                    "id": 3,
                    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "小米MIX FOLD",
                    "des": "折叠大屏｜自研芯片",
                    "cart_num": 1,
                    "price": 9999,
                    "is_select": false,
                    "stock": 3
                },
                {
                    "id": 4,
                    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "小米11 Ultra",
                    "des": "1/1.12''GN2｜2K四微曲屏",
                    "cart_num": 1,
                    "price": 5999,
                    "is_select": false,
                    "stock": 20
                },
                {
                    "id": 5,
                    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "小米11 Pro",
                    "des": "1/1.12''GN2｜骁龙888",
                    "cart_num": 1,
                    "price": 4999,
                    "is_select": false,
                    "stock": 8
                },
                {
                    "id": 6,
                    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "小米11 青春版",
                    "des": "小米11 青春版 轻薄",
                    "cart_num": 0,
                    "price": 2999,
                    "is_select": false
                }
            ],
            // product_list2: JSON.parse(localStorage.getItem()) || []
        }
    },
    methods: {
        // 全选
        allSelectFn(event) {
            // 获取自身的状态
            let state = event.target.checked
            // 需要把全选按钮的状态赋值给所有的数据的is_select
            this.product_list.forEach(item => {
                item.is_select = state
            })
        },
        // 单选
        selectFn(id) {
            // 获取当前的商品
            const goods = this.product_list.find(item => item.id === id)
            // 把当前对象的 is_select 进行取反操作
            goods.is_select = !goods.is_select
        },
        // 通过这个函数来控制全选按钮是否选中
        isSelectFn() {
            if (!this.product_list.length) {
                return false
            }
            return this.product_list.every(item => item.is_select)
        },
        // 数量增加
        addFn(id, stock) {
            const goods = this.product_list.find(item => item.id === id)
            if (goods.cart_num === stock) {
                alert(`限购：${stock} 件`)
                return
            }
            goods.cart_num++
        },
        // 数量减少
        subFn(id) {
            const goods = this.product_list.find(item => item.id === id)
            goods.cart_num--
        },
        // 删除
        delFn(index) {
            this.product_list.splice(index, 1)
        },
        // 选中删除
        dlAllFn() {
            this.product_list = this.product_list.filter(item => item.is_select === false)
        },
        // 计算总价
        totalPriceFn() {
            return this.product_list.reduce((sum, item) => {
                if (item.is_select) {
                    sum += item.cart_num * item.price
                }
                return sum
            }, 0)
        },
        saveStorgeFn() {
            console.log('嘿嘿')
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.cartTable {
    width: 930px;
    margin: 50px auto;
}

.cartTable table {
    width: 930px;
    border-collapse: collapse;
    text-align: center;
}

.cartTable thead tr th {
    height: 30px;
    border: 1px solid #a7cbff;
    background-color: #e2f2ff;
}

.cartTable tbody tr td {
    border: 1px solid #a7cbff;
    text-align: center;
}

.cartTable tbody tr td:nth-child(2) {
    width: 300px;
    height: 80px;
}

.cartTable tbody tr td:nth-child(2) img {
    width: 100px;
    height: 80px;
    float: left;
    margin-top: 10px;
    margin-left: 50px;
}

.cartTable tbody tr td:nth-child(2) span {
    width: 100px;
    float: left;
    margin-top: 37px;
    border: none;
}

.cartTable tbody tr td:nth-child(3) {
    width: 100px;
}

.cartTable tbody tr td:nth-child(4) {
    width: 160px;
}

.cartTable tbody tr td:nth-child(4) button {
    width: 20px;
    height: 24px;
    background-color: #E5E5E5;
    float: left;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    border: none;
}

.cartTable tbody tr td:nth-child(4) button:nth-child(1) {
    margin-left: 35px;
}

.cartTable tbody tr td:nth-child(4) input {
    width: 50px;
    height: 20px;
    float: left;
    text-align: center;
}

.cartTable tbody tr td:nth-child(5) span {
    color: red;
    font-weight: 900;
}

.cartTable tbody tr td:nth-child(6) span {
    cursor: pointer;
}

.footer {
    width: 100%;
    height: 50px;
    background-color: #E5E5E5;
    margin-top: 10px;
}

.footer .left {
    width: 200px;
    height: 100%;
    float: left;
    line-height: 50px;
}

.footer .left input {
    margin: 10px 50px;
}

.footer .left span {
    color: red;
    cursor: pointer;
}

.footer .rirght {
    width: 400px;
    height: 100%;
    float: right;
}

.footer .rirght .allNum {
    width: 130px;
    height: 100%;
    float: left;
    line-height: 50px;
    text-align: center;
}

.footer .rirght .allNum b {
    color: red;
}

.footer .rirght .allCount {
    width: 133px;
    height: 50px;
    float: left;
    line-height: 50px;
    text-align: center;
}

.footer .rirght .count b {
    color: red;
}

.footer .rirght .calc {
    width: 115px;
    height: 50px;
    background-color: #A7CBFF;
    float: right;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
</style>