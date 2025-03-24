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

<style scoped>
h3{
    color: orange;
}
</style>
