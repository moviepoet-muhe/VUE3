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

        <hr />

        <button @click="obj4.info.a++">修改 obj4 的值</button>
        {{ obj4 }}
    </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'

const num = ref(0)
const index = ref(10)


// 第一种情况：ref() 数据在监听的时候，后面不需要加 value，watch 会自动进行处理
// watch(num, (newVal, oldVal)=>{
//     console.log(newVal, oldVal)
// }) 

// 第二种情况：如果要监听多个数据源的话，可以把数据放在一个数组里面
// watch([num, index], ([newVal1, newVal2], [oldVal1, oldVal2])=>{
//     console.log(newVal1, oldVal1)
//     console.log(newVal2, oldVal2)
// }) 

// const obj1 = ref({name: '张三', age: 18})
// const obj2 = ref({title: '王江学习vue'})

// 第三种情况：如果要监听多个对象的话，数据源必须放在数组里面
// 注意点：监听 ref() 定义的对象，需要在数据后面加 `.value`, 需要开启深度监听
watch([() => obj1.value, () => obj2.value], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
    console.log(newVal1, oldVal1)
    console.log(newVal2, oldVal2)
}, {
    deep: true
})

const obj1 = reactive({ name: '张三', age: 18 })
const obj2 = reactive({ title: '王江学习vue' })

// 注意点：监听 reactive() 定义的对象，不需要后面加 `.value`
watch([() => obj1, () => obj2], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
    console.log(newVal1, oldVal1)
    console.log(newVal2, oldVal2)
}, {
    deep: true,
    immediate: true
})

const obj3 = ref({ name: '张三', age: 18 })
watch(() => obj3.value.age, (newVal, oldVal) => {
    console.log(newVal, oldVal)
}, {
    // deep: true
})

// 第四种情况：如果监听的属性是一个基本数据类型，不需要开启深度监听，如果监听的属性是一个对象的话，必须开启深度监听
const obj4 = reactive({ name: '张三', age: 18, info: { a: 1 } })
watch(() => obj4.info, (newVal, oldVal) => {
    console.log(newVal, oldVal)
}, {
    deep: true
})

</script>

<style scoped>
h1 {
    color: gold;
}
</style>