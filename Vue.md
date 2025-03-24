# 一、初识 Vue

## 1、初识 Vue 及基础指令

### 01 - Vue 概述

作者：尤雨溪.  官网：https://cn.vuejs.org

Vue.js 是一套构建用户界面的**渐进式**框架，采用**自底向上**增量开发的设计。

- 渐进式：一步一步，不是说你必须一次把所有的东西都用上


- 自底向上设计：是一种设计程序的过程和方法，就是先编写出基础程序段，然后再逐步扩大规模、补充和升级某些功能，实际上是一种自底向上构造程序的过程。

  Vue 从设计角度来讲，虽然能够涵下图所有的东西，但是你并不需要一上手就把所有东西全用上，都是可选的。**声明式渲染和组件系统 是 Vue 的核心库所包含内容**，而路由、状态管理、构建工具都有专门解决方案。这些解决方案相互独立，我们可以在核心的基础上任意选用其他的部件，不一定要全部整合在一起。

- Vue 仍然是国内最火的框架之一

`"声明式渲染"`是指在 Vue 中，你不是通过一系列命令来告诉程序如何改变DOM（文档对象模型），而是简单地声明你的UI应该如何根据底层数据的状态来展现。Vue 会负责以高效的方式自动更新DOM。



### 02 - 传统 DOM 与 Vue 实现对比

使用 Vue 可以使用 CDN 加载模式，开发的时候使用 https://unpkg.com/vue@3/dist/vue.global.js 。

**CDN**英文全称 Content Delivery Network

中文翻译即为**内容分发网络**。它是建立并覆盖在承载网之上，由分布在不同区域的边缘节点服务器群组成的分布式网络。

CDN应用广泛，支持多种行业、多种场景内容加速，例如：图片小文件、大文件下载、视音频点播、直播流媒体、全站加速、安全加速。



例子：使用 原生 js、jQuery、Vue 三种方式 渲染数据到页面上

```html
<body>
    <div id="app">
        <div id="msg">{{ msg }}</div>
        <div v-text="msg"></div>
    </div>
</body>
</html>
<!-- 导包 -->
<script src="./lib/jquery.min.js"></script>
<!-- 导包，导入的是 Vue 包 -->
<script src="./lib/vue.js"></script>
<script>
// 使用原生 js 实现 你好中国
// document.getElementById("msg").innerHTML = "你好中国！"
    
// 使用 jQuery 来实现
// $("#app").html("你好，中国！")
    
// 使用 vue 实现  
const { createApp } = Vue
const app = createApp({
  data() {
    return {
      message: '你好，中国！'
    }
  }
})
app.mount('#app')
</script>
```



```html
<body>
    <!-- 呈现数据的容器：最终的网页结构都是放在app里面的，app表示的是application（应用程序） -->
    <div id="app">
        <!-- 胡子语法，类似于模板字符串，它里面放的是一个表达式 -->
        <!-- <button @click="name='666'">改变内容</button> -->
        <button @click="change">改变内容</button>
        {{ name }}
    </div>
 
    <script src="./libs/vue.global.js"></script>
    <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
    <script>
        // 从引入的vue文件里面解构出一个createApp的函数，这个函数就可以帮助咱们创建一个vue的应用
        const { createApp } = Vue
        // 创建vue应用（所有的操作都是基于createApp这个函数），传入的{}表示的是配置项
        const app = createApp({
            // data选项，专门用来放数据地方，data里面的数据是响应式的，数据改变了，那么视图会跟着改变
            data(){
                return {
                    name: '王江'
                }
            },
            // methods选项，专门管理方法的地方
            methods: {
                change(){
                    this.name = '张三'
                }
            }

        }).mount('#app') // mount 挂载，表示把应用程序和app容器关联起来
    </script>
</body>
```





### 03 - 创建Vue3工程

#### 基于 vue-cli 创建（webpack）

点击查看[官方文档](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

> 备注：目前`vue-cli`已处于维护模式，官方推荐基于 `Vite` 创建项目。

```shell
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version

## 安装或者升级你的@vue/cli 
npm install -g @vue/cli

## 执行创建命令
vue create vue_test

##  随后选择3.x
##  Choose a version of Vue.js that you want to start the project with (Use arrow keys)
##  > 3.x
##    2.x

## 启动
cd vue_test
npm run serve
```

#### 基于 vite 创建 (推荐)

`vite` 是新一代前端构建工具，官网地址：[https://vitejs.cn](https://vitejs.cn/)，`vite`的优势如下：

- 轻量快速的热重载（`HMR`），能实现极速的服务启动。
- 对 `TypeScript`、`JSX`、`CSS` 等支持开箱即用。
- 真正的按需编译，不再等待整个应用编译完成。

* 具体操作如下（点击查看[官方文档](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)）

```shell
## 1.创建命令
npm create vue@latest
## 2.具体配置
## 配置项目名称
√ Project name: vue3_test
## 是否添加TypeScript支持
√ Add TypeScript?  Yes
## 是否添加JSX支持
√ Add JSX Support?  No
## 是否添加路由环境
√ Add Vue Router for Single Page Application development?  No
## 是否添加pinia环境
√ Add Pinia for state management?  No
## 是否添加单元测试
√ Add Vitest for Unit Testing?  No
## 是否添加端到端测试方案
√ Add an End-to-End Testing Solution? » No
## 是否添加ESLint语法检查
√ Add ESLint for code quality?  Yes
## 是否添加Prettiert代码格式化
√ Add Prettier for code formatting?  No
```

#### 工程化项目开发

```js
/*
工程化项目开发
+ 如果把vue文件引入到页面，再使用vue相关的指令和提供的方法也可以开发，但是不便捷，项目的后期的维护和打包压缩非常的不方便
+ 有人提出工程化开发的思想
+ 工程化开发利于npm包管理器机制配合前端自动化构建工具，一起快速便捷的构建一个项目出来
+ 工程化开发里面会把开发的项目目录创建好，并且可以让项目开发更为标准化
+ 工程化开发里面构建工具会自带服务器插件和其他的配置选项，完全使用模块化的思维进行编程
+ 项目的启动和包的管理都可以直接通过命令方式来处理

创建vue项目
+ pnpm create vue@latest  latest 表示最新的
+ 执行了 `pnpm create vue@latest` 会自动进行项目的初始化，不需要再手动执行 `npm init -y` 命令
+ `pnpm create vue@latest` 执行这个命名，默认使用的构建项目的工具是 vite

vue工程化项目目录和文件解释
+ config 配置文件
+ plugin 插件
+ .gitignore 多人项目开发时，需要每天把代码任务完成后，需要上传到公共的代码仓库里面，这个文件表示项目里面那些文件是不需要上传到这个代码仓库的,是一个忽略文件
+ README.md 项目说明书，项目如何下载依赖、怎么启动、使用什么命令进行打包等等
+ .vscode vscode 配置文件目录，它里面放的的文件是关联着咱们的vue插件的
+ public 公共的静态文件夹，它里面可以放状态栏图标、项目的图片、放第三方引入的文件（它里面的文件在vite工具打包压缩代码的时候不会进行处理，而是直接平移到dist目录里面）
+ src目录，源文件目录，就是咱们开发时操作的目录
  => assets目录，和public目录作用是一样的，只不过打包压缩的时候，会被vite工具处理
  => components目录，是放公共组件的地方
+ App.vue 根组件，最大的组件，其他的组件最终都会加载到这个组件里面，vite工具一次处理到index.html页面
+ pnpm dev 表示启动项目，项目启动后，会自动生成一个服务器地址，直接打开这个地址就可以看到咱们的项目

component组件
+ 组件是一种代码的扩展，vue中的组件扩展了html、css、js，组件把html、css、js进行整合，可以在组件里面写各种逻辑和业务代码
+ 可以在组件里面同时进行页面的开发
+ 后缀名为.vue的文件其实就是一个组件
+ 后缀名为.vue文件的组件，只能在工程化项目里面运行。不能单独拿出来，直接通过浏览器打开，必须通过vite构建工具的处理，浏览器才能识别代码
+ 后缀名为.vue文件也可以称之为单文件组件
+ 组件组成
  => template 标记，模板，里面专门放html结构代码的
  => script 标记，行为，里面专门放逻辑代码的（可以是js、也可以是ts）
  => style 标记，样式，里面专门放css代码的

常见的DOS命名操作
+ cd 表示进入某个目录
+ cd .. 表示返回上一级
+ clear 表示清屏（cls window）
*/
```

main.js

```js
// 解构出 createApp 函数，用于创建应用程序（application）
import { createApp } from 'vue'

// 把根组件导入到入口文件里面
import App from './App.vue'

// 把 App 根组件传递给 createApp 函数作为配置项
const app = createApp(App)

// 把应用程序和 index.html 页面里面的容器进行关联（挂载）
app.mount('#app')
```



#### 自己动手编写一个App组件

```vue
<template>
  <div class="app">
    <h1>你好啊！</h1>
  </div>
</template>

<script lang="ts">
  export default {
    name:'App' //组件名
  }
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>
```

#### 一个简单的效果

`Vue3`向下兼容`Vue2`语法，且`Vue3`中的模板中可以没有根标签

```vue
<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'App',
    data() {
      return {
        name:'张三',
        age:18,
        tel:'13888888888'
      }
    },
    methods:{
      changeName(){
        this.name = 'zhang-san'
      },
      changeAge(){
        this.age += 1
      },
      showTel(){
        alert(this.tel)
      }
    },
  }
</script>
```



### 04 - JS 表达式

**JS 表达式概念**

- JS 表达式概念：JS 语句，返回一个值

- `{{num+1}}`    基础运算是表达式
- ` {{isRed?'red':''}}  ` 三元运算符是表达式
-   ` {{ const PI=3.141592653}}`   const 是声明语句，不是表达式
-  `{ { if }} `、`{{ for }}` 是逻辑语句，不是表达式，不能直接使用
- `{{ arr.map( itrm => item) }}` map 是表达式，因为 map 会返回一个新的数组

**在 Vue 的胡子语法（moustache）中，可以使用 插值 表达式**

> 胡子语法里面只能写表达式，不推荐做比较复杂的操作。有些操作虽然不报错，有可能显示的结果跟你预期的不一样。

```vue
<template>
    <div class="app-container">
        <h1>胡子语法</h1>
        <button @click="a++">+</button>
        {{ a }}
        <hr/>
        {{ num > 10 ? '大于' : '小于'  }}
        <hr/>
        {{ x = 20}}
        <hr/>
        {{ list.filter((item)=> item>=30) }}
        <hr/>
        {{ getSum() }}
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         a: 1,
         num: 20,
         list: [10, 20, 30]
      }
   },
   methods: {
      getSum(){
         return this.list.reduce((sum, item)=> sum += item, 0)
      }
   }
}
</script>
```



### 05 - Vue 指令

Vue 指令  Directives 是带有 `v-` 前缀的标记性属性标签，交给 Vue 解析其特有的规则。

Vue 指令分为内置指令和自定义指令，大多数情况下咱们都是使用的内置指令。

Vue 指令简单来讲，就是 Vue 提供给 HTML 标签新增的自定义属性，代表一定的 Vue 语法意义。

用法和  HTML 属性一样，一定要注意自定义指令后引号内部的是 JS 表达式，会被当做 JS 来进行解析。



#### v-text

插入文本内容

- v-text 把值作为**文本插入**到所在的标签之间
- Vue 内部是 textContent 实现的
- 会覆盖掉标签之间的文本
- 简写 `{{}}`
- 不能解析html



#### v-html 

插入标签内容

v-html 是把值作为html插入到所在的标签之间，内部实现是 innerHTML，会覆盖标签之间的 html。



#### v-bind

动态绑定属性

- v-bind 指令，绑定属性，可以动态绑定 HTML 标签的属性
- v-bind 指令的使用` v-bind:属性名="js表达式"`
- `v-bind: src=“imgUrl”`， src 属性绑定到 imgUrl,  改变 imgUrl，会动态改变 src 的值
- v-bind：可以简写为 ` :属性名＝"js表达式"`　当然推荐简写
- `ｖ-bind:class` 动态改变 className 进而改变样式
- - 三元运算切换样式
  - 对象语法 `{类名：是否添加样式}`
  - 可以直接绑定数组多个 className
- `v-bind:style="js对象"`动态直接改变样式
- 对象的key如果是中划线边连接，建议用字符串或者驼峰 `"background-color"` `backgroundColor`





#### v-on

快速绑定事件

- `v-on:事件名="事件处理方法"`
- 事件处理方法声明在 methods 对象里边，methods 和 el、data 并列
- 简写 `@事件名="事件处理方法" `
- 事件名和原生的事件名一致，可以是 `dblclick,click,mouseover,keyup,keyenter.... `
- 事件处理方法的默认参数是 `event对象`
- 方法传参和原来 HTML 注册事件方法没什么分别

```vue
<template>
    <div class="app-container">

         <p>胡子语法：{{ str1 }}</p>
         <p>胡子语法：{{ str2 }}</p>
         
         <!-- v-text 和 v-html 指令本质上就是 js 里面的 innerText 和 innerHTML -->
         <p v-text="str1"></p>
         <p v-text="str2"></p>
         <p v-html="str2"></p>

         <!-- v-on 绑定事件，简写 @  -->
         <!-- 注意点：函数的调用可以加括号，也可以不加括号。如果需要传递参数，那么就需要添加括号 -->
         <button v-on:click="fn1(10)">王江绑定事件1</button>
         <button @click="fn2()">王江绑定事件2</button>

         <hr/>

         <button @click="add1(1)">数量的增加1</button>
         <button @click="add2(2)">数量的增加2</button>
         <h3>{{ num }}</h3>

         <hr/>

         <!-- v-bind 动态绑定属性，简写 : 例如：:class。当进行动态绑定属性后，属性值里面可以解析变量  -->
         <img v-bind:src="url" alt="" width="200"> 
         <img :src="url" alt="" width="200">

         <div class="box base">哈哈</div>
         <div :class="['box', 'base']">哈哈</div>
         <div :class="{box: 'box'}">哈哈</div>
         <button @click="show = !show">显示样式</button>
         <div :class="{box2: true, base: show}">哈哈</div>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         str1: '王江喜欢 vue.js !',
         str2: '<span>指令看看区别 !</span>',
         num: 0,
         url: 'https://img2.baidu.com/it/u=2542207923,825788580&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1740675600&t=026a3e7e7aea65624107ee57df39e820',
         show: false
      }
   },
   methods: {
      fn1(a){
         alert('你好'+ a)
      },
      fn2(){
         alert('你好2')
      },
      add1(a){
         this.num += a
      },
      add2(b){
         this.num += b
      }
   }
}
</script>
```



#### v-if

**作用：**根据表达式的布尔值(true/false)进行判断是否渲染该元素

- v-if

- v-else

- v-else-if

上述三个指令是分支中最常见的。根据需求，v-if可以单独使用，也可以配合v-else一起使

用，也可以配合v-else-if和v-else一起使用。



#### v-show

v-show是根据表达式之真假值，切换元素的 display CSS属性。

```vue
<template>
    <div class="app-container">
      <!-- v-if 其实就是 js 里面的选择结构 -->
      
         <div v-if="!cart.length">您的购物车空空如也！赶紧去购物吧...</div>
         <div v-else>
            购物车内容
         </div> 
     
      
         <p v-if="score>=90">优秀</p>
         <p v-else-if="score>=80">你也不错</p>
         <p v-else-if="score>=70">继续保持</p>
         <p v-else-if="score>=60">恭喜及格了</p>
         <p v-else>不及格</p> 
     
      
         <button @click="show = !show">显示/隐藏</button>
         <div class="box" v-if="show"></div> 
     
      <!-- v-show是根据表达式之真假值，切换元素的 display CSS属性 -->
      
         <button @click="show = !show">显示/隐藏</button>
         <div class="box" v-show="show"></div> 
      
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         cart: [{a: 1}, {b: 2}],
         score: 80,
         show: false
      }   
   },
   methods: {
      
   }
}
</script>
```



**v-if与v-show的区别**

v-if：控制元素是否渲染。不频繁切换，页面初始化loading加载、广告的展示等等。

v-show：控制元素是否显示（已经渲染，display:none;），比较适合频繁切换的显示状态。例如：表格数据，数据行展开/折叠，表单验证、下拉菜单。



####  event 事件对象

事件对象，获取当前事件对象参数，默认事件参数是 event 对象。

方法传参和原来 HTML 注册事件方法没什么分别。

```vue
<template>
    <div class="app-container">
         <h3>event 事件对象</h3>
         <hr/>
         <!-- 
            event
            + 如果调用函数的时候不传递参数，不加括号。可以在函数形参里面传入 event 可以拿到事件对象 
            + 如果遇到函数需要传递参数，又要使用事件对象 event，那么需要在函数调用的第一个参数哪里传入 $event
         -->
         <button @click="fn">哈哈</button>
         <button @click="fn2($event, 10)">嘿嘿</button>

         <div class="box" @click="fn3">
            <span>span标记</span>
            <button>按钮</button>
         </div>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
      }   
   },
   methods: {
      fn(event){
         console.log(event)
      },
      fn2(e, a){
         console.log(e.pageX, a)
      },
      // 使用事件委派机制
      fn3(e){
         console.log(e.target)
      }
   }
}
</script>
```



#### 事件修饰符

使用方法： `v-on:事件名.修饰符 = "事件处理方法"`

```vue
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
```



#### v-cloak【了解】

**作用：**解决浏览器在加载页面时因存在时间差而产生的 闪动 问题

**原理：**先隐藏元素挂载位置，处理好渲染后再显示最终的结果

**注意：**需要与CSS规则一起使用

**文档地址：** https://cn.vuejs.org/api/built-in-directives.html#v-cloak

> 如果后期有多个元素需要解决闪动问题，可以将 v-cloak 写在根元素上。

#### v-pre【了解】

作用：跳过该元素及其所有子元素的编译。 

元素内具有 `v-pre`，所有 Vue 模板语法都会被保留并按原样渲染。最常见的用例就是显示原始双大括号标签及内容。

#### v-once【了解】

作用：仅渲染元素和组件一次，并跳过之后的更新。

在随后的重新渲染，元素/组件及其所有子项将被当作静态内容并跳过渲染。这可以用来优化更新时的性能。

```vue
<template>
    <div class="app-container" v-cloak>
      <!-- v-cloak 指令：当网络比较慢的情况下，会直接显示胡子语法在网页中，使用这个可以直接隐藏胡子语法 -->
      {{ name }}
      <!-- v-pre 跳过该元素及其所有子元素的编译 -->
      <p v-pre>胡子语法：{{ name }}</p>
      <button @click="name='王旭'">更新姓名</button>
      <!-- v-onoce 仅渲染元素和组件一次，并跳过之后的更新 -->
      <h3 v-once>{{ name }}</h3>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         name: 'hello，欢迎！'
      }   
   },
   methods: {
      
   }
}
</script>

<style>
[v-cloak]{
   display: none;
}
</style>
```



### 06 - 在 Vue 方法中使用 this 对象

[官方文档](https://cn.vuejs.org/v2/api/#methods)

方法中的 `this` 自动绑定为 Vue 实例。

- 方法里面的 this 就是 Vue 实例。
- 方法里面的 this 可以直接访问到 data 的属性和 methods 的方法。
- Vue 里面属性值改变，对应视图将会「响应」我们也叫做响应式对象。



###  07 - Vue2 与Vue3 的响应式原理

#### Vue2：

**核心技术**：`Object.defineProperty()`
**实现方式**：

1. **数据劫持**：
   - 遍历对象的每个属性，通过 `Object.defineProperty()` 为每个属性设置 `getter` 和 `setter`。
   - 当属性被访问时（`get`），触发依赖收集（将当前依赖存储到 `Dep` 中）。
   - 当属性被修改时（`set`），通知所有依赖（`Watcher`）进行更新。
2. **依赖管理**：
   - 每个属性对应一个 `Dep` 实例（依赖收集器）。
   - 每个组件实例对应一个 `Watcher` 实例，负责监听数据变化并触发更新。
3. **数组处理**：
   - 重写数组的变异方法（如 `push`、`pop`、`splice` 等），在调用这些方法时手动触发更新。
   - 通过 `Vue.set` 或 `Vue.delete` 处理数组索引或对象属性的动态增删。

**局限性**：

- **无法监听对象属性的新增/删除**：需使用 `Vue.set` 或 `Vue.delete`。
- **数组监测需特殊处理**：仅能通过重写方法监测部分变化。
- **性能开销**：递归遍历对象所有属性初始化响应式，大型对象性能较差。



#### Vue3：

**核心技术**：`Proxy` + `Reflect`
**实现方式**：

1. **数据代理**：
   - 使用 `Proxy` 代理整个对象（而非单个属性），拦截对象的读取（`get`）、修改（`set`）、删除（`deleteProperty`）等操作。
   - 通过 `Reflect` 操作对象，确保行为的默认正确性。
2. **依赖管理**：
   - 通过 `effect`（副作用函数）和 `track`/`trigger` 函数实现依赖收集与触发。
   - 当访问响应式数据时，`track` 记录当前依赖（如组件的渲染函数）。
   - 当数据变化时，`trigger` 触发所有关联的依赖重新执行。
3. **惰性响应式**：
   - 仅在访问嵌套对象时才会递归代理，减少初始化性能开销。
4. **全面支持数组和动态属性**：
   - 直接监测数组索引变化和 `length` 属性变化。
   - 自动追踪属性的动态添加或删除。

**优势**：

- **更全面的监测**：支持对象属性的增删、数组索引变化。
- **性能优化**：按需代理嵌套对象，减少初始化开销。
- **代码简化**：无需特殊处理数组或动态属性。



### 08 - 案例

#### lodding效果展示

```vue
<template>
    <div class="app-container">
       <div class="mask" v-if="isLodding">
            <div>
               <h3>{{count}}s</h3>
               <img src="https://spider.ws.126.net/31e23022a96e40fd87b354d90aba1a32.gif" alt="">
            </div>
       </div>
    </div>
</template>

<script>
export default {
   name: 'App',
   // 当页面创建后好，咱们调用这个函数
   created(){
      console.log('我被调用了')
      this.initFn()
   },
   data(){
      return {
         isLodding: true,
         count: 3,
         timer: 0 // 为什么 timer 赋值为 0 呢? 其实这里初始值为其他的也可以，主要考虑到后面使用 ts，给 ts 添加类型方便，定时器返回的id或者叫做序号类型就是 number
      }   
   },
   methods: {
      initFn(){
         // setTimeout(()=>{
         //    this.isLodding = false
         // }, 3000)

         this.timer = setInterval(()=>{
            this.count--
            if(this.count<0){
               this.isLodding = false
               clearInterval(this.timer)
            }
         }, 1000)
      }
   }
}
</script>
```

#### 图片切换和静态资源处理

```vue
<template>
    <div class="app-container">
       <img :src="imgList[index]" alt="" width="100">
       <!-- <img src="./assets/26.jpg" alt="" width="100"> -->
       <hr/>
       <!-- 
         <button @click="index--">previous</button>
         <button @click="index++">next</button> 
       -->
       <button @click="previousFn">previous</button>
       <button @click="nextFn">next</button>
    </div>
</template>

<script>
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
export default {
   name: 'App',
   /*
      assets 文件夹里面放问题
      + public 目录里面的图片不会被 vite 所处理，会直接平移过去
      + assets 目录里面的图片会被 vite 工具所处理，为了保证图片的唯一性，会给图片地址后面默认添加 hash 值，再一个 assets 也不会再处理后的目录里面出现，
      有可能会被改成其他的名称，因此直接引入 assets 里面的图片路径在模板里面渲染的时候，不会显示图片
      + assets 目录里面的图片在 template 模板里面可以正常的显示，因为 vite 处理的规则不一样，可以正常显示
   */
   data(){
      return {
         imgList: [
            new URL('./assets/26.jpg', import.meta.url).href, 
            new URL('./assets/27.jpg', import.meta.url).href, 
            new URL('./assets/28.jpg', import.meta.url).href, 
            new URL('./assets/29.jpg', import.meta.url).href, 
         ],
         index: 0
      }   
   },
   methods: {
      nextFn(){
         this.index++
         // this.imgList.length = 4 - 1 = 3
         // 3 === 3 满足
         if(this.index === this.imgList.length){
            this.index = 0
         }
      },
      previousFn(){
         if(this.index === 0){
            this.index = this.imgList.length
         }
         this.index--
      }
   }
}
</script>
```



##  2、双向数据绑定及逻辑控制指令

### 01 - 双向数据绑定 v-model

表单元素的绑定，实现了**双向数据绑定**，通过表单项可以更改数据。

v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值，而总是将 Vue 实例的数据作为数据来源，应该在 data 选项中声明初始值。

```vue
<template>
    <div class="app-container">
       <h1>v-model 双向数据绑定</h1>
       <!-- v-model 双向数据绑定，所谓的双向数据绑定，意思数据改变视图改变，视图改变数据跟着改变。v-mode 主要给表单元素使用 -->
       <!-- v-model 本质其实就是动态属性绑定和 oninput 事件组合实现的 -->
       <input type="text" v-model="str">
       <p>{{ str }}</p>
       <hr/>
       <input type="text" :value="username" @input="username=$event.target.value"> 
       <input type="text" :value="username" @input="changeValue">
       {{ username }}
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         str: '你好啊',
         username: 'admin'
      }   
   },
   methods: {
      changeValue(){
         this.username = event.target.value
      }
   }
}
</script>
```



普通文本框上的使用

~~~html
<div id='app'>
    <p>{{message}}</p>
    <input type='text' v-model='message'>
    <!--
    v-model其实是`语法糖`,它是下面这种写法的简写
    语法糖：这种语法对语言的功能并没有影响，但是更方便程序员使用
    -->
    <input type='text' :value='msg' @input='msg=$event.target.value'/>
</div>

<script type='text/javascript'>
const { createApp } = Vue
const app = createApp({
   data: {
			return {msg: 'message默认值'}
    }
})
app.mount('#app')
</script>
~~~



多行文本框上的使用

~~~html
<div id='app'>
    <textarea v-model="message"></textarea>
</div>

<script type='text/javascript'>
const { createApp } = Vue
const app = createApp({
   data: {
			return {message: '我是多行文本内容'}
    }
})
app.mount('#app')
</script>
~~~

**注意：在多行文本框中使用插值表达式无效（此时，其只能接受数据，不能改变数据）**



单个复选框上的使用

~~~html
<div id='app'>
    <input type="checkbox" v-model="checked">
</div>

<script type='text/javascript'>
const { createApp } = Vue
const app = createApp({
   data: {
			return {
        checked:true
   		}
    }
})
app.mount('#app') 
</script>
~~~



多个复选框上的使用

~~~html
<div id='app'>
    <input type="checkbox" value="html" v-model="checkedNames">
    <input type="checkbox" value="css" v-model="checkedNames">
    <input type="checkbox" value="js" v-model="checkedNames">
</div>

<script type='text/javascript'>
const { createApp } = Vue
const app = createApp({
   data: {
			 return {
         	// 如果数组中有对应的value值，则此checkbox会被选中
        	checkedNames:[]
       }
    }
})
app.mount('#app') 
</script>
~~~

**注意：此种用法需要`input`标签提供`value`属性，并且需要注意属性的大小写要与数组元素的大小写一致**



单选按钮上的使用

~~~html
<div id='app'>
    男<input type="radio" name="sex" value="男" v-model="sex">
	  女<input type="radio" name="sex" value="女" v-model="sex">
</div>
<script type='text/javascript'>
const { createApp } = Vue
const app = createApp({
   data: {
			 return {
        	sex: '女'
       }
    }
})
app.mount('#app') 
</script>
~~~



下拉框上的使用

~~~html
<div id='app'>
    <select v-model="selected">
        <option>请选择</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>JS</option>
    </select>
</div>

<script type='text/javascript'>
const { createApp } = Vue
const app = createApp({
   data: {
			 return {
        	selected: 'JS'
       }
    }
})
app.mount('#app') 
</script>
~~~



#### 修饰符的使用

.lazy：默认情况下Vue的数据同步采用`input`事件，使用`.lazy`将其修改为失去焦点时触发

.number：自动将用户的输入值转为数值类型（如果能转的话）

.trim：自动过滤用户输入的首尾空白字符

```vue
<template>
    <div class="app-container">
      <!-- v-model 默认采用的事件是原生 js 里面的 oninput 事件，lazy 修饰符，可以把事件改成 onblur 事件 -->
      <input type="text" v-model.lazy="msg">
      {{ msg }}
      <!-- number：自动将用户的输入值转为数值类型（如果能转的话） -->
      <input type="text" v-model.number="num1">
      <input type="text" v-model.number="num2">
      <button @click="getNum">计算</button>
      <input type="text" :value="res">
      <!-- trim：自动过滤用户输入的首尾空白字符 -->
      <input type="text" v-model.trim="desc">
      <button @click="getInfo">获取值</button>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         msg: 'hello',
         num1: 0,
         num2: 0,
         res: '',
         desc: ''
      }   
   },
   methods: {
      getNum(){
         this.res = this.num1 + this.num2
      },
      getInfo(){
         console.log(this.desc)
      }
   }
}
</script>
```



### 02 - v-model 语法糖的本质

v-model 其本质上来讲是 在表单上监听用户对应输入事件，动态的修改 data 中声明的属性的一个方法。

我们也把这种封装出来的使用，叫做「语法糖」，简单的来说，就是方便开发者使用的，在程序员的世界里，永远有一个最基础的规矩，就是「Write Less， Do More」，写的更少，做的更多，这在 jQuery 时代就已经体现的淋漓尽致了。

```html
<body>
    <div id="app">
        <input type="text" @input="setMsg" />
        <h2>你输入的内容是：{{ msg }}</h2>
    </div>
</body>
</html>
<script src="./lib/vue.js"></script>
<script>
const { createApp } = Vue
const app = createApp({
   data: {
			 return {
        	msg:""
       }
    },
    methods: {
      setMsg(){
        console.log(event.target.value);
        this.msg = event.target.value
      }
    },
})
app.mount('#app') 
</script>
```



### 03 - v-for 循环控制指令

用 `v-for` 指令基于一个数组来渲染一个列表

1. v-for 用来遍历数组并生成多个标签

2. v-for 作用在需要重复的元素上

3. 语法 `v-for="元素别名 in 数组"` 或者` v-for="(元素别名,下标别名) in 数组"`

4. 在 v-for 作用的标签之间就可以用使用元素别名和下标别名

5. in 是固定的，不能变
6. 注意 v-for 必须要配套一个 key 来进行使用，这样 Vue 才能区分每一个元素的标识，进而在局部更新一个数据的时候，才能配套使用 diff 算法来确保更新的效率。

```html
<div id="app">
  <ul>
    <li v-for="(movie,index) in movieList" key="'movie'+index">
      {{movie}} --{{index}}
 </li>
  </ul>
</div>
<script src="./lib/vue.js"></script>
<script>
const { createApp } = Vue
const app = createApp({
   data: {
			 return {
        	// 电影列表
          movieList:[
            '战狼1',
            '战狼2',
            '战狼3'
          ]
       }
    }
   })
app.mount('#app') 
</script>
```



### 04 - template 结合 v-if 渲染空标签

把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`，最终的渲染结果将不包含 `<template>` 元素。

1. template 是包裹元素，功能上类似于 div
2. 但是并不渲染 template 标签，结果渲染的是一个空标签

```vue
<template>
    <div class="app-container">
        <!-- 
            <div class="box1" v-if="show">
            <h2>呵呵</h2>
            <p>你好</p>
         </div>
         <div class="box2" v-else>
            <p>测试数据</p>
         </div> 
        -->
        <!-- template 模板标记，可以用来把内容当成一个整体，但是它并不会显示在页面里面，尤其配合 v-if 来一起使用，提高性能 -->
        <template v-if="show">
            <h2>呵呵</h2>
            <p>你好</p>
        </template>
        <template v-else>
            <p>测试数据</p>
        </template>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         show: false
      }   
   }
}
</script>
```



### 05 - 案例

#### 任务清单

```vue
<template>
  <div>
    <!-- 代办事项容器 -->
     <div class="todo-container">
      <!-- 标题 -->
      <h1>待办事项</h1>
      <!-- 输入框和添加按钮 -->
      <div class="input-container">
        <!-- 输入框，使用v-model双向绑定newTodo，支持回车键添加 -->
        <input v-model.trim="newTodo" placeholder="请输入任务" @keyup.enter="addTodo">
        <!-- 添加按钮，点击触发addTodo方法 -->
        <button @click="addTodo">添加任务</button>
      </div>
      <!-- 待办事项列表 -->
      <ul>
        <!-- 使用v-for循环渲染todos数组，每个任务项包含任务内容和删除按钮 -->
        <li v-for="(todo, index) in todos" :key="index">
          <span>{{ todo }}</span>
          <!-- 删除按钮，点击触发removeTodo方法并传入当前索引 -->
          <button @click="removeTodo(index)">删除</button>
        </li>
      </ul>
      <!-- 代办事项合计 -->
       <div class="total"> 
         <!-- 显示当前任务总数 -->
         <span>合计: {{ todos.length }}</span>
         <!-- 清空按钮，点击触发clearTodos方法 -->
         <button @click="clearTodos">清空任务</button>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '', // 存储新任务输入框的内容
      todos: []    // 存储所有待办事项的数组
    }
  },
  methods: {
    // 添加新任务的方法
    addTodo() {
      if (this.newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = ''; // 添加后清空输入框
      }else {
      alert('任务内容不能为空！'); // 当输入为空时弹出警告
    }
    },
    // 删除指定任务的方法
    removeTodo(index) {
      this.todos.splice(index, 1); // 根据索引删除任务
    },
    // 清空所有任务的方法
    clearTodos() {
      this.todos = []; // 将todos数组重置为空
    }
  }
}
</script>
```





## 3、虚拟DOM

### 1、什么是虚拟DOM？

虚拟DOM（Virtual Dom），也就是我们常说的虚拟节点，是用JS对象来模拟真实DOM中的节点，该对象包含了真实DOM的结构及其属性，用于对比虚拟DOM和真实DOM的差异，从而进行局部渲染来达到优化性能的目的。

真实的元素节点：

```html
<div id="wrap">
    <p class="title">Hello world!</p>
</div>
```

VNode：

```js
{
    tag:'div',
    attrs:{
        id:'wrap'
    },
    children:[
        {
            tag:'p',
            text:'Hello world!',
            attrs:{
                class:'title',
            }
        }
    ]
}
```

```vue
<template>
    <div class="app-container">
       <button @click="fn">获取vnode</button>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         
      }   
   },
   methods: {
      fn(){
         // 文档碎片，把所有的操作完成，要追加到真实的DOM里面，可以先把元素放在 document.createDocumentFragment() 里面
         // 再一次追加，这样节省性能
         // 虚拟 DOM 底层使用的就是 document.createDocumentFragment() 
         // document.createDocumentFragment() 
         // this --- vue 代理对象
         console.log(this)
      }
   }
}
</script>
```



### 2、面试：为什么使用虚拟DOM？

起初我们在使用JS/JQuery时，不可避免的会大量操作DOM，而DOM的变化又会引发回流或重绘，从而降低页面渲染性能。那么怎样来减少对DOM的操作呢？此时虚拟DOM应用而生，所以虚拟DOM出现的主要目的就是为了**减少频繁操作DOM而引起回流重绘所引发的性能问题的**！

**回流（Reflow）:**

回流是指当DOM元素的几何属性发生变化时，浏览器需要重新计算所有元素的位置和大小的过程。这通常发生在以下情况：

- 添加或删除可见的DOM元素
- 元素的尺寸变化（例如，宽度、高度）
- 内容的变化（比如文本量增加导致容器尺寸变化）
- 浏览器窗口的尺寸变化
- 页面加载时的初始布局

每次回流都会导致浏览器重新计算页面上所有元素的位置和大小，这是一个相当消耗资源的过程，尤其是在大型或复杂的页面上



**重绘（Repaint）**

重绘则是指当元素的样式发生变化但不影响其布局时，浏览器需要重新绘制元素的过程。比如颜色或背景色的改变。重绘虽然不像回流那样影响到整个页面的布局，但它仍然是一个开销较大的操作，特别是对于高频率更新的动画效果来说。



### 3、虚拟DOM的作用是什么？

- 兼容性好。因为Vnode本质是JS对象，所以不管Node还是浏览器环境，都可以操作。
- 减少了对Dom的操作。页面中的数据和状态变化，都通过Vnode对比，只需要在比对完之后更新DOM，不需要频繁操作，提高了页面性能。
- 虚拟DOM不会进行回流和重绘，虚拟DOM频繁修改，然后一次性对比差异并修改真实DOM，最后进行依次回流重绘，减少了真实DOM中多次回流重绘引起的性能损耗。



## 4、diff 算法

`diff` 算法是一种用于比较两个文件或数据集差异的技术。它最初是为了解决文本文件之间的差异比较而设计的，但现在已经被广泛应用于各种场景中，包括软件开发中的版本控制系统（如Git）、数据库同步、以及各种需要对比两组数据差异的应用场合。

### vue中diff算法的使用

当数据变化时，vue如何来更新视图的？其实很简单，一开始会根据真实DOM生成虚拟DOM，当虚拟DOM某个节点的数据改变后会生成一个新的Vnode，然后VNode和oldVnode对比，把不同的地方修改在真实DOM上，最后再使得oldVnode的值为Vnode。

> diff过程就是调用patch函数，比较新老节点，一边比较一边给真实DOM打补丁(patch)；

### diff 比较规则

- diff 比较两个虚拟dom只会在同层级之间进行比较，不会跨层级进行比较。而用来判断是否是同层级的标准就是（是否在同一层、是否有相同的父级）。

- diff是采用先序深度优先遍历得方式进行节点比较的，即，当比较某个节点时，如果该节点存在子节点，那么会优先比较他的子节点，直到所有子节点全部比较完成，才会开始去比较改节点的下一个同层级节点。

- Diff 算法的“就地原则”（In-place Principle）是虚拟 DOM 算法中一个重要的优化策略，主要用于减少不必要的 DOM 操作，提高性能。这个原则的核心思想是在更新列表时，尽可能地复用已存在的 DOM 节点，而不是简单地删除旧节点再创建新节点。



**面试：为什么v-for遍历，推荐使用把id作为key的值？**

1、**ID 作为 key**：使用 ID 作为 `key` 有助于保持组件状态的一致性。即使列表中的元素位置发生变化，拥有相同 ID 的元素也会保留其状态，这对于需要维护内部状态的组件非常重要。

2、**Index 作为 key**：如果使用索引作为 `key`，当列表发生变动时，例如插入或删除元素，可能导致后续元素的索引值发生变化，进而导致这些元素的状态丢失或错误。

例子：

```vue
<template>
    <div class="app-container">
       <ul>
         <li v-for="(item, index) in books" :key="item.id">
            书名：{{ item.name }}，作者{{ item.author }} 
            <span @click="delFn(index)">删除</span>
         </li>
       </ul>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         books: [
            {id: 1, name: '大哥', author: '未知'},
            {id: 2, name: '蛊真人', author: '未知'},
            {id: 3, name: '完美世界', author: '辰东'},
         ]
      }   
   },
   methods: {
      delFn(index){
         this.books.splice(index, 1)
      }
   }
}
</script>
```



### 案例：购物车

```vue
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
        ....]

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
```



## 5、Vue组件

### 1、什么是组件

组件`component`是vue.js中很强大的一个功能，可以将一些可重用的代码进行封装重用。 所有的Vue 组件同时也是Vue 的实例，可以接受使用相同的选项对象和提供相同的生命周期钩子。 

一句话概括：组件就是可以扩展HTML元素，封装可重用的HTML代码，可以将组件看作自定义的HTML元素。在vue项目中，所有.vue结尾的文件都是一个组件。

template、script、style

### 2、定义组件

#### 局部组件

引入组件后，需要在使用的组件页面 components对象里进行注册，注册后可以直接进行使用。

Nav.vue 局部组件

```vue
<template>
    <div>
        <h1>Nav 组件</h1>
        <p>我是{{ msg }}</p>
        <button @click="list">查看商品列表</button>
        <!-- 使用全局组件 -->
        <MySearch></MySearch>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return {
            msg: '导航组件'
        }
    },
    methods: {
        list(){
            alert('详情...')
        }
    }
}
</script>

<style></style>
```



#### 2、全局组件

全局组件注册后，使用时不需要额外的引入可以直接使用。

**创建qf-input.vue文件**

```vue
<template>
    <div class="search-content">
        <hr />
        <input type="text" v-model="msg">
        <button>搜索</button>
    </div>
</template>

<script>
export default {
    name: 'MySearch',
    data() {
        return {
            msg: '请输入你要搜索的内容'
        }
    }
}
</script>
<style></style>
```

**在入口文件处引入**

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入全局组件 MySearch
import MySearch from './components/MySearch.vue'

const app = createApp(App)

// 注册全局组件（参数1表示组件名称，参数2表示引入的组件） 
app.component('MySearch', MySearch)

app.mount('#app')
```



**App.vue 根组件页面使用局部组件 Nav.vue 和全局组件MySearch.vue**

```vue
<template>
    <div class="app-container">
       <!-- 
         component 组件
         + 局部组件，只能在当前的组件里面使用
         + 全局组件，可以在任何组件里面使用 
         + 注意点
           => 组件的使用，规定是以标记的格式（底层会自动处理）
           => 使用双标记或者单标记都可以
       -->
       <h1>我是App组件</h1>
       <!-- 使用组件 -->
       <Nav />
       <!-- <Nav></Nav> -->
       <MySearch></MySearch>
    </div>
</template>

<script>
// 注册局部组件   @ 表示的就是 src 目录
// import Nav from '@/components/Nav.vue'
import Nav from './components/Nav.vue'
export default {
   name: 'App',
   components: {Nav},
   data(){
      return {
         name: '测试'
      }   
   },
   methods: {

   }
}
</script>

<style>

</style>
```





### 3、组件通信传值

#### 1、父子传值 *props*

在父组件的子组件标签上定义属性，子组件使用props接收

**父组件传入**

```vue
<template>
    <div class="app-container">
       <h1>父组件：App 组件</h1>
       <!-- 父子组件传值，把父组件里面的数据传递给子组件 -->
       <!-- 第一步：在引用组件的地方，通过自定义属性来传递 -->
       <NavBar title="王江" :a="10" :list="list"/>
       <!-- 
         <NavBar title="陈辰" />
         <NavBar title="王旭喜欢洗脚" /> 
       -->
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
   data(){
      return {
         list: ['陈辰', '王旭', '王江爱黑丝']
      }   
   },
   methods: {

   }
}
</script>
```

**子组件接收**

```vue
<template>
    <div class="nav-bar">
        <h1>子组件：{{ title }}</h1>
        <!-- 注意点：父组件传递过来的数据，不能进行修改，因为数据是单项的（单选数据流） -->
        <button @click="a1++">更新数据</button>
        {{ a }}
        {{ a1 }}
        {{ list }}
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    // 第二步：子组件使用props接收
 	// props 属性值 可以是一个数组，数组里存放当前组件接收到的参数
    // props: ['title', 'a', 'b']
    // 注意：props定义的参数名和父组件传入的参数名必须一致
    // props 属性值 可以是一个对象，对象的key 是当前组件接收的参数，对象的value 又是一个对象
    props: {
        title: {
            type: String, // 传递过来数据的类型
            default: 'admin', // 默认值，如果没有传递的话
            required: false // 参数是否需要传递
        },
        a: {
            type: Number,
        },
        list: {
            type: Array
        }
    },
    data(){
        return {
            // 注意点：如果想要把父组件传递过来的数据变成当前页面的响应式数据，可以在 data 里面重新赋值操作。
            // 即当父组件的 title 变化时，a1 不会自动更新。
            a1: this.a
        }
    }
}
</script>
```



#### 2、子传父 $emit

通过事件传递，子组件使用$emit传递一个事件给父组件。$emit第一个参数是事件名，第二个参数要传给父组件的参数。父组件在子组件标签上使用@接收传过来的事件。

**子组件**

```vue
<template>
    <div class="nav-bar">
        <h1>子组件：</h1>
        <!-- 第一步：通过这个事件发送 -->
        <button @click="sendData">来自好大儿的礼物</button>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    
    data(){
        return {
           list: ['奥特曼', '🚗', '作业本']
        }
    },
    methods: {
        // 第二步：使用 $emit() 传递数据
        // 通过 $emit() 进行数据的发送
        sendData(){
            // 参数1 表示传递数据的事件名称（自定义，父组件用来接收数据使用）
            // 参数2 表示需要传递过去的数据
            // this.$emit('getData', '奥特曼')
            this.$emit('getData', this.list)
        }
    }
}
</script>
```

**父组件**

```vue
<template>
    <div class="app-container">
       <h1>父组件：App 组件</h1>
       好大儿的礼物：{{ result }}
       <!-- 子传父：子组件的数据传递给父组件 -->
       <!-- 第三步：接收传递过来的数据，注意，必须使用子组件自定义的函数 -->
       <!-- <NavBar @getData="getDataFn"/> -->
       <!-- 注意点：子组件传递过来的数据，在使用获取函数的时候，加了括号，那么会把数据绑定到 $event 上面 -->
       <NavBar @getData="getDataFn($event)"/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
   data(){
      return {
         result: ''
      }   
   },
   methods: {
      getDataFn(payload){
         console.log(payload)
         this.result = payload
      }
   }
}
</script>
```

#### 3、祖孙传值 provide / inject

`provide / inject` 依赖注入

provide：可以让我们指定想要提供给后代组件的数据或方法

inject：在任何后代组件中接收想要添加在这个组件上的数据或方法，不管组件嵌套多深都可以直接拿来用

**创建子组件NavBar.vue、创建孙组件Search.vue 按照等级依次引入**

**在最上级组件（爷爷组件）写入**

```vue
<template>
   <div class="app-container">
      <h1>爷爷组件：App 组件</h1>
       <!-- 使用标签发值 -->
      <NavBar money="20000" />
   </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: { NavBar },
   /**
 * 使用provide 统一下发值
 * provide 是一个函数 函数必须有返回值
 * 返回的值可以在任意子级组件接收
 */
   provide() {
      return {
         msg: '来自你爷爷的问候！',
         fd: [
            {
               id: 1,
               name: '富阿姨',
               age: 42
            },
            {
               id: 2,
               name: '富奶奶',
               age: 70
            }
         ]
      }
   },
   data() {
      return {
         result: ''
      }
   },
   methods: {

   }
}
</script>
```

**子组件接收NavBar.vue**

```vue
<template>
    <div class="nav-bar">
        <h1>子组件：</h1>
        <!-- 子组件接收到爷爷组件传过来的值又传给孙子 -->
        <Search :money="money" />
    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    name: 'NavBar',
    components: { Search },
    // 接收爷爷组件传过来的值
    props: ['money'],
}
</script>
```

**孙组件接收Search.vue**

```vue
<template>
    <div class="search">
        <h1>孙组件：</h1>
        <input type="text" placeholder="请输入你要搜索的商品">
        {{ money }}
        {{ msg }}
        <ul>
            <li v-for="item in fd" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    // 接收父组件NavBar传过来的值
    props: ['money'],
    // 接收爷爷组件App传过来的值
    inject: ['msg', 'fd'],
}
</script>
```

#### 4、透传 $attrs

`$attrs` 是一个包含父组件传递给子组件的属性（attributes）的对象。这些属性包括了所有未被 props 声明接收的属性

多层嵌套组件传递数据时，如果只是传递数据，而不做中间处理的话就可以用这个，比如父组件向孙子组件传递数据时

通过 this.$attrs 获取父作用域中所有符合条件的属性集合，然后还要继续传给子组件内部的其他组件，就可以通过 v-bind="$attrs"

**爷爷组件**

```vue
<template>
    <div class="app-container">
       <h1>爷爷组件：App 组件</h1>
       <NavBar money="20000" a="10" b="20"/>
    </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
   name: 'App',
   components: {NavBar},
}
</script>
```

**子组件**

```vue
<template>
    <div class="nav-bar">
        <h1>子组件：</h1>
        <!-- 注意点：透传 $attrs 给组件上面添加的属性，默认会保存到 $attrs 对象里面去 -->
        {{ $attrs }}
        <hr/>
        {{ $attrs.money }}
        {{ $attrs.a }}
        {{ $attrs.b }}
        <!-- 注意点：如果需要把子组件的数据继续透传给孙组件，可以动态绑定属性 -->
        <Search c="66" fd="富婆" v-bind="$attrs"/>
    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    name: 'NavBar',
    // props: ['a', 'b'],
    components: { Search },
}
</script>
```

**孙组件**

```vue
<template>
    <div class="search">
        <h1>孙组件：</h1>
        <input type="text" placeholder="请输入你要搜索的商品">
        {{ $attrs }}
    </div>
</template>
<script>
export default {
    name: 'Search',
}
</script>
```



#### 4、兄弟组件传值

一般使用状态管理解决

**event bus**

EventBus 是中央事件总线，不管是父子组件，兄弟组件，跨层级组件等都可以使用它完成通信操作。

在 Vue 3 中，由于 Vue 2 中的全局事件总线（Vue.prototype.$emit 和 Vue.prototype.$on）被移除，我们需要使用其他方式来实现类似的功能。在 Vue 3 中，可以使用 mitt 这个第三方库来创建一个事件总线。

**第一步：安装**

```css
npm install mitt
```

**第二步：使用**

在需要使用事件总线的地方导入和创建它

```css
import mitt from "mitt"
const EventBus = mitt()
export default EventBus
```

**第三步：发送事件**

要发送事件，你可以使用 eventBus.emit(eventName, payload) 方法

`eventBus.emit('eventName', payload)`

```css
<template>
    <div class="son1">
        <h2>子组件1</h2>
        <button @click="seneMessage">发布消息</button>
    </div>
</template>

<script>
import EventBus from '@/utils/EventBus'
export default {
    name: 'Son1',
    methods: {
        seneMessage(){
            EventBus.emit('getMessage', {a: 1, b: 2})
        }
    },
}
</script>
```

**第四步：监听事件**

``eventBus.on('eventName', (payload) => {
  // 处理事件的回调逻辑
});``

```css
<template>
    <div class="son2">
        <h2>子组件2</h2>
        <p>{{ obj }}</p>
    </div>
</template>

<script>
import EventBus from '@/utils/EventBus'
export default {
    name: 'Son2',
    data(){
        return {
            obj: ''
        }
    },
    created(){
        EventBus.on('getMessage', playlod=>{
            this.obj = playlod
        })
    }
}
</script>
```



## 6、ref

ref 被用来给DOM元素或子组件注册引用信息。引用信息会根据父组件的 $refs 对象进行注册。如果在普通的DOM元素上使用，引用信息就是元素;  如果用在子组件上，引用信息就是组件实例。

**注意：只要想要在Vue中直接操作DOM元素，就必须用ref属性进行注册**

```vue
<template>
   <div class="app-container">
      <!-- 
           ref 
           + 是一个对象，它里面保存的是需要获取元素的相关的信息 
           + ref 表示的是响应式数据，在组合式 api 开发规范里面，使用它替代了选项式里面的 data 选项
        -->
      <div class="drag" ref="drag1">1</div>
      <div class="drag" ref="drag2">2</div>
      <button @click="getEleFn">获取元素</button>
      <input type="text" ref="input">
      <button @click="getFocusFn">获取焦点</button>
      <hr />
      <!-- ref 加在子组件上，用this.ref.xxx 获取到的是组件实例，可以使用组件的所有方法 -->
      <Hello ref="ho" />
   </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   components: { Hello },
   mounted() {
      // console.log(document.querySelector('.drag'))
      // 获取元素

      // 使用this.$refs 拿到当前组件里所有的ref对象
      // console.log(this.$refs.drag1)
      // console.log(this.$refs.drag2)
      console.log(this.$refs.ho.a)
      console.log(this.$refs.ho.b)
      this.$refs.ho.test()
   },

   methods: {
      getEleFn() {
         console.log(this.$refs.drag1)
      },
      getFocusFn() {
         console.log(this.$refs.input)
         this.$refs.input.focus()
      }
   }
}
</script>

<style scoped>
.drag {
   width: 200px;
   height: 200px;
   background-color: orange;
}
</style>
```



## 7、生命周期

### 一、概念

世间万物都有自己生命周期，vue也有这一特点，vue的生命周期可以简单分为四个阶段：创建阶段，挂载阶段，更新阶段，销毁阶段。

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等

### 二、生命周期阶段

#### 1、创建阶段

**beforeCreate**

在组件实例创建之前调用，此时组件的数据观测、事件监听和模板编译尚未开始，因此无法访问到组件的响应式数据、计算属性、方法等

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  beforeCreate () {
    console.log("创建前")
  }
}
</script>
```

**created**

在组件实例创建之后调用，此时组件的数据观测、事件监听和模板编译已经完成，可以访问到组件的响应式数据、计算属性、方法等，但是还没有挂载到 DOM 上，因此无法访问到组件的元素或子组件。常用于发送网络请求

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  created () {
    console.log("创建后")
  }

}
</script>
```

#### 2、挂载阶段

**beforeMount**

在组件挂载到 DOM 之前调用，此时组件的虚拟 DOM 已经创建，但是还没有插入到父容器中，可以对虚拟 DOM 进行一些操作或修改

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  beforeMount () {
    console.log("挂载前")
  }

}
</script>
```

**mounted**

在组件挂载到 DOM 之后调用，此时组件的虚拟 DOM 已经插入到父容器中，并且生成了真实的 DOM 节点，可以访问到组件的元素或子组件，并且可以执行一些需要 DOM 的操作。

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  mounted () {
    console.log("挂载后")
  }

}
</script>
```

#### 3、更新阶段

**beforeUpdate**

在组件更新之前调用，此时组件的数据已经发生变化，但是还没有更新到 DOM 上，可以在这个钩子中获取更新前的状态，并进行一些比较或逻辑处理。

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  beforeUpdate () {
    console.log("更新前")
  }
}
</script>
```

**updated**

在组件更新之后调用，此时组件的数据已经更新到 DOM 上，并且完成了重新渲染，可以在这个钩子中获取更新后的状态，并进行一些后续操作或效果处理。不能在这个生命周期里做响应式操作，否则会死循环。

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  updated () {
    console.log("更新后")
  }

}
</script>
```

#### 4、卸载阶段

**beforeUnmount**

在组件卸载之前调用，此时组件还处于可用状态，可以在这个钩子中执行一些清理操作，如移除事件监听器、取消网络请求、停止定时器等。

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {

  beforeUnmount () {
    console.log("卸载前")
  }

}
</script>
```

**注意点：一个 Vue 组件被销毁时，Vue 框架会自动清理与该组件相关的大多数资源，例如事件监听器、计算属性和侦听器等。然而，如果你在组件内部手动创建了一些外部资源，比如定时器、网络请求或第三方库的订阅，Vue 并不能自动为你清理这些资源。因此，你需要手动进行清理，以避免内存泄漏和其他潜在问题。**

**unmounted**

在组件卸载之后调用，此时组件已经从 DOM 中移除，并且停止了所有的响应式效果和事件监听，无法再访问到组件的任何属性或方法。

```vue
<template>
  <div>
    生命周期
  </div>
</template>
<script>
export default {
  unmounted () {
    console.log("卸载后")
  }
}
</script>


```



**总结**

- created() 用于发送请求
- mounted() 用于操作 DOM
- beforeunmount() 用于清除外部创建的资源，例如：定时器
- unmounted() 用于清除外部创建的资源，例如：定时器
- 取消挂载前和取消挂载后都可以拿到组件中的数据，beforeunmount() 它里面的数据存在响应式，
- unmounted() 数据已经失去响应式
  





## 8、forceUpdate

### 一、概念

迫使Vue实例重新（rander）渲染虚拟DOM，注意并不是重新加载组件。结合vue的生命周期，调用$forceUpdate后只会触发beforeUpdate和updated这两个钩子函数，不会触发其他的钩子函数。它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件

### 二、基本使用

把当在data里没有显示的声明一个对象的属性，而是之后给该对象添加属性，这种情况vue是检测不到数据变化的，可以使用`$forceUpdate()`

```vue
<template>
  <div>
    {{ name }} <button @click="update">改变名字为李四</button>
  </div>
</template>

<script>
export default {
  methods: {
    update () {
      this.name = '李四'
      // 如果不加forceUpdate 页面不会渲染
      this.$forceUpdate()
    }
  }
};
</script>
```

注意：官方说如果你现在的场景需要用forceUpdate方法 , 那么99%是你的操作有问题。



## 9、计算属性computed

### 一、概念

基于现有的数据，计算出来的新属性。依赖的数据变化，自动重新计算。computed 属性值会默认走缓存

注意点：计算属性默认只能读取不能进行修改，如果需要修改要使用完整写法

### 二、基本使用

```vue
<template>
    <div class="app-container">
       {{ getSum() }}
       {{ getSum() }}
       {{ getSum() }}

       {{ sum }}
       {{ sum }}
       {{ sum }}


       <hr />

       <button @click="num++">更新数据</button>
       {{ num }}
       <hr />
       <button @click="num2++">更新数据</button>
       {{ num2 }}

       <hr />
       <button @click="num3++">更新数据</button>
       {{ num3 }}
    </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   data(){
      return {
         list: [10, 20, 30],
         num: 10
      }   
   },
   /*
      computed 计算属性
      + 计算属性，计算出的结果是属性，默认存在缓存
      + 注意点
        => 计算属性 和 定义在 data 选项里面的属性，都是一样的，建议最好不要重复定义
        => 计算属性是基于 元数据 计算出来的，如果 元数据 发生改变，那么计算属性要重新计算出新的值
        => 计算属性默认是只读的，不能直接对属性进行修改
        => 计算属性的值如果需要进行修改，推荐使用 get() 和 set() 方式进行，set 和 get 必须放在对象语法里面 
      + 计算属性底层原理
        => 其实就是使用的 get 和 set 方法，对象里面的获取器（getter） 和 设置器（setter）
   */
   computed: {
      sum(){
         console.log('computed，你看看我执行几次')
         return this.list.reduce((sum, item)=>{
            return sum += item
         }, 0)
      },

      num2(){
         return this.num + 2
      },

      // 计算属性的修改
      num3: {
         // 注意点：如果在对象里面需要写 key: value 形式，对象里面如果方法也支持简写。如果是函数里面，这里是不能支持函数的简写形式
         get(){
            return this.num + 3
         },
         set(value){
            this.num = value
         }
      }
   },
   methods: {
      getSum(){
         console.log('methods，你看看我执行几次')
         return this.list.reduce((sum, item)=>{
            return sum += item
         }, 0)
      }
   }
}
</script>

<style scoped>

</style>
```

### 三、修改计算属性

```vue
<template>
    <div>
        <h1>计算属性</h1>
        <hr/>
        姓：<input type="text" v-model="firstName">
        名：<input type="text" v-model="lastName">
        =
        {{ fullName }}

        <button @click="changeName()">修改姓名</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
           firstName: '张',
           lastName: '三'
        }
    },
   
    computed: {
        // 简写
        // fullName(){
        //     return this.firstName + this.lastName
        // }
        // 完整写法：获取 + 设置
      
         /**
           * 可写计算属性
           * 计算属性默认是只读的。
           * 当你尝试修改一个计算属性时，你会收到一个运行时警告。
           * 只在某些特殊场景中你可能才需要用到“可写”的属性，
           * 你可以通过同时提供 getter 和 setter 来创建
           * 不推荐直接使用
         */
        fullName: {
            get(){
                return this.firstName + this.lastName
            },
            set(value){
                // console.log(value)
                this.firstName = value.slice(0, 1)
                this.lastName = value.slice(1)
            }
        }
    },
    methods: {
        changeName(){
            this.fullName = '小甜甜'
        }
    }
}
</script>
```

**注意点：一般来说计算属性不需要修改**



## 10、监听 侦听器watch

### 一、概念

在Vue中，watch是一个用于监听数据变化的功能。它可以监听一个或多个数据，并在数据发生变化时执行相应的操作。当我们需要在数据变化时执行异步操作、计算属性或执行一些副作用时，watch就派上了用场啦。注意。watch默认只能进行浅层次监听，如果数据非常复杂，则需要进行深度监听

### 二、基本使用 

观察num变化，每次变化都会触发hello

```vue
<template>
    <div class="app-container">
        <button @click="num+=1">数据更新</button>
        {{ num }}
    </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   data(){
      return {
         num: 0
      }   
   },
   /*
      watch 侦听器
      + 检测数据的变化
      + 只有数据变化时，才能触发 侦听器 工作
   */
   watch: {
      // 第一种写法
      // num(newVal, oldVal){
      //    console.log(`新值：${newVal}，旧值：${oldVal}`)
      // }

      // 第二种写法，可以配置更多的功能
      num: {
         handler(newVal, oldVal){
            console.log(`新值：${newVal}，旧值：${oldVal}`)
         },
         // immediate 表示立即执行一次，无论数据更新与否，都会先执行一次
         immediate: true
      }
   },
   methods: {
   }
}
</script>

<style scoped>

</style>
```

### 三、immediate 立即触发

立即触发监听 默认情况下，watch在初始化时不会立即执行。如果我们希望在初始数据加载后立即触发监听，可以使用immediate选项

```vue
<template>
  <div>
    {{ num }}
    <button @click="num+=1">+1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  },

  watch: {
    /**
     * 把要观察的属性写成一个对象
     * 每次改变 都会触发 handler 方法 注意：只能叫handler
     * immediate 立即执行
     */
    num: {
      handler (newVal, oldVal) {
        console.log(newVal, oldVal, '哈喽')
      },
      immediate: true
    }
  }
}
</script>
```

### 四、深度监听

```vue
<template>
   <div class="app-container">
      <button @click="arr.name = '王旭'">数据更新1</button>
      <button @click="arr.like.a = 66">数据更新2</button>
      <hr />
      {{ arr }}

      <hr />
      <button @click="arr2[0] = '王江'">数据更新1</button>
      <button @click="arr2[1].a = 88">数据更新2</button>
      {{ arr2 }}
   </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   data() {
      return {
         num: 0,
         arr: { name: '王江', like: { a: 1, b: 2 } },
         arr2: ['王旭', { a: 1, b: 2 }]
      }
   },
   /*
      watch 侦听器
      + 检测数据的变化
      + 只有数据变化时，才能触发 侦听器 工作
      + 注意点
        => 无法直接监听整个对象的，可以通过 deep: true 属性配置深度监听
        => 监听对象时的属性值，需要给对象和属性外层加上引号，这是由对象的语法决定的
        => 可以监听整个数组，但是无法监听到数组里面具体的哪一项，但是对象可以
   */
   watch: {
      arr(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      'arr.name'(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      'arr.like.a'(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      'arr.like'(newVal, oldVal) {
         console.log(newVal, oldVal)
      },

      ['arr.like']: {
         handler(newVal, oldVal) {
            console.log(newVal, oldVal)
         },
         deep: true
      },

      arr: {
         handler(newVal, oldVal) {
            console.log(newVal, oldVal)
         },
         deep: true
      },

      arr2: {
         handler(newVal, oldVal) {
            console.log(newVal, oldVal)
         },
         deep: true
      }
   },
   methods: {
   }
}
</script>

<style scoped></style>
```

### 案例：

1、用户偏好设置：当用户更改他们的偏好设置时，如主题颜色、字体大小等，可以使用 watch 来监听这些变化，并立即应用到应用中

```vue
<template>
    <div class="demo">
        <button @click="theme = 'skyblue'">主题蓝色</button>
        <button @click="theme = 'orange'">主题暖色</button>
        <button @click="theme = 'hotpink'">主题粉色</button>
    </div>
</template>

<script>
export default {
    name: 'DemoComponent',
    data(){
        return {
            theme: 'skyblue'
        }
    },
    watch: {
        // theme(newValue){
        //     this.changeTheme(newValue)
        // }
        theme: {
            handler(newValue){
                this.changeTheme(newValue)
            },
            immediate: true
        }
    },
    methods: {
        changeTheme(theme){
            if(theme === 'skyblue'){
                document.body.style.backgroundColor = 'skyblue'
            }
            if(theme === 'orange'){
                document.body.style.backgroundColor = 'orange'
            }
            if(theme === 'hotpink'){
                document.body.style.backgroundColor = 'hotpink'
            }
        }
    }
}
</script>

<style scoped>
button{
    margin: 10px;
}
</style>

```

2、监听用户选择的配送方式：不同的配送方式可能会有不同的费用，因此当用户更改配送选项时，需要重新计算总费用。

```vue
<template>
    <div class="demo">
        <h1>计算不同送货方式的费用</h1>
        <select v-model="deliveryMethod">
            <option value="youzheng">邮政</option>
            <option value="shunfeng">顺丰</option>
            <option value="yunda">韵达</option>
        </select>
        价格：{{ price }}
    </div>
</template>

<script>
export default {
    name: 'Delivery',
    data(){
        return {
            deliveryMethod: 'youzheng',
            price: 0
        }
    },
    watch: {
        deliveryMethod: {
            handler(newValue){
                if(newValue === 'youzheng'){
                    this.price = 15
                }
                if(newValue === 'shunfeng'){
                    this.price = 25
                }
                if(newValue === 'yunda'){
                    this.price = 20
                }
            },
            immediate: true
        }
    }
}
</script>

<style scoped>
</style>
```

3、基于用户输入动态加载数据：当用户开始输入时，你可以通过 watch 来检测输入并加载相关数据，比如搜索建议。

```vue
<template>
    <div class="demo">
        <input type="text" v-model="searchQuery">
    </div>
</template>

<script>
export default {
    name: 'Delivery',
    data(){
        return {
            searchQuery: '',
            searchResults: []
        }
    },
    watch: {
        searchQuery(newValue){
            if(newValue.length > 2){
                axios.get(`/api/search?q=${newValue}`).then(response => {
                    this.searchResults = response.data.results;
                })
            }else{
                this.searchResults = [];
            }
        }
    }
}
</script>

<style scoped>
</style>
```

### 五、注意点

- 计算属性里面不能执行异步任务，因为它本身就是同步的
- 监听器里面可以执行异步任务



## 11、指令

### 一、概念

在Vue.js中，指令（Directives）是一种特殊的语法，用于为HTML元素添加特定的行为和功能。指令以v-作为前缀，通过在HTML标签中使用这些指令来操作DOM，修改元素的属性、样式或行为。

Vue.js提供了一组内置的指令，如v-model、v-bind、v-if、v-for等。此外，你也可以自定义指令来满足特定的需求。

### 二、常见指令

#### 1、v-model

用于实现表单元素与Vue实例数据的双向绑定。

#### 2、v-bind

用于动态地将Vue实例的数据绑定到HTML元素的属性或表达式。

#### 3、v-if / v-else / v-else-if

根据条件控制元素的显示与隐藏。

#### 4、v-for

用于根据数据源循环渲染元素列表。

#### 5、v-on / @

用于监听DOM事件，并在触发时执行Vue实例中的方法。

#### 6、v-show

根据条件控制元素的显示与隐藏，通过修改元素的CSS属性display。

#### 7、v-text

将Vue实例的数据绑定到元素的文本内容。

#### 8、v-html

将Vue实例的数据作为HTML内容动态渲染到元素中

### 三、v-model

#### 1、概念

v-model指令在Vue.js中用于实现表单元素与Vue实例数据的双向绑定。当使用v-model指令绑定一个表单元素时，它会在底层自动为元素添加一个value属性和一个input事件监听器

#### 2、绑定过程

对于表单元素（如`<input>、<textarea>、<select>`），v-model会将value属性与Vue实例中的一个数据属性进行绑定。

在初始化时，Vue会根据v-model指令的绑定值（通常是Vue实例的一个属性）将表单元素的初始值赋给该属性。

当用户与绑定了v-model的表单元素进行交互（输入、选择等）时，元素的input事件会被触发。

Vue会捕获到该事件，并根据表单元素的类型（`<input>`的type属性）来获取新的值。

Vue会将新的值赋给绑定的数据属性，实现从表单元素到Vue实例数据的单向绑定。

同时，Vue会将绑定的数据属性的值反过来赋给表单元素的value属性，实现从Vue实例数据到表单元素的单向绑定。

这样，无论是表单元素的值变化还是Vue实例数据的变化，都会相互影响，实现了双向绑定

#### 3、案例

```vue
<template>
  <div>
    <div>{{ msg }}</div>
    <!-- <input type="text" :value="msg" @input="inputChange" /> -->
    <!-- 
      监听表单控件变化,同步每次变化的值到value上
    -->
    <input type="text" v-model="msg" />
    <button @click="msg = '张三'">填入张三</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },

  methods: {
    inputChange(event) {
      this.msg = event.target.value;
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
```

#### 4、自定义组件使用v-model

**子组件**

```vue
<template>
    <div class="select">
        <select :value="modelValue" @change="handlerId">
            <option value="001">北京</option>
            <option value="002">成都</option>
            <option value="003">上海</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: ['modelValue'],
    methods: {
        handlerId(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
```

**注意点：update:modelValue固定写法，如果需要自定义modelValue属性的名称，语法：v-model:自定义属性名称 = "cityId"**

**父组件**

```vue
<template>
<template>
  <div class="app">
     <Select v-model="cityId"/>
  </div>
</template>

<script>
import Select from './components/Select.vue'
export default {
   name: 'App',
   components: {
      Select
   },
   data(){
      return {
         cityId: '003'
      }
   }
}
</script>
```

### 四、自定义指令

#### 1、概念

在Vue中，你可以使用自定义指令来扩展和修改现有的DOM元素行为。自定义指令是一种在HTML元素上绑定自定义行为的方式，它们可以用于处理交互、动态样式、事件监听等。

#### 2、例子

**全局指令**

在入口文件处，增加v-color指令根据传入的参数改变字体颜色

```js
app.directive("color", {
  mounted(el, binding) {
    el.style.color = binding.value;
    console.log(el, binding);
  },
});
```

**局部指令**

```vue
<template>
  <div>
    <input type="text" v-focus="true" />
    <div v-color="`green`">全局指令变红</div>
  </div>
</template>

<script>
export default {
  directives: {
    /**
     * 对象的key是指令的名字
     * 指令 不需要 v- 开头
     * 但是使用的时候 必须要v- 开头
     */
    focus: {
      /**
       *
       * @param {*} el 当前的dom节点
       * @param {*} binding 相关传值
       */
      mounted(el, binding) {
        // console.log(el, binding);
       	 if(binding.value === true){
           	ele.focus()
         }
      },
    },
  },
};
</script>
```



## 12、插槽

### 一、概念

在Vue中，插槽（Slots）是一种用于组件模板中的特殊语法，用于实现组件的内容分发和复用。插槽允许父组件在子组件的模板中插入任意的内容，从而实现更灵活的组件组合和定制。



### 二、默认插槽（Default Slot）

默认插槽是最常用的插槽类型。在子组件的模板中，使用`<slot></slot>`标签定义默认插槽的位置。父组件在使用子组件时，可以在子组件的标签内放置内容，这些内容将被插入到子组件模板中的默认插槽位置

**父组件**

```vue
<template>
  <div>
    <LearnSlot2>
      任意内容
    </LearnSlot2>
  </div>
</template>

<script>
import LearnSlot2 from "./learn-slot2.vue";

export default {
  components: {
    LearnSlot2,
  },
};
</script>
```

**子组件**

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

### 三、具名插槽（Named Slots）

除了默认插槽，Vue还支持具名插槽。具名插槽允许在子组件中定义多个命名插槽，父组件可以根据插槽的名称来插入内容。在子组件的模板中，使用`<slot name="slotName"></slot>`标签定义具名插槽的位置，并为每个插槽指定一个唯一的名称。在父组件使用子组件时，使用具名插槽的语法来插入相应名称的内容

**父组件**

```vue
<template>
  <div>
    <LearnSlot2>
      <!-- <h1>一级标题</h1> -->
      <!-- 
        # 后面是插槽的名字
       -->
      <template #footer>
        <div>底部</div>
      </template>
      <template #header>
        <div>头部</div>
      </template>
      <template #content>
        <div>内容</div>
      </template>
    </LearnSlot2>
  </div>
</template>

<script>
import LearnSlot2 from "./learn-slot2.vue";

export default {
  components: {
    LearnSlot2,
  },
};
</script>
```

**子组件**

```vue
<template>
  <div>
    一个组件
    <!-- 
      使用slot这个组件展示
      组件标签中间的内容
     -->
    <!-- 
      使用name跟上插槽的名字
      -->
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>
```

### 四、作用域插槽（Scoped Slots）

作用域插槽是一种特殊的插槽类型，它允许子组件向父组件传递数据，并且父组件可以在插槽中使用该数据进行渲染。

具体来说：

- **子组件** 负责定义作用域插槽，并将数据作为插槽属性传递给父组件。
- **父组件** 负责接收这些数据，并在插槽内容中使用这些数据进行渲染。

**父组件**

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>Parent Component</h1>
    <ListComponent>
      <!-- 使用作用域插槽来渲染列表项 -->
      <template v-slot="{ item }">
        <li>{{ item.name }}</li>
      </template>
    </ListComponent>
  </div>
</template>

<script>
import ListComponent from './ListComponent.vue';

export default {
  components: {
    ListComponent
  }
}
</script>
```

**子组件**

```vue
<!-- ListComponent.vue -->
<template>
  <div>
    <h2>List Component</h2>
    <ul>
      <slot v-for="item in items" :item="item" :key="item.id"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  }
}
</script>
```



## 13、vue内置组件

Vue提供了一些内置的组件，这些组件可以在Vue应用中直接使用，无需额外安装或配置。以下是一些常见的Vue内置组件

### 一、transition 和 transition-group

#### 1、概念

`<transition> `组件用于在元素插入或移除时应用过渡效果，例如淡入淡出、滑动等效果。`<transition-group>` 组件用于在多个元素同时插入或移除时应用过渡效果，并为每个元素添加唯一的过渡类名。这些组件提供了丰富的过渡效果和过渡钩子函数，使得在Vue应用中实现动画效果变得更加容易

#### 2、参数

**name 属性**

- 指定过渡效果的基础类名。例如，`name="list"` 会生成 `list-enter`、`list-leave` 等类名。

#### 3、**tag 属性**

- 指定包裹子元素的根标签。例如，`tag="ul"` 会使 `<transition-group>` 渲染为一个 `<ul>` 标签。

#### 4、示例：

```vue
<template>
    <div class="animation">
        <h1>动画组件</h1>

        <button @click="show = !show">执行动画</button>
        <!-- 里面只能执行一次动画。name 可以自定义动画的类名 -->
        <Transition name="zt">
            <p v-if="show">hello，我是动画</p>
        </Transition>

        <!-- 里面可以执行一组动画-->
        <TransitionGroup name="zt" tag="ul">
            <p v-for="item in items" :key="item" v-if="show">{{ item }}，我是动画</p>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    name: 'Animation',
    data(){
        return {
            show: false,
            items: ['hello', 'world', 'Vue']
        }
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
```

#### 5、css Animation动画库

https://animate.style/#:~:text=Animate.css%20provides%20ready-to-use,%20cross-browser%20animations%20for

```vue
<template>
    <div class="animation">
        <button @click="animationType = 'animate__backInLeft'">动画1</button>
        <button @click="animationType = 'animate__bounceOut'">动画2</button>
        <h1 :class="['animate__animated', animationType]">动画组件</h1>
    </div>
</template>

<script>
export default {
    name: 'CssAnimation',
    data(){
        return {
            show: false,
            animationType: 'animate__backInUp'
        }
    }
}
</script>
```

### 二、component

#### 1、概念

`<component>` 组件用于动态地渲染组件，根据不同的条件或数据选择性地渲染不同的组件。它可以接收一个组件的名称或组件对象，并根据指定的组件动态地渲染内容

#### 2、参数

**is 属性是 `<component>` 组件的一个特殊属性，用于指定要渲染的组件或组件的名称。**

通过使用 is 属性，我们可以实现动态组件的渲染，即根据数据的变化在运行时选择不同的组件进行渲染。这对于根据用户的操作或其他条件切换不同的视图非常有用

#### 3、例子

根据选择动态渲染对应的组件

```vue
<template>
  <div>
    <select v-model="selectedComponent">
      <option value="ComponentA">Component A</option>
      <option value="ComponentB">Component B</option>
      <option value="ComponentC">Component C</option>
    </select>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';

export default {
  data() {
    return {
      selectedComponent: 'ComponentA'
    };
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  }
}
</script>
```

### 三、keep-alive

#### 1、概念

组件用于缓存动态组件，以便在组件切换时保留其状态或避免重新渲染。它会缓存被包裹的组件的实例，并在组件切换时保持实例的状态，以提高应用的性能和响应性

#### 2、参数

include缓存name为xxx的组件 

exclude不缓存name为xxx的组件

#### 3、例子

```vue
<template>
  <div>
    <select v-model="selectedComponent">
      <option value="ComponentA">Component A</option>
      <option value="ComponentB">Component B</option>
      <option value="ComponentC">Component C</option>
    </select>
    <!-- 注意点：include里面组件名称和组件名称逗号后面不能有空格 -->
    <keep-alive include="ComponentA,ComponentB">
    	<component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';

export default {
  data() {
    return {
      selectedComponent: 'ComponentA'
    };
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  }
}
</script>
```

#### 4、相关生命周期

**activated**

- 作用：当一个由 `<keep-alive>` 包裹的组件从缓存中被激活（即重新显示）时调用。这意味着每当用户再次访问该组件时，activated 钩子会被触发。
- 使用场景：可以用来更新组件的数据或状态，确保用户看到的是最新的信息。例如，如果组件显示的是实时数据，可以在 activated 钩子中发起网络请求以获取最新数据。

deactivated

- **作用**：当一个由 `<keep-alive>` 包裹的组件因为导航离开而被缓存时调用。这个钩子允许你在组件即将被缓存之前执行一些清理工作。
- **使用场景**：可以用来清除定时器、取消网络请求或者执行其他必要的清理操作，以避免内存泄漏或其他潜在的问题。

```js
export default {
  activated() {
    // activated 每次进入缓存也都都会执行
  },
  deactivated() {
    // 钩子是在组件被 <keep-alive> 缓存起来并且不再活跃时调用的
  }
}
```

### 四、Teleport

#### 1、概念

它可以将一个组件内部的一部分模板“传送”到**该组件的 DOM 结构外层的位置去**。这类场景最常见的例子就是全屏的模态框

#### 2、参数

**to**：指定传送的目标。to 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。

#### 3、例子

```vue
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div class="modal">
     内容
  </div>
</Teleport>
```

- 什么是Teleport？—— Teleport 是一种能够将我们的**组件html结构**移动到指定位置的技术。

```html
<teleport to='body' >
    <div class="modal" v-show="isShow">
      <h2>我是一个弹窗</h2>
      <p>我是弹窗中的一些内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
</teleport>
```



## 14、router路由

### 一、什么是路由

前端路由指的是一种将浏览器URL与特定页面或视图关联起来的技术。在传统的Web开发中，当用户点击链接或者输入URL时，服务器会接收到请求并返回相应的HTML页面。而在前端路由中，当用户点击链接或者输入URL时，浏览器会根据路由规则对URL进行解析，并使用JavaScript控制页面的展示。

前端路由通常使用JavaScript库来实现，比如React Router、Vue Router等。它们允许开发者定义路由规则，并根据这些规则来显示不同的组件或页面。例如，当用户点击一个链接时，前端路由会将URL解析为一个路由路径，然后根据路径匹配相应的组件或页面并显示在页面上，而不需要向服务器发起请求。

前端路由可以提高Web应用的性能和用户体验，因为它允许应用实现快速的页面切换和动态的内容加载，同时减少了服务器的负载。

### 二、安装

```css
npm install vue-router
```

### 三、路由模式

#### 1、hash模式

使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，其显示的网路路径中会有 “#” 号，有一点点丑。比如`http://example.com/#/about`。这是最安全的模式，因为他兼容所有的浏览器和服务器。

#### 2、history模式

依赖于Html5 的history，pushState API,所以要担心IE9以及一下的版本，感觉不用担心。并且还包括back、forward、go三个方法，对应浏览器的前进，后退，跳转操作。就是浏览器左上角的前进、后退等按钮进行的操作

### 四、定义路由表

#### 第一步：在src下创建router目录，并在目录里创建index.js文件

```js
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
/*
    路由
    + createRouter 表示创建路由
    + router 路由，负责管理整个地址
    + routes 路由相关地址配置项
    + history 路由模式
      => createWebHistory 使用的 HTML5 标准中的 history api（地址中不会出现 # 号），后面项目上线的时候需要在服务器进行对应地址配置
      => createWebHashHistory 使用的是 锚点（地址中会出现 # 号），后面项目上线的时候不需要做任何配置
    + 注意点
      => 模式是一个函数，因此在使用的时候必须加括号
*/

// 从路由配置文件引入
import routes from "./routes"

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

// 导出路由
export default router
```

**路由配置多的话可以单独提出来一个routes.js文件**

```js
/*
    routes 配置项
    + 是一个对象 {}
    + 对象里面的属性
      => path 表示最终在地址栏上面需要匹配的地址片段 
      => component 表示匹配到了这个地址片段后，对应去在 App 组件里面加载那个组件
    + http://localhost:5173/ <---> / 表示的是根地址 
*/

import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import Cart from '@/views/cart/index.vue'
import Mine from '@/views/mine/index.vue'
import Details from '@/views/details/index.vue'
import NotFind from '@/views/not-find/index.vue'

const routes = [
    // 配置根组件
    {
        path: '/',
        redirect: '/home' // 表示如果匹配到的是根组件，那么重定向到 Home 组件
    },
    {
        path: '/home',
        name: 'h', // 命名路由，当匹配的路径片段过长的时候，可以用来简化路径
        component: Home,
        meta: {title: '首页'} // meta 表示路由元信息
    },
    {
        path: '/category',
        name: 'ct',
        component: Category,
        meta: {title: '分类'},
        // redirect: '/category/a', // 二级路由重定向
        redirect: {name: 'bb'},
        children: [
            {
                path: 'a',
                name: 'aa',
                component: ()=> import('@/views/com-a/index.vue'),
            },
            {
                path: 'b',
                name: 'bb',
                component: ()=> import('@/views/com-b/index.vue'),
            },
            {
                path: 'c',
                name: 'cc',
                component: ()=> import('@/views/com-c/index.vue'),
            }
        ]
    },
   {
        path: '/cart',
        name: 'cr',
        components: {// 命名视图，有时候想同时 (同级) 展示多个视图，而不是嵌套展示
            header: ()=> import('@/components/NavBar.vue'),
            default: Cart,
            footer: ()=> import('@/components/TabBar.vue')
        },
        meta: {title: '购物车'}
    },
    {
        path: '/mine',
        name: 'm',
        component: Mine,
        meta: {title: '我的'}
    },
    {
        path: '/details', 
        name: 'dl',
        component: Details,
        meta: {title: '详情'}
    },
    {
        path: '/:pathMatch(.*)', // 匹配不存在的组件
        component: NotFind,
    }
]

export default routes
```

#### 第二步：在入口文件引入，并挂载

```js
// 解构出 createApp 函数，用于创建应用程序（application）
import { createApp } from 'vue'

// 把根组件导入到入口文件里面
import App from './App.vue'

// 把 App 根组件传递给 createApp 函数作为配置项
const app = createApp(App)

// 引入路由
import router from './router'
// 使用路由
app.use(router)

// 把应用程序和 index.html 页面里面的容器进行关联（挂载）
app.mount('#app')
```

#### 第三步：在根组件上使用router-view展示路由

```vue
<template>
    <div class="app-container">
       <!--
           spa 单页面应用开发
           + Single Page Application
           + 最终会把所有的内容都加载到一个页面
           + 页面和页面之间切换的时候不会有刷新
       -->
      <!-- RouterLink 表示跳转到那个组件 -->
      <!-- 
         <RouterLink to="/home">首页</RouterLink>
         <RouterLink to="/category">分类</RouterLink>
         <RouterLink to="/cart">购物车</RouterLink>
         <RouterLink to="/mine">我的</RouterLink> 
      -->
      
      <!-- 
         <RouterLink v-for="item in routerList"  :to="item.path" :key="item.id">
            {{ item.title }}
         </RouterLink> 
      -->

      <!-- 
         <RouterLink v-for="item in list"  :to="item.path" :key="item.id">
            {{ item.meta.title }}
         </RouterLink> 
      -->

      <!-- 注意点：在组合式 api 中，使用的时候会导入一个 router 对象，然后可以直接使用，但是在选项式 api 中，必须使用 $router -->

      <!--
         路由跳转方式
         + 声明式导航
           => 直接 RouterLink 上的 to 属性
         + 编程式导航
           => $router.push()
      -->
      <button @click="$router.push('/cart')">购物车页面</button>
      <button @click="$router.push('/category')">分类页面</button>
      <button @click="goMineFn">我的页面</button>


      <!-- RouterView 路由出口：最终组件在哪里进行展示 -->
      <RouterView></RouterView>

    </div>
</template>

<script>
import routes from './router/routes'
export default {
   name: 'App', 
   computed: {
      list(){
         return routes.slice(1)
      }
   },
   data(){
      return {   
         // routerList: [
         //    {id: 1, path: '/home', title: '首页'},
         //    {id: 2, path: '/category', title: '分类'},
         //    {id: 3, path: '/cart', title: '购物车'},
         //    {id: 4, path: '/mine', title: '我的'},
         // ]
      }   
   },
   methods: {
      goMineFn(){
         // this.$router.push('/mine')
         // replace 是把之前的地址直接替换掉，没有历史记录的，而 push 方法存在历史记录
         this.$router.replace('/mine')
      }
   }
}
</script>

<style scoped>

</style>
```

### 五、**页面中使用路由**

**页面中进行路由跳转**

1、普通跳转

```vue
<template>
  <div>
    <button @click="linkB">跳转到B页面</button>
  </div>
</template>

<script>
  export default {
    methods: {
      linkB () {
        /**
       * 使用 this.$router对象里的push方法
       * 
       * 接收一个路由地址作为参数
       * 跳转到b页面
       */
        this.$router.push('/b')
      }
    }
  }
</script>
```

2、替换当前页面

```vue
<template>
  <div>
    <button @click="linkB">跳转到B页面</button>
  </div>
</template>

<script>
  export default {
    methods: {
      linkB () {
        /**
       * 使用 this.$router对象里的replace方法
       * 
       * 接收一个路由地址作为参数
       * 
       * 从 a 页面 替换到 b 页面
       * 不会再历史记录中新增数据
       */
        this.$router.replace('/b')
      }
    }
  }

</script>
```

3、前进或后退到浏览器历史记录中的特定页面

```vue
<template>
  <div>
    <button @click="linkB">跳转到B页面</button>
  </div>
</template>

<script>
  export default {
    methods: {
      linkB () {
        /**
       * 后退一页
       */
        this.$router.go(-1)
      }
    }
  }

</script>
```

### 六、路由传参

#### 声明式导航 --- 跳转传参

目标：在跳转路由时，进行传值

##### query传参

1、语法：

```css
<router-link to="/path/参数名=值">列表页面</router-link>
```

2、对应页面接收传递过来的值

```css
$route.query.参数名
```

3、特点：比较适合传递多个参数

##### params传参

适用于需要隐藏实际参数值（不显示在地址栏中）但又要求参数能通过URL传播的场景

动态路由传参

1、配置动态路由

```js
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 使用 createRouter 创建路由实例
 */
const router = createRouter({
  // 确定路由模式,当前使用hash模式
  history: createWebHashHistory(),
  /**
   * 定义路由表
   */
  routes: [
    {
      // 跳转到b页面需要携带 id 和 name两个参数
      // 如果参数不是必传，可以在参数后加?
      // 注意：必传参数一定要在非必传参数前面
      path: "/b/:id/:name",
      // 对应路由显示组件
      component: () => import('./../b.vue')
    },
  ]
})

/**
 * 导出
 */
export default router
```

2、配置导航链接

```css
<router-link to="/path/参数值">列表页面</router-link>
```

3、对应页面接收传递过来的值

```css
$route.params.参数名
```

4、特点：优雅简洁、传递单个参数比较方便

#### 编程式导航 --- 跳转传参

问题：点击按钮如何实现跳转？

编程式导航就是用js代码来实现跳转

语法1

```css
$router.push('/路径')
$router.push({path:'/路径名称'})
```

语法2

```js
this.$router.push({
  name: '路由名',
  query: {
    name: '张三',
    age: 18
  }
})

router.push({
  path: '/users',
  query: { userId: '123', sort: 'desc' },
});


// 注意点：prams传参只能通过name的方式，不能通过路径，并且是动态路由的方式

// 动态路由
router.push('/users/10/20');

// 命名路由
router.push({
  name: '路由名',
  params: { userId:'123'},
});

{name: '路由名', path: '/list/:a/:b', component: List}
```

### 七、嵌套路由

点击顶栏导航按钮。页面跳转。导航栏保持不变。页面改变

第一步：路由表中定义

```js
import { createRouter, createWebHashHistory } from "vue-router";

/**
 * 使用 createRouter 创建路由实例
 */
const router = createRouter({
  // 确定路由模式,当前使用hash模式
  history: createWebHashHistory(),
  /**
   * 定义路由表
   */
  routes: [
    {
      // 路由地址
      path: "/a",
      // 对应路由显示组件
      component: () => import("./../a.vue"),
      /**
       * 使用 children 定义当前路由下的子路由
       * children 是一个 数组 写法和上面几乎一致
       */
      children: [
        {
          path: "a1",
          component: () => import("./../a1.vue"),
        },
        {
          path: "a2",
          component: () => import("./../a2.vue"),
        },
      ],
    },
    {
      // 跳转到b页面需要携带 id 和 name两个参数
      path: "/b/:id/:name",
      // 对应路由显示组件
      component: () => import("./../b.vue"),
    },
  ],
});

/**
 * 导出
 */
export default router;
```

第二步：在A页面中展示对应子路由

```vue
<template>
  <div>
    <router-link to="/a1">a1</router-link>
    <router-link to="/a2">a2</router-link>
    <!-- 在a页面中使用 router-view 展示敌营子路由-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      linkB () {

        /**
       * 使用?进行拼接参数之间用&隔开
       * 类似于get请求参数
       */
        this.$router.push('/b?id=1&name=张三')
      }
    }
  }

</script>
```

### 八、路由懒加载+动态路由

**路由懒加载**

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效

> 🤔 其实我们一直用的就是路由懒加载

 ```js
 // 将
 // import UserDetails from './views/UserDetails.vue'
 // 替换成
 const UserDetails = () => import('./views/UserDetails.vue')
 
 const router = createRouter({
   // ...
   routes: [{ path: '/users/:id', component: UserDetails }],
 })
 ```

### 九、路由重定向

1、Vue路由 - 重定向

2、问题：网页打开，url默认是/路径，未匹配到组件时，会出现空白

3、说明：重定向 → 匹配path后，强制跳转path路径

4、语法：

`{path：匹配路径，redirect：重定向到的路径1}`

```js
routes: [
  { path:'/', redirect: '/home'},
  { path: "/home' component: Home },
  { path: '/list', component: List }
]
```

二级路由重定向：

```js
  {
    path: '/game',
    name: 'g',
    component: Game,
    // redirect: '/game/game-a'
    redirect: {name: 'a'}
    children: [
      {
        path: 'game-a',
        name: 'a',
        component: ()=> import('../components/GameA.vue')
      },
      {
        path: 'game-b',
        name: 'b',
        component: ()=> import('../components/GameB.vue')
      }
      ]
  },
```



### 十、vue路由 -404

作用：当路径找不到匹配时，给个提示页面

位置：配在路由最后

语法：`path："x(任意路径）一 前面不匹配就命中最后这个`

提示内容：Page Not Find 404

```js
import NotFind from '@/views/NotFind'
const router = new VueRouter ( {
routes:[
  { path:"/', redirect: '/home' },
  { path: "/home', component: Home },
  { path: '/list', component: List },
  { path: '/:pathMatch(.*)', component: NotFind }
]
```

路径解析：

```
* 是一个通配符，表示匹配任何路径。
/* 表示从当前路径开始匹配任何后续路径段。例如，如果当前路径是 /foo，那么 /* 将匹配 /foo/bar、/foo/bar/baz 等等

:pathMatch 是一个动态路由参数，用于捕获路径中的任意部分。
在 Vue Router 中，动态参数的名称前面带有冒号 :，表示这是一个变量。例如，:id 可以捕获路径中的 id 部分。

(.*) 是一个正则表达式，表示匹配任意字符（除了换行符）零次或多次。
这意味着 :pathMatch 可以捕获路径中的任何内容，包括多个路径段。

*:
最后一个 * 表示前一个元素（即 (.*)）可以出现零次或多次。
这使得 :pathMatch 可以捕获多个路径段，即使这些路径段之间有斜杠 / 分隔
```



### 十、命名路由

```js
/*
    routes 配置项
    + 是一个对象 {}
    + 对象里面的属性
      => path 表示最终在地址栏上面需要匹配的地址片段 
      => component 表示匹配到了这个地址片段后，对应去在 App 组件里面加载那个组件
    + http://localhost:5173/ <---> / 表示的是根地址 
*/

import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import Cart from '@/views/cart/index.vue'
import Mine from '@/views/mine/index.vue'
import Details from '@/views/details/index.vue'
import NotFind from '@/views/not-find/index.vue'

const routes = [
    // 配置根组件
    {
        path: '/',
        redirect: '/home' // 表示如果匹配到的是根组件，那么重定向到 Home 组件
    },
    {
        path: '/home',
        name: 'h', // 命名路由，当匹配的路径片段过长的时候，可以用来简化路径
        component: Home,
        meta: {title: '首页'} // meta 表示路由元信息
    },
    {
        path: '/category',
        name: 'ct',
        component: Category,
        meta: {title: '分类'},
        // redirect: '/category/a', // 二级路由重定向
        redirect: {name: 'bb'},
        children: [
            {
                path: 'a',
                name: 'aa',
                component: ()=> import('@/views/com-a/index.vue'),
            },
            {
                path: 'b',
                name: 'bb',
                component: ()=> import('@/views/com-b/index.vue'),
            },
            {
                path: 'c',
                name: 'cc',
                component: ()=> import('@/views/com-c/index.vue'),
            }
        ]
    },
    {
        path: '/cart',
        name: 'cr',
        component: Cart,
        meta: {title: '购物车'}
    },
    {
        path: '/mine',
        name: 'm',
        component: Mine,
        meta: {title: '我的'}
    },
    {
        path: '/details', 
        name: 'dl',
        component: Details,
        meta: {title: '详情'}
    },
    {
        path: '/:pathMatch(.*)', // 匹配不存在的组件
        component: NotFind,
    }
]

export default routes
```

```vue
<template>
    <div class="app-container">
      <!-- 
         <RouterLink to="/home">首页</RouterLink>
         <RouterLink to="/category">分类</RouterLink>
         <RouterLink to="/cart">购物车</RouterLink>
         <RouterLink to="/mine">我的</RouterLink>  

         <RouterLink :to="{name: 'h'}">首页</RouterLink>
         <RouterLink :to="{name: 'ct'}">分类</RouterLink>
         <RouterLink :to="{name: 'cr'}">购物车</RouterLink>
         <RouterLink :to="{name: 'm'}">我的</RouterLink> 
      -->

      <button @click="$router.push({name: 'h'})">首页</button>
      <button @click="$router.push({name: 'ct'})">分类</button>
      <button @click="$router.push({name: 'cr'})">购物车</button>
      <button @click="$router.push({name: 'm'})">我的</button>

      <!-- RouterView 路由出口：最终组件在哪里进行展示 -->
      <RouterView></RouterView>
    </div>
</template>

<script>
import routes from './router/routes'
export default {
   name: 'App', 
   computed: {
      list(){
         return routes.slice(1)
      }
   },
   data(){
      return {   
      
      }   
   },
   methods: {
     
   }
}
</script>

<style scoped>
a{
   margin: 10px;
}
button{
   margin: 10px;
}
</style>
```



### 总结

```
router 路由

+ 用来管理组件地址，根据路由的配置在页面展示不同的组件
+ 下载
  => pnpm i vue-router@4
+ 创建路由
  import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
  const router = createRouter({
     history: createWebHistory(),
     routes: [
        {
           path: '/',
           redirect: '/home'
        },
        {
           path: '/home',
           component: Home,
           meta: {title: '首页'}
        },
        {
           path: '/category',
           component: ()=> import('@/vivews/category/index.vue')
        },
        {
           path: '/details/:id/:name?',
           component: Details,
           redirect: '/details/list'
           children: [
              {
                 path: 'list',
                 component: ()=> import('@/vivews/list/index.vue')
              }
           ]
        },
        {
           path: '/cart',
           name: 'c',
           components: {
              header: ()=> import('@/components/NavBar/index.vue'),
              default: Cart,
              footer: ()=> import('@/components/TabBar/index.vue')
           } 
        }
     ]
  })
+ 导出路由
  => export default router
+ 挂载 main.js
  => import router from './router/index.js'
  => app.use(router)
+ 路由出口
  => <RouterView></RouterView>
+ 声明式导航
  => <RouterLink to='/路径'></RouterLink>
+ 编程式导航
  => $router.push('/路径')
  => $router.push({path: '/路径', query: {}})
  => $router.replace({path: '/路径', query: {}}) 直接替换地址，没有回退的
+ 路由传参
  => query to="/路径?a=10&b=20"  $router.push('/路径?a=10&b=20')
  => params 动态传参，不显示。to="/路径/10/20"  $router.push('/路径/10/20')
+ 路由接收参数
  => $route.query
  => $route.params


```





## 15、路由守卫（导航守卫）

### 一、概念

提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。简单理解：导航守卫就是路由跳转过程中的一些钩子函数，再直白点路由跳转是一个大的过程，这个大的过程分为跳转前中后等等细小的过程，在每一个过程中都有一函数，这个函数能让你操作一些其他的事儿的时机，比如跳转前是否验证登录等，这就是导航守卫。

### 一、全局前置路由守卫

初始化的时候被调用、每次路由切换之前被调用

`to` 即将要进入的目标

 `from` 当前导航正要离开的路由

`meta` 元信息：程序员自己定义的信息就是元信息`meta`，需要在路由表里面进行单独的meta选项配置

场景：登录权限控制，针对于的是所有的路由

```js
router.beforeEach ((to, from)=>{})
```



### 二、全局后置路由守卫

初始化的时候被调用、每次路由切换之后被调用

场景：给页面设置不同的标题

```js
router.afterEach((to, from)=>{
  console.log('后置路由守卫', to,from）
  document.title = to.meta.title
})
```

### 三、独享路由守卫

beforeEnter 在路由配置中定义的钩子函数，它会在路由被激活之前调用。它和全局前置守卫的参数一样，但是只对该路由生效。

适用于需要在进入特定路由前进行的通用逻辑处理，无法访问this的

场景：登录权限控制，只有访问当前路由时，才会被拦截。针对于的是单个路由的

```js
[
  {
    name: 'xinwen'
    path: 'news'
    component: News,
    meta:{isAuth:true, title:'新闻'},
    beforeEnter: (to, from) => {
    }
]
```

### 四、组件内路由守卫

1、进入守卫：通过路由规则，进入该组件时被调用

适用于需要基于组件内部状态或数据进行的操作，可以访问this（必须在后置路由守卫里面进行访问）

场景：在用户进入某个页面之前，显示加载动画或提示信息，以告知用户数据正在加载中。使用非常少，因为它的场景其他的方法可以做到。唯一优点就是在它里面发送请求或者预加载提示信息，比其他的生命周期快（在组件创建前，进入路由就执行），可以减少页面加载的空白时间。

```js
beforeRouteEnter (to, from) {
},
```

2、离开守卫：通过路由规则，离开该组件时被调用

场景：离开当前组件时，某些编辑页面，提醒用户进行数据的保存，清除不需要的定时器

```js
beforeRouteLeave (to, from) {
}
```



## 16、Vuex

### 一、概念

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。一个状态自管理应用包含以下几个部分：

- **状态**，驱动应用的数据源；
- **视图**，以声明方式将**状态**映射到视图；
- **操作**，响应在**视图**上的用户输入导致的状态变化。



### 二、目的

#### 1、思考以下问题

如果你的项目里有很多页面（组件/视图），页面之间存在多级的嵌套关系，此时，这些页面假如都需要共享一个状态的时候，此时就会产生以下两个问题：

- 多个视图依赖同一个状态
- 来自不同视图的行为需要变更同一个状态

#### 2、目前能想到的解决方案

对于第一个问题，假如是多级嵌套关系，你可以使用父子组件传参进行解决，虽有些麻烦，但好在可以解决；对于兄弟组件或者关系更复杂组件之间，就很难办了，虽然可以通过各种各样的办法解决，可实在很不优雅，而且等项目做大了，代码就会变成屎山，实在令人心烦。

对于第二个问题，你可以通过父子组件直接引用，或者通过事件来变更或者同步状态的多份拷贝，这种模式很脆弱，往往使得代码难以维护，而且同样会让代码变成屎山

#### 3、vuex出场

把各个组件都需要依赖的同一个状态抽取出来，在全局使用单例模式进行管理。

在这种模式下，任何组件都可以直接访问到这个状态，或者当状态发生改变时，所有的组件都获得更新。

这就是 Vuex 背后的基本思想，借鉴了 Redux。与其他模式不同的是，Vuex 是专门为 Vue 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新

### 三、安装

```css
npm install vuex
```

### 四、名词概念

#### 1、state

Vuex 使用**单一状态树**——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 ([SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth))”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照

#### 2、getter

计算属性，可以理解成和页面中的计算属性用法一致

#### 3、Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。注意：mutation是同步的

#### 4、Action

类似于mutation，但是它是异步的。不能直接修改state

#### 5、Module

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式

### 五、代码演示

第一步：在src下创建store目录，并添加index.js文件

```js
import { createStore } from 'vuex'

// 创建一个新的store实例
const store = createStore({
    // 开启严格模式，state里面的数据就不可以直接在外边进行修改
    strict: true,
    // 定义数据
    state(){
        return {
            count: 0,
            cartData: [{a: 1}, {b: 2}],
            msg: 'vuex的基本使用'
        }
    },
    // 同步代码
    mutations: {
        addCount(state, payload){
            // 注意点1：不要在同步里面写异步代码，这样vue开发调试工具检测不到数据的变化，因为异步代码返回的时候，mutations()已经把结果返回了
            // 注意点2：严格模式下代码会报错
            // setInterval(()=>{
            //     state.count++
            // }, 1000)

            state.count++
        },
        addCount2(state, payload){
            state.count += 2
        }
    },
    // 异步代码
    actions: {
        // asyncChange(context){
        //     // console.log(context)
        //     setInterval(()=>{
        //         context.commit('addCount2')
        //     }, 1000)
        // }

        // 可以从当前上下文中解构出commit()方法
        asyncChange({commit}, num){
            // console.log(context)
            setInterval(()=>{
               commit('addCount2', num)
            }, 1000)
        }
    },
    // 计算属性
    getters: {
        list(state){
            return state.cartData
        }
    }
})

export default store
```

第二步：在main组件中进行挂载

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)

// 进行挂载
app.use(store)

app.mount('#app')
```

第三步：在组件中使用

- 如果是mutations定义的方法使用`this.$store.commit('mutations里面提供的函数名称', '携带的参数')`
- 如果是actions定义的方法使用`this.$store.dispatch('actions里面提供的函数名称', '携带的参数')`
- 如果是gettters定义的方法使用`this.$store.getters['info']` 来获取

注意点：如果是使用了模块的方法请在以上的基础上设置

- `this.$store.commit('当前模块名称/mutations里面提供的函数名称', '携带的参数'）`
- `this.$store.dispatch('当前模块名称/actions里面提供的函数名称', '携带的参数')`
- `this.$store.getters['当前模块名称/定义的计算属性']`

```vue
<template>
    <div>
        <h1>vuex数据状态管理</h1>
        <hr/>
        <!-- <span>{{ $store.state.count }}</span> -->
        <span>{{ count }}</span>

        <button @click="changeCount">父组件中修改数据1</button>
        <button @click="changeCount2">父组件中修改数据2</button>

        <hr/>
        <button @click="$router.push('/son1')">第一个子组件</button>
        <button @click="$router.push('/son2')">第二个子组件</button>
        <div class="content">
            <RouterView/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapState(['count', 'msg']),
        ...mapGetters(['list'])
    },
    methods: {
        changeCount(){
            // 注意点1：如果在store内开启了严格模式，那么就不能直接这样修改会直接报错
            // 注意点2：这样修改本身vue调试工具就检测不到数据的修改变化，所以不推荐这样去修改数据，而是使用官方提供的方法
            // this.$store.state.count++
            this.$store.commit('addCount')
        },
        changeCount2(){
            this.$store.dispatch('asyncChange', 66)
        }
    }
}

</script>

<style scoped>
.content{
    width: 500px;
    height: 300px;
    border: 1px solid orange;
    border-radius: 20px;
}
span{
    color: orange;
}
button{
    margin-left: 20px;
}
</style>
```

### 六、辅助函数

```vue
<template>
    <div>
        <h1>vuex数据状态管理</h1>
        <hr/>
     
        <span>{{ user }}</span>
        <span>{{ user.userInfo.name }}</span>

        {{ user.count }}
        <button @click="changeCount">父组件中修改数据1</button>
        <button @click="changeCount2">父组件中修改数据2</button>

        <hr/>
        <button @click="$router.push('/son1')">第一个子组件</button>
        <button @click="$router.push('/son2')">第二个子组件</button>
        <div class="content">
            <RouterView/>
        </div>

        <!-- 如果需要单独获取可以使用这种语法 $store.getters['user/info']，数组里面斜杠前面的表示模块名，后面表示参数名称 -->
        <!-- {{ $store.getters['user/info'] }}
        {{ $store.getters['login/info'] }} -->
        
        <!-- {{ info  }} -->

        <!-- {{ userInfo }}
        {{ loginInfo }} -->

        {{ userInfo }}
        {{ loginInfo }}


        <button @click="addCount({name: '哈哈'})">test1</button>
        <button @click="asyncCount({name: '哈哈'})">test2</button>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Home',
    computed: {
        // user、login表示的是模块名称
        ...mapState(['user', 'login']),
      	...mapGetters('user', ['info']),
    },
    methods: {
        ...mapMutations('user', ['addCount']),
        ...mapActions('user', ['asyncCount']),
    }
}

</script>

<style scoped>
.content{
    width: 500px;
    height: 300px;
    border: 1px solid orange;
    border-radius: 20px;
}
span{
    color: orange;
}
button{
    margin-left: 20px;
}
</style>
```



# 二、组合式API

### 介绍

组合式API(Composition API)是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue组件。它是一个概括性的术语，涵盖了以下方面的 API:

**1、响应式API**

例如 ref()和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。

**2、生命周期钩子**

例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。

**3、依赖注入**

 例如 provide() 和 inject()，使我们可以在使用响应式API时，利用Vue的依赖注入系统。

**4、总结**

组合式API是Vue 3及 Vue 2.7 的内置功能。对于更老的 Vue 2版本，可以使用官方维护的插件@vue/composition-api 。

在Vue3中，组合式API基本上都会配合语法在单文件组件中使用。



**为什么使用它**

**1、更好的逻辑复用**

组合式 API 最基本的优势是它使我们能够通过组合函数来实现更加简洁高效的逻辑复用。在选项式 API中我们主要的逻辑复用机制是 mixins，而组合式 API 解决了 mixins 的所有缺陷。

组合式 API提供的逻辑复用能力孵化了一些非常棒的社区项目，比如 VueUse，一个不断成长的工具型组合式函数集合。组合式 API 还为其他第三方状态管理库与 Vue 的响应式系统之间的集成提供了一套简洁清晰的机制，例如 RxJS。

**2、更灵活的代码组织**

许多用户喜欢选项式 API 的原因是因为它在默认情况下就能够让人写出有组织的代码: 大部分代码都自然地被放进了对应的选项里。然而，选项式 API 在单个组件的逻辑复杂到一定程度时，会面临一些无法忽视的限制。组件的不同部分（如数据、方法、计算属性、侦听器等）被分别定义在 `data`、`methods`、`computed`、`watch` 等独立的选项中。这种组织方式可能导致一个完整的功能或业务逻辑分散在多个地方，降低了代码的聚合性和逻辑连贯性，使得阅读和维护变得较为困难，特别是对于复杂的组件。

**3、 更好的类型推导**

近几年来，越来越多的开发者开始使用 TypeScript 书写更健壮可靠的代码，TypeScript还提供了非常好的IDE开发支持。然而选项式 API是在 2013 年被设计出来的，那时并没有把类型推导考虑进去，因此我们不得不做了一些复杂到夸张的类型体操才实现了对选项式 API的类型推导。但尽管做了这么多的努力，选项式 API 的类型推导在处理 mixins 和依赖注入类型时依然不甚理想。

因此，很多想要搭配TS 使用Vue 的开发者采用了由 vue-class-component 提供的 class APl。然而基于 class 的API非常依赖ES 装饰器，在2019年我们开始开发 Vue 3时，它仍是一个仅处于 stage2的语言功能。我们认为基于一个不稳定的语言提案去设计框架的核心API 风险实在太大了，因此没有继续向 Class API 的方向发展。在那之后装饰器提案果然又发生了很大的变动，在 2022 年才终于到达 stage3。另一个问题是，基于 class 的 API和选项式 API 在逻辑复用和代码组织方面存在相同的限制。

相比之下，组合式 API 主要利用基本的变量和函数，它们本身就是类型友好的。用组合式 API 重写的代码可以享受到完整的类型推导，不需要书写太多类型标注。大多数时候，用TypeScript 书写的组合式 AP代码和用 JavaScript写都差不太多!这也让许多纯 JavaScript 用户也能从IDE 中享受到部分类型推导功能。

**4、更小的生产包体积**

搭配 `<script setup>`使用组合式 API比等价情况下的选项式API更高效，对代码压缩也更友好。这是由于 `<script setup>` 形式书写的组件模板被编译为了一个内联函数，和 `<script setup>`中的代码位于同一作用域。不像选项式 API需要依赖 this 上下文对象访问属性，被编译的模板可以直接访中定义的变量，无需一个代码实例从中代理。这对代码压缩更友好，因为本地变问 `<script setup>`量的名字可以被压缩，但对象的属性名则不能。

**简单例子**

```vue
<template>
  <div>
    {{ num }}
    <button @click="add">+1</button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const num = ref(1)

  const add = () => {
    num.value += 1
  }

</script>
```

### 一、setup 组件选项

**setup函数（了解）**

`setup`是`Vue3`中一个新的配置项，值是一个函数，它是 `Composition API` **“表演的舞台**_**”**_，组件中所用到的：数据、方法、计算属性、监视......等等，均配置在`setup`中。

在` setup` 中你应该避免使用` this`，因为它不会找到组件实例。`setup` 的调用发生在 `data property`、`computed property `或`methods` 被解析之前，所以它们无法在 `setup` 中被获取。

特点如下：

- `setup`函数返回的对象中的内容，可直接在模板中使用。
- `setup`中访问`this`是`undefined`。
- `setup`函数会在`beforeCreate`之前调用，它是“领先”所有钩子执行的。



setup() 钩子是在组件中使用组合式 API的入口，通常只在以下情况下使用:

1、需要在非单文件组件中使用组合式API时

2、需要在基于选项式API的组件中集成基于组合式 API的代码时



其他情况下，都应优先使用`<script setup>` 语法

```vue
<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Person',
    setup(){
      // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
      let name = '张三'
      let age = 18
      let tel = '13888888888'

      // 方法，原来写在methods中
      function changeName(){
        name = 'zhang-san' //注意：此时这么修改name页面是不变化的
        console.log(name)
      }
      function changeAge(){
        age += 1 //注意：此时这么修改age页面是不变化的
        console.log(age)
      }
      function showTel(){
        alert(tel)
      }

      // 返回一个对象，对象中的内容，模板中可以直接使用
      return {name,age,tel,changeName,changeAge,showTel}
    }
  }
</script>
```



```vue
<template>
    <div class="app-container">
       <!--
            setup() 函数
            + 组合式 api 所有的功能都是在 setup 函数内部完成的
            + setup 函数是早于 生命周期的，比 beforeCreate() 函数还执行早
            + 如果需要使用 setup 函数内部的数据，必须把数据以返回出去
            + 组合式 api 里面没有 this 存在的，所以不能使用 this
            + 组合式 api 里面函数属于一等公民，把之前的各种选项变成了一个一个的函数让咱们来使用
       -->
      <button @click="num++">+</button>
      <button @click="add">+</button>
      {{ num }}

      <button @click="addFn">{{ count }}</button>
      <button @click="addFn2">{{ count }}</button>
      <Son></Son>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
   name: 'App',
   beforeCreate(){
      console.log('beforeCreate')
   },
   setup(){
       // 使用组合式 api
       // 定义响应式数据 可以使用 ref() 函数
       const num = ref(10)
       console.log(num.value)

       const add = ()=> {
         num.value++
       }
       // 如果需要使用 setup 函数内部的数据，必须把数据以返回出去
       return {
         num,
         add
       }
   }
}
</script>
```



**setup 的返回值**

- 若返回一个**对象**：则对象中的：属性、方法等，在模板中均可以直接使用**（重点关注）。**
- 若返回一个**函数**：则可以自定义渲染内容，代码如下：

```jsx
setup(){
  return ()=> '你好啊！'
}
```

**setup 与 Options API 的关系**

- `Vue2` 的配置（`data`、`methos`......）中**可以访问到** `setup`中的属性、方法。
- 但在`setup`中**不能访问到**`Vue2`的配置（`data`、`methos`......）。
- 如果与`Vue2`冲突，则`setup`优先。



**setup 语法糖**

在组件被创建之前，props 被解析之后执行。它是组合式 API 的入口。`setup`函数有一个语法糖，这个语法糖，可以让我们把`setup`独立出去。

**语法**

```vue
            setup 语法糖
            + 使用 setup 函数，需要把内部的数据返回，setup 在这里还是一个选项，非常不利于开发
            + 可以直接在 script 标记上面设置一个 setup 属性，可以把 script 变成 setup 函数内部
            + 简化了使用 setup 函数的流程
            + setup 语法糖里面使用组件不需要注册，也不需要给组件名称，默认以文件的名称作为组件名的
            如果非要添加可以 script 上添加一个name属性
<template>
    <div>
        <h3>我是子组件：{{ name }}</h3>
    </div>
</template>
<script setup name="Son">
import { ref } from 'vue'
const name = ref('王江')
</script>
```

```vue
<!-- 
   注意点：这个脚本块将被预处理为组件的 setup() 函数，这意味着它将为每一个组件实例都执行。<script setup> 中的顶层绑定都将自动暴露给模板 
-->
<script setup>
import Son from './components/Son.vue'

const count = ref(0)

function addFn(){
   count.value ++
}

const addFn2 = ()=> {
   count.value += 10
}
</script>
```

**优点**

- 解决了vue2的data和methods方法相距太远，无法组件之间复用
- 提供了script标签引入共同业务逻辑的代码块，顺序执行
- script变成setup函数，默认暴露给模版
- 组件直接挂载，无需注册



### 三、定义响应式数据

- ref本质也是reactive，ref(obj)等价于reactive({value: obj})。

- vue3中实现响应式数据的方法是就是使用ref和reactive，所谓响应式就是界面和数据同步，能实现实时更新。

- vue2中响应式是通过defineProperty实现的，vue3中是通过ES6的Proxy来实现的。

#### 1、ref（实战用的较多）

ref的参数可以是基本数据类型，也可以是引用数据类型。ref会把参数加工成一个响应式对象。如果使用的是基本类型响应式依赖Object.defineProperty( )，如果ref使用的是引用类型，底层ref会借助reactive的proxy 定义响应式。

```vue
<template>
   <div class="app-container">
      <!-- 在template里 可以直接使用ref定义的数据 -->
      {{ num }}
      {{ obj }}
      {{ info }}

      <button @click="index++">修改</button>
      {{ index }}
   </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
/*
   定义响应式数据
   + ref()
      => 可以定义基本数据类型
      => 可以定义引用数据类型
      => ref 定义的数据，使用的时候需要加 .value，因为 ref() 函数把数据包装成了响应式对象，把值是存储在 value 属性里面的 

   + reactive()
      => 只能定义引用数据
      => 使用不需要加 .value
      => reactive 定义出来的基本数据类型，是没有响应式的功能的，所以不要使用它定义基本数据类型

   + 工作中推荐使用 ref()
*/

// 定义基本数据，使用 ref 对象把 传入的基本数据类型包装成一个对象返回的num的值 是一个对象
const num = ref(10)

// 定义引用数据类型
const obj = ref({ a: 1, b: 2 })
console.log(num.value, obj.value.a, obj.value.b)


// 定义引用数据类型
const info = reactive({ name: '张三', age: 18 })
console.log(info.name, info.age)

const index = reactive(10)
// ref 的值 挂在在对象的value属性，不能整个修改index的值
console.log(index)

</script>

<style scoped></style>

```

> ref和reactive都属于递归监听，也就是数据的每一层都是响应式的，如果数据量比较大，非常消耗性能，非递归监听只会监听数据的第一层

##### ref 创建：基本类型的响应式数据

- **作用：**定义响应式变量。
- **语法：**`let xxx = ref(初始值)`。
- **返回值：**一个`RefImpl`的实例对象，简称`ref对象`或`ref`，`ref`对象的`value`**属性是响应式的**。
- **注意点：**
  - `JS`中操作数据需要：`xxx.value`，但模板中不需要`.value`，直接使用即可。
  - 对于`let name = ref('张三')`来说，`name`不是响应式的，`name.value`是响应式的。

```vue
<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref} from 'vue'
  // name和age是一个RefImpl的实例对象，简称ref对象，它们的value属性是响应式的。
  let name = ref('张三')
  let age = ref(18)
  // tel就是一个普通的字符串，不是响应式的
  let tel = '13888888888'

  function changeName(){
    // JS中操作ref对象时候需要.value
    name.value = '李四'
    console.log(name.value)

    // 注意：name不是响应式的，name.value是响应式的，所以如下代码并不会引起页面的更新。
    // name = ref('zhang-san')
  }
  function changeAge(){
    // JS中操作ref对象时候需要.value
    age.value += 1 
    console.log(age.value)
  }
  function showTel(){
    alert(tel)
  }
</script>
```

##### ref 创建：对象类型的响应式数据

- 其实`ref`接收的数据可以是：**基本类型**、**对象类型**。
- 若`ref`接收的是对象类型，内部其实也是调用了`reactive`函数。

```vue
<template>
  <div class="person">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <h2>测试：{{obj.a.b.c.d}}</h2>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeFirstGame">修改第一游戏</button>
    <button @click="test">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'

// 数据
let car = ref({ brand: '奔驰', price: 100 })
let games = ref([
  { id: 'ahsgdyfa01', name: '英雄联盟' },
  { id: 'ahsgdyfa02', name: '王者荣耀' },
  { id: 'ahsgdyfa03', name: '原神' }
])
let obj = ref({
  a:{
    b:{
      c:{
        d:666
      }
    }
  }
})

console.log(car)

function changeCarPrice() {
  car.value.price += 10
}
function changeFirstGame() {
  games.value[0].name = '流星蝴蝶剑'
}
function test(){
  obj.value.a.b.c.d = 999
}
</script>
```



#### 2、reactive

reactive的参数必须是一个对象，包括json数据和数组都可以，否则不具有响应式

如果给reactive传递了其他对象（如时间对象），默认情况下修改对象界面不会自动更新，如果想更新，可以通过给对象重新赋值来解决。

```vue
<template>
  <div>
    {{ info.name }} -- {{ info.age }}
    <input type="text" onChange="inputChange" />
  </div>
</template>
<script setup>
// reactive属于vue3 新增的组合式api之一 需要从vue中引入
import { reactive } from "vue";

/**
 * 使用 reactive 定义 响应式数据
 * info 改变数据会重新渲染
 *
 * 注意：不能把整个info的值替换
 */
const info = reactive({ name: "张三", age: 18 });

/**
 *
 * 每次输入框变化，修改info对象里面的name属性
 */
const inputChange = (event) => {
  /**
   * 修改后页面会重新渲染
   * 注意：这里的数据流向和之前一致
   * 数据修改是同步，视图渲染是异步
   */
  info.name = event.target.value;
};
</script>
```

##### reactive 创建：对象类型的响应式数据

- **作用：**定义一个**响应式对象**（基本类型不要用它，要用`ref`，否则报错）
- **语法：**`let 响应式对象= reactive(源对象)`。
- **返回值：**一个`Proxy`的实例对象，简称：响应式对象。
- **注意点：**`reactive`定义的响应式数据是“深层次”的。

```vue
<template>
  <div class="person">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <h2>测试：{{obj.a.b.c.d}}</h2>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeFirstGame">修改第一游戏</button>
    <button @click="test">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive } from 'vue'

// 数据
let car = reactive({ brand: '奔驰', price: 100 })
let games = reactive([
  { id: 'ahsgdyfa01', name: '英雄联盟' },
  { id: 'ahsgdyfa02', name: '王者荣耀' },
  { id: 'ahsgdyfa03', name: '原神' }
])
let obj = reactive({
  a:{
    b:{
      c:{
        d:666
      }
    }
  }
})

function changeCarPrice() {
  car.price += 10
}
function changeFirstGame() {
  games[0].name = '流星蝴蝶剑'
}
function test(){
  obj.a.b.c.d = 999
}
</script>
```

##### ref 对比 reactive

宏观角度看：

> 1. `ref`用来定义：**基本类型数据**、**对象类型数据**；
>
> 2. `reactive`用来定义：**对象类型数据**。

- 区别：

> 1. `ref`创建的变量必须使用`.value`（可以使用`volar`插件自动添加`.value`）。
>
> 2. `reactive`重新分配一个新对象，会**失去**响应式（可以使用`Object.assign`去整体替换）。

- 使用原则：

> 1. 若需要一个基本类型的响应式数据，必须使用`ref`。
> 2. 若需要一个响应式对象，层级不深，`ref`、`reactive`都可以。
> 3. 若需要一个响应式对象，且层级较深，推荐使用`reactive`。



#### toRefs 与 toRef

- 作用：将一个响应式对象中的每一个属性，转换为`ref`对象。
- 备注：`toRefs`与`toRef`功能一致，但`toRefs`可以批量转换。
- 语法如下：

```vue
<template>
  <div class="person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>性别：{{person.gender}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeGender">修改性别</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive,toRefs,toRef} from 'vue'

  // 数据
  let person = reactive({name:'张三', age:18, gender:'男'})
	
  // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
  let {name,gender} =  toRefs(person)
	
  // 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
  let age = toRef(person,'age')

  // 方法
  function changeName(){
    name.value += '~'
  }
  function changeAge(){
    age.value += 1
  }
  function changeGender(){
    gender.value = '女'
  }
</script>
```





#### 3、shallowRef和shallowReactive

ref和reactive定义的数据每一层都是响应式数据，使用shallowRef和shallowReactive后只有第一层数据具备响应式。

语法和ref和reactive一致

##### 1、shallowRef

1. 作用：创建一个响应式数据，但只对顶层属性进行响应式处理。

2. 用法：

   ```js
   let myVar = shallowRef(initialValue);
   ```

3. 特点：只跟踪引用值的变化，不关心值内部的属性变化。

```vue
<template>
  <div>
    {{ infos.name }}

    <button @click="updateChildName">修改子集</button>
    {{ num }} 
    <button @click="add">+1</button>
  </div>
</template>
<script setup>
import { shallowRef, triggerRef } from "vue";

const infos = shallowRef({
  name: "张三",
});

const num = shallowRef(1);

const updateChildName = () => {
  // 这一行视图不会改变
  infos.value.name = "李四";
  /**
   * 如果用了shallowRef 还想让界面刷新可以使用
   * 传入要更新的数据
   * 🤔 看场景使用，一般情况下没有太大必要
   */
  triggerRef(infos)
};

const add = () => {
  // 可以正常触发
  num.value += 1
}

</script>
```

##### 2、shallowReactive

1. 作用：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的

2. 用法：

   ```js
   const myObj = shallowReactive({ ... });
   ```

3. 特点：对象的顶层属性是响应式的，但嵌套对象的属性不是。

```vue
<template>
  <div>
    {{ infos.name }} -- {{ infos.child.name  }}

    <button @click="updateChildName">修改第一层</button>
    {{ num }}
    <button @click="updateChildName2">修改第二层</button>
  </div>
</template>
<script setup>
import { shallowReactive } from "vue";

const infos = shallowReactive({
  name: "张三",
  child: {
    name: "张三的儿子",
  },
});

const updateChildName = () => {
  // 正常改变
  infos.name = "李四";
};
const updateChildName2 = () => {
  // 无法修改
  infos.child.name = "李四的儿子";
};
</script>
```



```vue
<template>
    <div class="app-container">
       <button @click="obj.info.a = 20">修改 ref 定义的数据</button>
       <button @click="obj.name = '李四'">修改 ref 定义的数据</button>

       {{ obj }}

       <hr/>
       <button @click="index++">修改 shallowRef 定义的数据1</button>
       <button @click="changeData">修改 shallowRef 定义的数据2</button>

       {{ index }}
       {{ obj2 }}
       <hr/>
       <button @click="obj3.info.a = 20">修改 shallowReactive 定义的数据</button>
       <button @click="obj3.name = '陈辰'">修改 shallowReactive 定义的数据</button>
       {{ obj3 }}
    </div>
</template>

<script setup>
import { ref, reactive, shallowRef, shallowReactive, triggerRef } from 'vue'
/*
   定义响应式数据
   + ref 和 reactive 定义的数据每一层都是响应式数据
   + 使用 shallowRef 和 shallowReactive 后只有第一层数据具备响应式
   + shallowRef 定义基本数据类型的，如果定义的引用数据类型，如果想要数据更新必须使用 triggerRef() 函数，手动更新视图
*/ 

const obj = ref({id: 1, name: '张三', info: {a: 1, b: 2}})

const index = shallowRef(10)

const obj2 = shallowRef({name: '邓为'})

const changeData = ()=> {
   obj2.value.name = '法外狂徒张三'
   triggerRef(obj2)
}

const obj3 = shallowReactive({id: 1, name: '王江', info: {a: 1, b: 2}})

</script>

<style scoped>

</style>
```

**总结**

> 通过使用 [`shallowRef()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 和 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 来绕开深度响应。浅层式 `API` 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。



#### 4、toRaw与markRaw

##### toRaw

作用：用于获取一个响应式对象的原始对象， `toRaw` 返回的对象不再是响应式的，不会触发视图更新。

> 官网描述：这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。

> 何时使用？ —— 在需要将响应式对象传递给非 `Vue` 的库或外部系统时，使用 `toRaw` 可以确保它们收到的是普通对象



toRaw 用于获取一个响应式对象的原始对象。

它返回的是未经过 Vue 响应式系统包装的原始数据。

场景：

- 当你需要操作原始数据，而不是响应式代理对象时。
- 用于将响应式对象传递给第三方库，这些库可能不支持或不需要响应式对象

```js
import { reactive,toRaw,markRaw,isReactive } from "vue";

/* toRaw */
// 响应式对象
let person = reactive({name:'tony',age:18})
// 原始对象
let rawPerson = toRaw(person)


/* markRaw */
let citysd = markRaw([
  {id:'asdda01',name:'北京'},
  {id:'asdda02',name:'上海'},
  {id:'asdda03',name:'天津'},
  {id:'asdda04',name:'重庆'}
])
// 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
let citys2 = reactive(citys)
console.log(isReactive(person))
console.log(isReactive(rawPerson))
console.log(isReactive(citys))
console.log(isReactive(citys2))
```



```vue
<template>
  <div>
    <button @click="update">+1</button>
    {{ info.name }}
    <button @click="rawUpdate">取消响应式修改</button>
  </div>
</template>
<script setup>
import { reactive, toRaw } from "vue";

const info = reactive({
  name: "张三",
});

const update = () => {
  info.name = info.name + 1;
};

const rawUpdate = () => {
  /**
   * 取消响应式
   * 注意：toRaw 只能用作引用数据类型
   */
  const a = toRaw(info);
  
  // 后续修改失去作用
  a.name = '李四'
};
</script>
```

##### markRaw

作用：标记一个对象，使其**永远不会**变成响应式的。

> 例如使用`mockjs`时，为了防止误把`mockjs`变为响应式对象，可以使用 `markRaw` 去标记`mockjs`



即使这个对象被包含在一个响应式对象中，它也不会成为响应式的，也不会触发视图更新。

场景：避免某些数据意外地变成响应式，例如第三方库返回的数据或复杂的数据结构。

```js
/* markRaw */
let citys = markRaw([
  {id:'asdda01',name:'北京'},
  {id:'asdda02',name:'上海'},
  {id:'asdda03',name:'天津'},
  {id:'asdda04',name:'重庆'}
])
// 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
let citys2 = reactive(citys)
```



```vue
<template>
    <div class="app-container">
       
    </div>
</template>

<script setup>
import { ref, reactive, toRaw, markRaw } from 'vue'
/*
   toRaw()
   + toRaw 用于获取一个响应式对象的原始对象
   + 可以把 响应数据 的响应式给取消掉
   markRaw()
   + 用于标记一个对象，使其永远不会被转换成响应式对象
*/ 
// const obj1 = ref({a: 1, b: 2})
// console.log(toRaw(obj1.value))

const obj2 = markRaw({a: 1, b: 2})
const res = ref(obj2)
console.log(res.value)

</script>

<style scoped>

</style>
```



#### readonly 与 shallowReadonly

##### readonly

1. 作用：用于创建一个对象的深只读副本。

2. 用法：

   ```js
   const original = reactive({ ... });
   const readOnlyCopy = readonly(original);
   ```

3. 特点：

   * 对象的所有嵌套属性都将变为只读。
   * 任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。

4. 应用场景：

   * 创建不可变的状态快照。
   * 保护全局状态或配置不被修改。

##### shallowReadonly

1. 作用：与 `readonly` 类似，但只作用于对象的顶层属性。

2. 用法：

   ```js
   const original = reactive({ ... });
   const shallowReadOnlyCopy = shallowReadonly(original);
   ```

3. 特点：

   * 只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。

   * 适用于只需保护对象顶层属性的场景。



### 四、组件传值 props



```js
// 定义一个接口，限制每个Person对象的格式
export interface PersonInter {
id:string,
name:string,
 age:number
}

// 定义一个自定义类型Persons
export type Persons = Array<PersonInter>
```

`App.vue`中代码：

```vue
<template>
	<Person :list="persons"/>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import {reactive} from 'vue'
 import {type Persons} from './types'

 let persons = reactive<Persons>([
  {id:'e98219e12',name:'张三',age:18},
   {id:'e98219e13',name:'李四',age:19},
    {id:'e98219e14',name:'王五',age:20}
  ])
</script>

```

`Person.vue`中代码：

```Vue
<template>
<div class="person">
<ul>
  <li v-for="item in list" :key="item.id">
     {{item.name}}--{{item.age}}
   </li>
 </ul>
</div>
</template>

<script lang="ts" setup name="Person">
import {defineProps} from 'vue'
import {type PersonInter} from '@/types'

// 第一种写法：仅接收
// const props = defineProps(['list'])

// 第二种写法：接收+限制类型
// defineProps<{list:Persons}>()

// 第三种写法：接收+限制类型+指定默认值+限制必要性
let props = withDefaults(defineProps<{list?:Persons}>(),{
  list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
})
console.log(props)
</script>
```



#### 1、父传子

父组件

```vue
<template>
    <div class="app-container">
        <h1>父组件</h1>
        <Son a="10" b="20" :info="info"/>
    </div>
</template>

<script setup>
import Son from './components/Son.vue'

import { ref, reactive } from 'vue'

const info = ref({id: 1, name: '张三', age: 18})

</script>

<style scoped>
h1{
   color: gold;
}
</style>
```

子组件

```vue
<template>
    <div>
        <h3>子组件</h3>
        <!-- {{ a }}
        {{ b }} -->

        {{ info }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
// const props = defineProps(['a', 'b'])
// console.log(props.a, props.b)


const props = defineProps({
    info: {
        type: Object,
        required: false,
        default: {a: 1, b: 2}
    }
})
</script>
```

#### 2、子传父

父组件

```vue
<template>
    <div class="app-container">
        <h1>父组件</h1>
        <Son @getData="fn" @getData2="fn2"/>
    </div>
</template>

<script setup>
import Son from './components/Son.vue'

const fn = (payload)=> {
   console.log(payload)
}

const fn2 = (payload)=> {
   console.log(payload)
}
</script>

<style scoped>
h1{
   color: gold;
}
</style>
```

子组件

```vue
<template>
    <div>
        <h3>子组件</h3>
        <!-- emit() 参数1：表示表示使用的事件名称，给父组件接收数据使用，参数2：表示传递给父组件的数据 -->
        <button @click="emit('getData', '来自儿子的家书！')">发送数据1</button>
        <button @click="emit('getData2', '1000万')">发送数据2</button>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

// 参数：表示自定义的事件名称，给父组件接收数据使用
const emit = defineEmits(['getData', 'getData2'])

</script>

<style scoped>
h3{
    color: orange;
}
</style>

```

#### 3、祖孙传值

上级组件

```vue
<template>
    <div class="app-container">
        <h1>父组件</h1>
        <Son />
    </div>
</template>

<script setup>
import Son from './components/Son.vue'

import { provide } from 'vue'

provide('info', {a: 1, b: 2})

provide('name', '王江')

</script>

<style scoped>
h1{
   color: gold;
}
</style>
```

孙级组件

```vue
<template>
    <div>
        <h3>子组件</h3>
        {{ obj }}
        {{ name }}
    </div>
</template>

<script setup>
import { inject } from 'vue'

// 注意点：和 props 接收不一样，需要使用返回值。接收数据的参数可以是数组，也可以是字符串
const obj = inject('info')
const name = inject(['name'])

</script>

<style scoped>
h3{
    color: orange;
}
</style>

```



### 五、计算属性

接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref) 对象。也就是说，如果我们观察的是

ref或者reactive数据，返回后的数据不能在修改。

```vue
<template>
  <div>{{ plusOne }}</div>
</template>
<script setup>
import { computed } from "vue";

// 定义一个计算属性
const count = ref(1)
const plusOne = computed(() => count.value + 1)

// 但是注意computed返回的数据是不可变数据
// plusOne.value++ // 错误
</script>
```

**如果我们想后面在修改则可以传入** **get** **和** **set** **函数的对象可用来创建可写的 ref 对象**

```vue
<template>
  <div>{{ plusOne }}</div>
</template>
<script setup>
import { computed, ref } from "vue";
const count = ref(1)
const plusOne = computed({
  /**
   * 劫持数据，每次获取的时候，都会自动给数据+1
   * 比如 现在template里面的plusOne就是1000
   * 注意要有返回值,返回的值就是我们拿到的结果
   * 如果说对get不想做操作那么就直接把我们要返回的值返回
   */
  get: () => {
    return 1000
  },
  /**
   * 每次修改的时候数据-1
   * 不需要返回值 这个val就是我们plusOne的值
   * 如果说不想劫持则可以直接默认赋值
   */
  set: val => {
    count.value = val - 1
  }
})
plusOne.value += 1
/**
 * 这个值是1000，以为我们在劫持了他的数据修改
 * 所以我们+1 然后 数据再去件-1，所以相当于没变
 */
console.log(plusOne.value)
</script>
```



```vue
<template>
    <div class="app-container">
        {{ sum }}
        <button @click="add = 60">修改计算属性</button>
        {{ add }}
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const list = ref([1, 2, 3, 10, 8, 10, 12])

const sum = computed(()=> list.value.reduce((total, item)=>{
    return total += item
}, 0))


const num = ref(10)

const add = computed({
    get(){
        return num.value + 10
    },
    set(value){
        num.value += value
    }
})
</script>

<style scoped>
h1{
   color: gold;
}
</style>
```

```vue
<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{fullName}}</span> <br>
    <button @click="changeFullName">全名改为：li-si</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import {ref,computed} from 'vue'

  let firstName = ref('zhang')
  let lastName = ref('san')

  // 计算属性——只读取，不修改
  /* let fullName = computed(()=>{
    return firstName.value + '-' + lastName.value
  }) */


  // 计算属性——既读取又修改
  let fullName = computed({
    // 读取
    get(){
      return firstName.value + '-' + lastName.value
    },
    // 修改
    set(val){
      console.log('有人修改了fullName',val)
      firstName.value = val.split('-')[0]
      lastName.value = val.split('-')[1]
    }
  })

  function changeFullName(){
    fullName.value = 'li-si'
  } 
</script>
```



### 六、watch 与 watchEffect

#### watch

- 作用：监视数据的变化（和`Vue2`中的`watch`作用一致）
- 特点：`Vue3`中的`watch`只能监视以下**四种数据**：

> 1. `ref`定义的数据。
> 2. `reactive`定义的数据。
> 3. 函数返回一个值（`getter`函数）。
> 4. 一个包含上述内容的数组。

用来监听特定的数据源，并在回调函数中执行。

```vue
<template>
  <div>{{ count }}</div>
</template>
<script setup>
import { watch, ref, reactive } from "vue";
const count = ref(1)
const count2 = ref(2)
const info = reactive({ name: '张三' })

/**
 * 监听原始数据类型变化时，可以直接传入
 * 数据里面可以跟多个值，有一个值变化就会触发这个方法
 * 对应的返回值可以使用数据解构出来
 */
watch([count, count2], ([newVal, newVal2], [oldVal, oldVal2]) => {
  console.log(newVal, oldVal)
  console.log(newVal2, oldVal2)
})

setTimeout(() => {
  count.value += 1
  count2.value += 2
}, 1000)

</script>
```

监听对象类型的数据，并且可以传入第三个参数，是个对象deep 是否深度观察immediate立即执行一次

```vue
<template>
  <div>哈哈哈</div>
</template>
<script setup>
import { watch, ref, reactive } from "vue";

const info = reactive({ name: '张三' })
const info2 = reactive({ name: '李四' })

/**
 * 观察一个或者多个对象的变化，要使用函数的方式返回那个对象
 * 如果对象中有属性发生变化就会触发方法
 * 注意：watch默认是惰性的，如果观察对象需要手动在第三个参数加{deep: true}
 */
const stop = watch([() => info, () => info2],
  ([newVal, oldVal], [newVal2, oldVal2]) => {
    console.log(newVal, oldVal)
    console.log(newVal2, oldVal2)
  }, {
  deep: true,
  immediate: true
})

setTimeout(() => {
  info.name = '王五'
  info2.name = '王五2'
}, 1000)

// 如果想移除监听则可以拿到watch的返回，并在合适的时候调用它
stop()

</script>
```



```vue
<template>
    <div class="app-container">
        <!-- 
            <button @click="num++">修改num值</button>
            {{ num }}

            <button @click="index++">修改num值</button>
            {{ index }}

            <hr/>

            <button @click="obj1.age++">修改obj1值</button>
            {{ obj1 }}
            <button @click="obj2.title += '@123'">修改obj2值</button>
            {{ obj2 }} 
         -->
        <button @click="obj3.age++">修改 obj3 的值</button>
        {{ obj3 }}

        <hr/>

        <button @click="obj4.info.a++">修改 obj4 的值</button>
        {{ obj4 }}
    </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'

const num = ref(0)
const index = ref(10)


// 第一种情况：ref() 数据在监听的时候，后面不需要加 value，watch 会自动进行处理
watch(num, (newVal, oldVal)=>{
    console.log(newVal, oldVal)
}) 

// 第二种情况：如果要监听多个数据源的话，可以把数据放在一个数组里面
watch([num, index], ([newVal1, newVal2], [oldVal1, oldVal2])=>{
    console.log(newVal1, oldVal1)
    console.log(newVal2, oldVal2)
}) 

const obj1 = ref({name: '张三', age: 18})
const obj2 = ref({title: '王江学习vue'})

// 第三种情况：如果要监听多个对象的话，数据源必须放在数组里面
// 注意点：监听 ref() 定义的对象，需要在数据后面加 `.value`, 需要开启深度监听
watch([()=> obj1.value, ()=> obj2.value], ([newVal1, newVal2], [oldVal1, oldVal2])=>{
    console.log(newVal1, oldVal1)
    console.log(newVal2, oldVal2)
}, {
    deep: true
}) 

const obj1 = reactive({name: '张三', age: 18})
const obj2 = reactive({title: '王江学习vue'})

// 注意点：监听 reactive() 定义的对象，不需要后面加 `.value`
watch([()=> obj1, ()=> obj2], ([newVal1, newVal2], [oldVal1, oldVal2])=>{
    console.log(newVal1, oldVal1)
    console.log(newVal2, oldVal2)
}, {
    deep: true,
    immediate: true
}) 

const obj3 = ref({name: '张三', age: 18})
watch(()=> obj3.value.age, (newVal, oldVal)=>{
    console.log(newVal, oldVal)
}, {
    // deep: true
})

// 第四种情况：如果监听的属性是一个基本数据类型，不需要开启深度监听，如果监听的属性是一个对象的话，必须开启深度监听
const obj4 = reactive({name: '张三', age: 18, info: {a: 1}})
watch(()=> obj4.info, (newVal, oldVal)=>{
    console.log(newVal, oldVal)
}, {
    deep: true
})

</script>

<style scoped>
h1{
   color: gold;
}
</style>
```

我们在`Vue3`中使用`watch`的时候，通常会遇到以下几种情况：

**情况一**

监视`ref`定义的【基本类型】数据：直接写数据名即可，监视的是其`value`值的改变。

```vue
<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue'
  // 数据
  let sum = ref(0)
  // 方法
  function changeSum(){
    sum.value += 1
  }
  // 监视，情况一：监视【ref】定义的【基本类型】数据
  const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了',newValue,oldValue)
    if(newValue >= 10){
      stopWatch()
    }
  })
</script>
```

**情况二**

监视`ref`定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】，若想监视对象内部的数据，要手动开启深度监视。

> 注意：
>
> * 若修改的是`ref`定义的对象中的属性，`newValue` 和 `oldValue` 都是新值，因为它们是同一个对象。
>
> * 若修改整个`ref`定义的对象，`newValue` 是新值， `oldValue` 是旧值，因为不是同一个对象了。

```vue
<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue'
  // 数据
  let person = ref({
    name:'张三',
    age:18
  })
  // 方法
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name:'李四',age:90}
  }
  /* 
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） 
  */
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  },{deep:true})
  
</script>
```

**情况三**

监视`reactive`定义的【对象类型】数据，且默认开启了深度监视。

```vue
<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'
  // 数据
  let person = reactive({
    name:'张三',
    age:18
  })
  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })
  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changePerson(){
    Object.assign(person,{name:'李四',age:80})
  }
  function test(){
    obj.a.b.c = 888
  }

  // 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  })
  watch(obj,(newValue,oldValue)=>{
    console.log('Obj变化了',newValue,oldValue)
  })
</script>
```

**情况四**

监视`ref`或`reactive`定义的【对象类型】数据中的**某个属性**，注意点如下：

1. 若该属性值**不是**【对象类型】，需要写成函数形式。
2. 若该属性值是**依然**是【对象类型】，可直接编，也可写成函数，建议写成函数。

结论：监视的要是对象里的属性，那么最好写函数式，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视。

```vue
<template>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  // 数据
  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })
  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car = {c1:'雅迪',c2:'爱玛'}
  }

  // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
  /* watch(()=> person.name,(newValue,oldValue)=>{
    console.log('person.name变化了',newValue,oldValue)
  }) */

  // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
  watch(()=>person.car,(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
  },{deep:true})
</script>
```

 **情况五**

监视上述的多个数据

```vue
<template>
  <div class="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  // 数据
  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })
  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car = {c1:'雅迪',c2:'爱玛'}
  }

  // 监视，情况五：监视上述的多个数据
  watch([()=>person.name,person.car],(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
  },{deep:true})

</script>
```



#### watchEffect

为了根据响应式状态 自动应用 和 重新应用 副作用，我们可以使用 watchEffect 函数。它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数，简单来说，我们写的函数，会立即执行一次，然后每次里面的数据发生变化后再出发该函数。

* 官网：立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数。

* `watch`对比`watchEffect`

  > 1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同
  >
  > 2. `watch`：要明确指出监视的数据
  >
  > 3. `watchEffect`：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。

```vue
<template>
  <div>{{ count }}</div>
</template>
<script setup>
import { watchEffect, ref, reactive } from "vue";
const count = ref(1)
const info = reactive({ name: '张三' })
/**
 * 创建后会立即执行，然后每次里面使用的响应式数据发生改变的时候
 * 注意是响应式数据
 * 该函数会再再次执行
 */
watchEffect(() => {
  console.log(count.value)
  console.log(info.name)
})

setTimeout(() => {
  count.value += 1
}, 100)

setTimeout(() => {
  info.name = '李四'
}, 2000)

</script>
```



```vue
<template>
    <div class="app-container">
        <button @click="age++">修改年龄</button>
        <p> {{ age }} 岁</p>
        <button @click="height++">修改身高</button>
        <p>{{ height }} cm</p>
        <button @click="weight++">修改体重</button>
        <p>{{ weight }} 斤</p>
    </div>
</template>

<script setup>
import { ref, watch, reactive, watchEffect } from 'vue'

const age = ref(16)
const height = ref(150)
const weight = ref(100)

// watchEffect() 不需要你具体要监听的数据源，可以根据你使用了那个数据，满足条件就会自动进行监听
watchEffect(()=>{
    if(age.value >= 18){
        console.log('你成年了，可以独立了')
    }
    if(weight.value>=120){
        console.log('改减肥了')
    }
})
</script>

<style scoped>

</style>
```



```vue
<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    <h2 id="demo">水温：{{temp}}</h2>
    <h2>水位：{{height}}</h2>
    <button @click="changePrice">水温+1</button>
    <button @click="changeSum">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch,watchEffect} from 'vue'
  // 数据
  let temp = ref(0)
  let height = ref(0)

  // 方法
  function changePrice(){
    temp.value += 10
  }
  function changeSum(){
    height.value += 1
  }

  // 用watch实现，需要明确的指出要监视：temp、height
  watch([temp,height],(value)=>{
    // 从value中获取最新的temp值、height值
    const [newTemp,newHeight] = value
    // 室温达到50℃，或水位达到20cm，立刻联系服务器
    if(newTemp >= 50 || newHeight >= 20){
      console.log('联系服务器')
    }
  })

  // 用watchEffect实现，不用
  const stopWtach = watchEffect(()=>{
    // 室温达到50℃，或水位达到20cm，立刻联系服务器
    if(temp.value >= 50 || height.value >= 20){
      console.log(document.getElementById('demo')?.innerText)
      console.log('联系服务器')
    }
    // 水温达到100，或水位达到50，取消监视
    if(temp.value === 100 || height.value === 50){
      console.log('清理了')
      stopWtach()
    }
  })
</script>
```



#### watch和watchEffect的区别

1、watchEffect不需要指定监听的属性，自动收集依赖；watch需要指定监听的属性。

2、watchEffect拿不到旧值；watch可以拿到旧值。

3、watchEffect在组件第一次就会收集依赖，然后收集到的依赖发生了变化，回调才会再次执行；watch就不是了。一开始就指定了依赖。



### 七、获取元素 标签的 ref 属性

作用：用于注册模板引用。

> * 用在普通`DOM`标签上，获取的是`DOM`节点。
>
> * 用在组件标签上，获取的是组件实例对象。

用在普通`DOM`标签上：

```vue
<template>
  <div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <input type="text" ref="inpt"> <br><br>
    <button @click="showLog">点我打印内容</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref} from 'vue'
	
  let title1 = ref()
  let title2 = ref()
  let title3 = ref()

  function showLog(){
    // 通过id获取元素
    const t1 = document.getElementById('title1')
    // 打印内容
    console.log((t1 as HTMLElement).innerText)
    console.log((<HTMLElement>t1).innerText)
    console.log(t1?.innerText)
    
		/************************************/
		
    // 通过ref获取元素
    console.log(title1.value)
    console.log(title2.value)
    console.log(title3.value)
  }
</script>
```

用在组件标签上：

```vue
<!-- 父组件App.vue -->
<template>
  <Person ref="ren"/>
  <button @click="test">测试</button>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let ren = ref()

  function test(){
    console.log(ren.value.name)
    console.log(ren.value.age)
  }
</script>


<!-- 子组件Person.vue中要使用defineExpose暴露内容 -->
<script lang="ts" setup name="Person">
  import {ref,defineExpose} from 'vue'
	// 数据
  let name = ref('张三')
  let age = ref(18)
  /****************************/
  /****************************/
  // 使用defineExpose将组件中的数据交给外部
  defineExpose({name,age})
</script>
```



```vue
<template>
    <div class="app-container">
        <div class="box" ref="box"></div>

        <p ref="p">123</p>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, useTemplateRef } from 'vue'

// 获取元素
// 获取元素版本自动进行关联的，是通用的版本
const box = ref(null)

// useTemplateRef() 获取元素，需要 vue.3.5.x 以上版本才能使用
const p = useTemplateRef('p')

// onBeforeMount 挂载前
onBeforeMount(()=>{
    console.log('挂载前')
    
})

// onMounted 挂载后
onMounted(()=>{
    console.log('挂载后')
    console.log(box.value)
    console.log(p.value)
})

// onBeforeUpdate 更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})

// onUpdated 更新后
onUpdated(()=>{
    console.log('更新后')
})

// onBeforeUnmount 取消挂载前
onBeforeUnmount(()=>{
    console.log('取消挂载前')
})

// onUnmounted 取消挂载后
onUnmounted(()=>{
    console.log('取消挂载后')
})
</script>

<style scoped>
.box{
    width: 200px;
    height: 200px;
    background-color: orange;
}
</style>
```



### 八、nextTick异步更新

**组合式**

```vue
<template>
    <div class="app-container">
       <input type="text" v-model="msg" v-if="show" ref="input">
       <span v-else>{{ msg }}</span>
       <button @click="editFn">编辑</button>
       <button @click="show = false">确定</button>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const msg = ref('admin')
const show = ref(false)

// 获取元素
const input = ref(null)

const editFn = async ()=> {
    show.value = true
    // 等待下一次 DOM 更新刷新的工具方法
    await nextTick()
    input.value.focus()
    console.log(input.value)
}
</script>

<style scoped>
button{
    margin: 10px;
}
</style>
```

**选项式**

```vue
<template>
    <div class="app-container">
       <input type="text" v-model="msg" v-if="show" ref="input">
       <span v-else>{{ msg }}</span>
       <button @click="editFn">编辑</button>
       <button @click="show = false">确定</button>
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {
            msg: 'admin',
            show: false,
        }
    },
    methods: {
        editFn(){
            this.show = true
            // this.$nextTick(()=>{
            //     // console.log(this.$refs.input)
            //     this.$refs.input.focus()
            // })

            // this.$nextTick() --- setTimeout()
            setTimeout(()=>{
                this.$refs.input.focus()
            })
        }
    }
}
</script>

<style scoped>
button{
    margin: 10px;
}
</style>
```



### 九、生命周期

组合式api生命周期几乎和选项式一致。注意组合式api是从挂载阶段开始。



* 概念：`Vue`组件实例在创建时要经历一系列的初始化步骤，在此过程中`Vue`会在合适的时机，调用特定的函数，从而让开发者有机会在特定阶段运行自己的代码，这些特定的函数统称为：生命周期钩子

* 规律：

  > 生命周期整体分为四个阶段，分别是：**创建、挂载、更新、销毁**，每个阶段都有两个钩子，一前一后。

* `Vue2`的生命周期

  > 创建阶段：`beforeCreate`、`created`
  >
  > 挂载阶段：`beforeMount`、`mounted`
  >
  > 更新阶段：`beforeUpdate`、`updated`
  >
  > 销毁阶段：`beforeDestroy`、`destroyed`

* `Vue3`的生命周期

  > 创建阶段：`setup`
  >
  > 挂载阶段：`onBeforeMount`、`onMounted`
  >
  > 更新阶段：`onBeforeUpdate`、`onUpdated`
  >
  > 卸载阶段：`onBeforeUnmount`、`onUnmounted`

* 常用的钩子：`onMounted`(挂载完毕)、`onUpdated`(更新完毕)、`onBeforeUnmount`(卸载之前)

```vue
<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<!-- vue3写法 -->
<script lang="ts" setup name="Person">
  import { 
    ref, 
    onBeforeMount, 
    onMounted, 
    onBeforeUpdate, 
    onUpdated, 
    onBeforeUnmount, 
    onUnmounted 
  } from 'vue'

  // 数据
  let sum = ref(0)
  // 方法
  function changeSum() {
    sum.value += 1
  }
  console.log('setup')
  // 生命周期钩子
  onBeforeMount(()=>{
    console.log('挂载之前')
  })
  onMounted(()=>{
    console.log('挂载完毕')
  })
  onBeforeUpdate(()=>{
    console.log('更新之前')
  })
  onUpdated(()=>{
    console.log('更新完毕')
  })
  onBeforeUnmount(()=>{
    console.log('卸载之前')
  })
  onUnmounted(()=>{
    console.log('卸载完毕')
  })
</script>
```



```vue
<template>
  <div>

  </div>
</template>
<script setup>
import {
  onBeforeMount, onMounted,
  onBeforeUpdate, onUpdated, onBeforeUnmount, 
  onUnmounted,
} from 'vue'

/**
 * 在挂载开始之前被调用：相关的 render 函数首次被调用。
 */
onBeforeMount(() => {

})
/**
 * 组件挂载时调用
 */
onMounted(() => {
})

/**
 *  数据更新时调用，发生在虚拟 DOM 打补丁之前。
 * 这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
 */
onBeforeUpdate(() => {

})

/**
 * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
 */
onUpdated(() => {

})

/**
 * 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的
 */
onBeforeUnmount(() => {

})

/**
 *  卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，
 * 所有事件侦听器都被移除，所有子组件实例被卸载
 */
onUnmounted(() => {

})

</script>
```

### 十、自定义hook

- 什么是`hook`？—— 本质是一个函数，把`setup`函数中使用的`Composition API`进行了封装，类似于`vue2.x`中的`mixin`。

- 自定义`hook`的优势：复用代码, 让`setup`中的逻辑更清楚易懂。

示例代码：

- `useSum.ts`中内容如下：

  ```js
  import {ref,onMounted} from 'vue'
  
  export default function(){
    let sum = ref(0)
  
    const increment = ()=>{
      sum.value += 1
    }
    const decrement = ()=>{
      sum.value -= 1
    }
    onMounted(()=>{
      increment()
    })
  
    //向外部暴露数据
    return {sum,increment,decrement}
  }		
  ```

- `useDog.ts`中内容如下：

  ```js
  import {reactive,onMounted} from 'vue'
  import axios,{AxiosError} from 'axios'
  
  export default function(){
    let dogList = reactive<string[]>([])
  
    // 方法
    async function getDog(){
      try {
        // 发请求
        let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        // 维护数据
        dogList.push(data.message)
      } catch (error) {
        // 处理错误
        const err = <AxiosError>error
        console.log(err.message)
      }
    }
  
    // 挂载钩子
    onMounted(()=>{
      getDog()
    })
  	
    //向外部暴露数据
    return {dogList,getDog}
  }
  ```

- 组件中具体使用：

  ```vue
  <template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="increment">点我+1</button>
    <button @click="decrement">点我-1</button>
    <hr>
    <img v-for="(u,index) in dogList.urlList" :key="index" :src="(u as string)"> 
    <span v-show="dogList.isLoading">加载中......</span><br>
    <button @click="getDog">再来一只狗</button>
  </template>
  
  <script lang="ts">
    import {defineComponent} from 'vue'
  
    export default defineComponent({
      name:'App',
    })
  </script>
  
  <script setup lang="ts">
    import useSum from './hooks/useSum'
    import useDog from './hooks/useDog'
  	
    let {sum,increment,decrement} = useSum()
    let {dogList,getDog} = useDog()
  </script>
  ```

    

### 十一、路由

```vue
<template>
<div>
  <div>我是第一个页面</div>
  <button @click="link2">跳转到第二个页面</button>
  </div>
</template>
<script setup>
  // 从vue-router引入 useRouter这个钩子
  import { useRouter } from 'vue-router'
  
  // 初始化这个钩子并赋值给router
  const router = useRouter()
  
  // 跳转到页面2
  const link2 = () => {
    // 使用我们刚声明的router跳转
    router.push('/v11')
  }
  
</script>
```

**页面传值，传值方式和vue2.x的路由一样，也是query和params，但是接收参数的形式有所不同**

传值页

```vue
<template>
  <div>
    <div>我是第一个页面</div>
    <button @click="link2">跳转到第二个页面</button>
  </div>
</template>
<script setup>
// 从vue-router引入 useRouter这个钩子
import { useRouter } from 'vue-router'

// 初始化这个钩子并赋值给router
const router = useRouter()

// 跳转到页面2
const link2 = () => {
  // 跳转你的时候传一个id为1
  router.push('/v11?id=1')
}
</script>
```

接收页

```vue
<template>
  <div>
    我是第二个页面
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

// 初始化useRoute并赋值给route
const route = useRoute()

// 获取query的参数
console.log(route.query)

</script>
```



#### 基本切换效果

- `Vue3`中要使用`vue-router`的最新版本，目前是`4`版本。

- 路由配置文件代码如下：

  ```js
  import {createRouter,createWebHistory} from 'vue-router'
  import Home from '@/pages/Home.vue'
  import News from '@/pages/News.vue'
  import About from '@/pages/About.vue'
  
  const router = createRouter({
  	history:createWebHistory(),
  	routes:[
  		{
  			path:'/home',
  			component:Home
  		},
  		{
  			path:'/about',
  			component:About
  		}
  	]
  })
  export default router
  ```

* `main.ts`代码如下：

  ```js
  import router from './router/index'
  app.use(router)
  
  app.mount('#app')
  ```

- `App.vue`代码如下

  ```vue
  <template>
    <div class="app">
      <h2 class="title">Vue路由测试</h2>
      <!-- 导航区 -->
      <div class="navigate">
        <RouterLink to="/home" active-class="active">首页</RouterLink>
        <RouterLink to="/news" active-class="active">新闻</RouterLink>
        <RouterLink to="/about" active-class="active">关于</RouterLink>
      </div>
      <!-- 展示区 -->
      <div class="main-content">
        <RouterView></RouterView>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup name="App">
    import {RouterLink,RouterView} from 'vue-router'  
  </script>
  ```

**两个注意点**

> 1. 路由组件通常存放在`pages` 或 `views`文件夹，一般组件通常存放在`components`文件夹。
>
> 2. 通过点击导航，视觉效果上“消失” 了的路由组件，默认是被**卸载**掉的，需要的时候再去**挂载**。

#### 路由器工作模式

1. `history`模式

   > 优点：`URL`更加美观，不带有`#`，更接近传统的网站`URL`。
   >
   > 缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有`404`错误。
   >
   > ```js
   > const router = createRouter({
   > 	history:createWebHistory(), //history模式
   > 	/******/
   > })
   > ```

2. `hash`模式

   > 优点：兼容性更好，因为不需要服务器端处理路径。
   >
   > 缺点：`URL`带有`#`不太美观，且在`SEO`优化方面相对较差。
   >
   > ```js
   > const router = createRouter({
   > 	history:createWebHashHistory(), //hash模式
   > 	/******/
   > })
   > ```

#### to的两种写法

```vue
<!-- 第一种：to的字符串写法 -->
<router-link active-class="active" to="/home">主页</router-link>

<!-- 第二种：to的对象写法 -->
<router-link active-class="active" :to="{path:'/home'}">Home</router-link>
```

#### 命名路由

作用：可以简化路由跳转及传参。

给路由规则命名：

```js
routes:[
  {
    name:'zhuye',
    path:'/home',
    component:Home
  },
  {
    name:'xinwen',
    path:'/news',
    component:News,
  },
  {
    name:'guanyu',
    path:'/about',
    component:About
  }
]
```

跳转路由：

```vue
<!--简化前：需要写完整的路径（to的字符串写法） -->
<router-link to="/news/detail">跳转</router-link>

<!--简化后：直接通过名字跳转（to的对象写法配合name属性） -->
<router-link :to="{name:'guanyu'}">跳转</router-link>
```



####  嵌套路由

1. 编写`News`的子路由：`Detail.vue`

2. 配置路由规则，使用`children`配置项：

   ```ts
   const router = createRouter({
     history:createWebHistory(),
   	routes:[
   		{
   			name:'zhuye',
   			path:'/home',
   			component:Home
   		},
   		{
   			name:'xinwen',
   			path:'/news',
   			component:News,
   			children:[
   				{
   					name:'xiang',
   					path:'detail',
   					component:Detail
   				}
   			]
   		},
   		{
   			name:'guanyu',
   			path:'/about',
   			component:About
   		}
   	]
   })
   export default router
   ```

3. 跳转路由（记得要加完整路径）：

   ```vue
   <router-link to="/news/detail">xxxx</router-link>
   <!-- 或 -->
   <router-link :to="{path:'/news/detail'}">xxxx</router-link>
   ```

4. 记得去`Home`组件中预留一个`<router-view>`

   ```vue
   <template>
     <div class="news">
       <nav class="news-list">
         <RouterLink v-for="news in newsList" :key="news.id" :to="{path:'/news/detail'}">
           {{news.name}}
         </RouterLink>
       </nav>
       <div class="news-detail">
         <RouterView/>
       </div>
     </div>
   </template>
   ```

   

#### 路由传参

##### query参数

   1. 传递参数

      ```vue
      <!-- 跳转并携带query参数（to的字符串写法） -->
      <router-link to="/news/detail?a=1&b=2&content=欢迎你">
      	跳转
      </router-link>
      				
      <!-- 跳转并携带query参数（to的对象写法） -->
      <RouterLink 
        :to="{
          //name:'xiang', //用name也可以跳转
          path:'/news/detail',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }
        }"
      >
        {{news.title}}
      </RouterLink>
      ```

   2. 接收参数：

      ```js
      import {useRoute} from 'vue-router'
      const route = useRoute()
      // 打印query参数
      console.log(route.query)
      ```

##### params参数

   1. 传递参数

      ```vue
      <!-- 跳转并携带params参数（to的字符串写法） -->
      <RouterLink :to="`/news/detail/001/新闻001/内容001`">{{news.title}}</RouterLink>
      				
      <!-- 跳转并携带params参数（to的对象写法） -->
      <RouterLink 
        :to="{
          name:'xiang', //用name跳转
          params:{
            id:news.id,
            title:news.title,
            content:news.title
          }
        }"
      >
        {{news.title}}
      </RouterLink>
      ```

   2. 接收参数：

      ```js
      import {useRoute} from 'vue-router'
      const route = useRoute()
      // 打印params参数
      console.log(route.params)
      ```

> 备注1：传递`params`参数时，若使用`to`的对象写法，必须使用`name`配置项，不能用`path`。
>
> 备注2：传递`params`参数时，需要提前在规则中占位。

#### 路由的props配置

作用：让路由组件更方便的收到参数（可以将路由参数作为`props`传给组件）

```js
{
	name:'xiang',
	path:'detail/:id/:title/:content',
	component:Detail,

  // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
  // props:{a:1,b:2,c:3}, 

  // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
  // props:true
  
  // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
  props(route){
    return route.query
  }
}
```

#### replace属性

  1. 作用：控制路由跳转时操作浏览器历史记录的模式。

  2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```：

     - ```push```是追加历史记录（默认值）。
     - `replace`是替换当前记录。

  3. 开启`replace`模式：

     ```vue
     <RouterLink replace .......>News</RouterLink>
     ```

#### 编程式导航

路由组件的两个重要的属性：`$route`和`$router`变成了两个`hooks`

```js
import {useRoute,useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route.query)
console.log(route.parmas)
console.log(router.push)
console.log(router.replace)
```

#### 重定向

1. 作用：将特定的路径，重新定向到已有路由。

2. 具体编码：

   ```js
   {
       path:'/',
       redirect:'/about'
   }
   ```



# 三、pinia状态管理

pinia 是一种状态管理，和vuex类似

[起始](https://github.com/vuejs/pinia/commit/06aeef54e2cad66696063c62829dac74e15fd19e)于 2019 年 11 月左右的一次实验，其目的是设计一个拥有[组合式 API](https://github.com/vuejs/composition-api) 的 Vue 状态管理库。从那时起，我们就倾向于同时支持 Vue 2 和 Vue 3，并且不强制要求开发者使用组合式 API，我们的初心至今没有改变。

为什么你应该使用 Pinia？

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：

- Devtools 支持

- - 追踪 actions、mutations 的时间线
  - 在组件中展示它们所用到的 Store
  - 让调试更容易的 Time travel

- 热更新

- - 不必重载页面即可修改 Store
  - 开发时可保持当前的 State

- 插件：可通过插件扩展 Pinia 功能
- 为 JS 开发者提供适当的 TypeScript 支持以及**自动补全**功能。
- 支持服务端渲染



在Pinia中有三个部分，state,action,getters.他们分别对应着下面的内容

state ---> 数据存储的对象，可以把所有数据存储在state函数返回的对象上，可以理解为vue3中的setup函数，返回对象数据

action--->action是一个对象，里面可以存储所有全局调用的方法函数，每个方法中this都是可以访问到当前state中的数据的

getters--->getters是一个对象，里面可以写方法，可以理解为一个getter方法，函数名就是getter属性名，这是一个属性，但是只能获取不能设置值。

第一种类似选项式：

```js
import { defineStore } from 'pinia'

export const useCounterStore=defineStore("counter",{
  state:()=>{
    return {sum:1}
  },
  getters:{
     counts:(state)=>state.sum*2,
  },
  actions:{
    add(){
      this.sum++;
    }
  }
})
```

第二种类似于组合式：

```js
import {ref, computed} from "vue";
import { defineStore } from 'pinia'

export const useCounterStore=defineStore("counter",()=>{
  const sum=ref(1);
  const add=()=>{
    sum.value++;
  }
  const counts=computed(()=>{
    return sum.value*2;
  })
  return {
    sum,
    add,
    counts
  }
})
```

在使用的时候我们可以这样做

```vue
<template>
</template>
<script setup lang="ts">
  import {useCounterStore} from  "@/stores/counter";
  import { computed } from "vue";
  var userStore = useCounterStore();
  console.log(userStore.sum)
  console.log(userStore.counts);
  userStore.add();
  console.log(userStore.sum);
</script>

<style scoped>

</style>
```



## 搭建 pinia 环境

第一步：`npm install pinia`

第二步：操作`src/main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

/* 引入createPinia，用于创建pinia */
import { createPinia } from 'pinia'

/* 创建pinia */
const pinia = createPinia()
const app = createApp(App)

/* 使用插件 */{}
app.use(pinia)
app.mount('#app')
```

此时开发者工具中已经有了`pinia`选项。

## 存储+读取数据

1. `Store`是一个保存：**状态**、**业务逻辑** 的实体，每个组件都可以**读取**、**写入**它。

2. 它有三个概念：`state`、`getter`、`action`，相当于组件中的： `data`、 `computed` 和 `methods`。

3. 具体编码：`src/store/count.ts`

   ```ts
   // 引入defineStore用于创建store
   import {defineStore} from 'pinia'
   
   // 定义并暴露一个store
   export const useCountStore = defineStore('count',{
     // 动作
     actions:{},
     // 状态
     state(){
       return {
         sum:6
       }
     },
     // 计算
     getters:{}
   })
   ```

4. 具体编码：`src/store/talk.ts`

   ```js
   // 引入defineStore用于创建store
   import {defineStore} from 'pinia'
   
   // 定义并暴露一个store
   export const useTalkStore = defineStore('talk',{
     // 动作
     actions:{},
     // 状态
     state(){
       return {
         talkList:[
           {id:'yuysada01',content:'你今天有点怪，哪里怪？怪好看的！'},
        		{id:'yuysada02',content:'草莓、蓝莓、蔓越莓，你想我了没？'},
           {id:'yuysada03',content:'心里给你留了一块地，我的死心塌地'}
         ]
       }
     },
     // 计算
     getters:{}
   })
   ```

5. 组件中使用`state`中的数据

   ```vue
   <template>
     <h2>当前求和为：{{ sumStore.sum }}</h2>
   </template>
   
   <script setup lang="ts" name="Count">
     // 引入对应的useXxxxxStore	
     import {useSumStore} from '@/store/sum'
     
     // 调用useXxxxxStore得到对应的store
     const sumStore = useSumStore()
   </script>
   ```

   ```vue
   <template>
   	<ul>
       <li v-for="talk in talkStore.talkList" :key="talk.id">
         {{ talk.content }}
       </li>
     </ul>
   </template>
   
   <script setup lang="ts" name="Count">
     import axios from 'axios'
     import {useTalkStore} from '@/store/talk'
   
     const talkStore = useTalkStore()
   </script>
   ```

   

## 修改数据(三种方式)

1. 第一种修改方式，直接修改

   ```ts
   countStore.sum = 666
   ```

2. 第二种修改方式：批量修改

   ```ts
   countStore.$patch({
     sum:999,
     school:'atguigu'
   })
   ```

3. 第三种修改方式：借助`action`修改（`action`中可以编写一些业务逻辑）

   ```js
   import { defineStore } from 'pinia'
   
   export const useCountStore = defineStore('count', {
     /*************/
     actions: {
       //加
       increment(value:number) {
         if (this.sum < 10) {
           //操作countStore中的sum
           this.sum += value
         }
       },
       //减
       decrement(value:number){
         if(this.sum > 1){
           this.sum -= value
         }
       }
     },
     /*************/
   })
   ```

4. 组件中调用`action`即可

   ```js
   // 使用countStore
   const countStore = useCountStore()
   
   // 调用对应action
   countStore.incrementOdd(n.value)
   ```

## storeToRefs

- 借助`storeToRefs`将`store`中的数据转为`ref`对象，方便在模板中使用。
- 注意：`pinia`提供的`storeToRefs`只会将数据做转换，而`Vue`的`toRefs`会转换`store`中数据。

```vue
<template>
	<div class="count">
		<h2>当前求和为：{{sum}}</h2>
	</div>
</template>

<script setup lang="ts" name="Count">
  import { useCountStore } from '@/store/count'
  /* 引入storeToRefs */
  import { storeToRefs } from 'pinia'

	/* 得到countStore */
  const countStore = useCountStore()
  /* 使用storeToRefs转换countStore，随后解构 */
  const {sum} = storeToRefs(countStore)
</script>

```

## getters

  1. 概念：当`state`中的数据，需要经过处理后再使用时，可以使用`getters`配置。

  2. 追加```getters```配置。

     ```js
     // 引入defineStore用于创建store
     import {defineStore} from 'pinia'
     
     // 定义并暴露一个store
     export const useCountStore = defineStore('count',{
       // 动作
       actions:{
         /************/
       },
       // 状态
       state(){
         return {
           sum:1,
           school:'atguigu'
         }
       },
       // 计算
       getters:{
         bigSum:(state):number => state.sum *10,
         upperSchool():string{
           return this. school.toUpperCase()
         }
       }
     })
     ```

  3. 组件中读取数据：

     ```js
     const {increment,decrement} = countStore
     let {sum,school,bigSum,upperSchool} = storeToRefs(countStore)
     ```

     

## $subscribe

通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化

```ts
talkStore.$subscribe((mutate,state)=>{
  console.log('LoveTalk',mutate,state)
  localStorage.setItem('talk',JSON.stringify(talkList.value))
})
```



## store组合式写法

```ts
import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'
import {reactive} from 'vue'

export const useTalkStore = defineStore('talk',()=>{
  // talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  // getATalk函数相当于action
  async function getATalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    let obj = {id:nanoid(),title}
    // 放到数组中
    talkList.unshift(obj)
  }
  return {talkList,getATalk}
})
```

