<template>
    <div class="City">
        <!-- 
            <select :value="modelValue" @change="changeFn">
                <option value="001">北京</option>
                <option value="002">深圳</option>
                <option value="003">上海</option>
                <option value="004">杭州</option>
                <option value="005">成都</option>
            </select> 
        -->

        <select :value="wj" @change="changeFn">
            <option value="001">北京</option>
            <option value="002">深圳</option>
            <option value="003">上海</option>
            <option value="004">杭州</option>
            <option value="005">成都</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectCity',
    // props: ['modelValue'],
    props: ['wj'],
    changeFn(e){
        // update:modelValue 这是固定语法，用于和父组件哪里使用 v-model通信进行联动
        // this.$emit('update:modelValue', e.target.value)
        this.$emit('update:wj', e.target.value)
    }
}
</script>

<style lang='less' scoped>

</style>
