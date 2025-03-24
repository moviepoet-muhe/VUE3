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