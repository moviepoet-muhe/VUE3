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