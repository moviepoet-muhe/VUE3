<template>
    <div class="btn">
        <div :class="typeAtrr">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: ['type'],
    computed: {
        typeAtrr(){
            switch(this.type){
                case 'edit':
                    return 'red'
                case 'delete':
                    return 'blue'
                case 'warning':
                    return 'gl'
            }
            // return this.type === 'edit' ? 'red' : 'blue'
        }
    }
}
</script>

<style scoped>
.btn{
    display: inline-block;
}
.btn div{
    width: 120px;
    height: 40px;
    background-color: skyblue;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    margin: 10px;
    color: #fff;
}
.red{
    background-color: #f56c6c !important;
}
.blue{
    background-color: #409eff !important;
}
.gl{
    background-color: gold !important;
}
</style>
