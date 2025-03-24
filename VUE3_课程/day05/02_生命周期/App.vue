<template>
    <div class="app-container">
        <!--
            生命周期
            + 人的生命周期
              => 婴儿 --- 吃、睡、观察
              => 幼儿 --- 玩
              => 儿童 --- 玩、学习
              => 少年 --- 玩、学习
              => 青年 --- 学习、耍朋友
              => 壮年 --- 牛马
              => 中年 --- 牛马
              => 老年 --- 退休
            + 所谓的生命周期的意思就是特定的阶段做特定的事情

            vue 生命周期
            + 分为四个阶段，可以通过四个阶段，知道 vue 程序执行到哪一步了，可以做哪些事情了
            + 创建阶段
              => beforeCreate() 创建前
              => created() 创建后
            + 挂载阶段
              => beforeMount() 挂载前 
              => mounted() 挂载后
            + 更新阶段
              => beforeUpdate() 更新前
              => updated() 更新后
            + 销毁阶段
              => beforeunmount() 取消挂载前（销毁前）
              => unmounted() 取消挂载后（销毁后）

            + 总结
              => created() 用于发送请求
              => mounted() 用于操作 DOM
              => beforeunmount() 用于清除外部创建的资源，例如：定时器
              => unmounted() 用于清除外部创建的资源，例如：定时器
              => 取消挂载前和取消挂载后都可以拿到组件中的数据，beforeunmount() 它里面的数据存在响应式，
              unmounted() 数据已经失去响应式
        --> 
        <p ref="p">hello，王江学习非常认真！</p>

        <button @click="num+=1">更新数据</button>
        <h3>{{ num }}</h3>

        <button @click="show =! show">销毁</button>
        <Hello v-if="show"/>
    </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
   name: 'App',
   components: {Hello},

   // beforeCreate(){
   //    console.log('创建前')
   //    console.log(this.title)
   // },

   // created() 一般用来发送请求
   // created(){
   //    console.log('创建后')
   //    console.log(this.title)
   //    // console.log(this.$refs)
   // },

   // beforeMount(){
   //    console.log('挂载前')
   //    // console.log(this.$refs)
   // },

   // mounted() 如果需要操作 DOM 可以在这个里面获取到相关的元素
   mounted(){
      console.log('挂载后')
      // console.log(this.$refs.p)
      console.log(this.$refs.ho)
   },

   // beforeUpdate(){
   //    // console.log(typeof this.num === 'number')
   //    // if(!(typeof this.num === 'number')){
   //    //    alert('更新数据的类型要求是 number ')
   //    //    this.num = Number(this.num)
   //    // }
   //    console.log('更新前')
   // },
   
   // updated(){
   //    console.log('更新后')
   // },

   // beforeUnmount(){
   //    console.log('取消挂载前')
   // },

   // unmount() 可以帮助咱们清除页面里面的定时器
   // unmounted(){
   //    console.log('取消挂载后')
   // },

   data(){
      return {
         title: '王江',
         num: '0',
         show: true
      }   
   },
   methods: {
      say(){
         console.log('喜欢演讲！')
      }
   }
}
</script>

<style scoped>

</style>