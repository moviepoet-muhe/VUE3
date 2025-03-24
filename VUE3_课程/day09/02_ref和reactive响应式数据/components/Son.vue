<template>
    <div>
        <h3>我是子组件：{{ name }}</h3>
    </div>
</template>

<!-- 注意点：如果需要给组件设置名称，直接在 script 标记上面设置一个 name 属性即可，但是默认以 文件 的名称作为 组件名的 -->
<script setup name="Son">
import { ref } from 'vue'
const name = ref('王江')
</script>

<style scoped>
h3{
    color: orange;
}
</style>
