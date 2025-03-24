<template>
    <div class="hello">
        <h1>Hello 组件</h1>
        <button @click="a++">更新</button>
        {{ a }}
    </div>
</template>

<script>
export default {
    name: 'Hello',

    mounted(){
        // this.setTimeFn()
    },

    beforeUnmount(){
        console.log(this.a++)
        // clearInterval(this.timer)
    },
    
    unmounted(){
        console.log('取消挂载后')
        // clearInterval(this.timer)
    },

    data(){
        return {
           a: 1,
           b: 20,
           timer: 0
        }
    },
    methods: {
       test(){
          console.log('这是测试方法')
       },
       // 注意点：组件被销毁时，并不会主动去清除咱们页面里面的定时器，因为页面里面定时器会有很多，如果
       // 不指定，你并不知道这个定时器是否有其他的作用，因此在设计的时候没有给你设计主动关闭的功能
       // 因此，咱们可以在组件销毁后，可以手动指定哪些定时器是可以关闭的
       setTimeFn(){
          this.timer = setInterval(()=>{
             this.a += 1
             console.log('王江')
          }, 1000)
       }
    }
}
</script>

<style scoped>
h1{
    color: gold;
}
</style>
