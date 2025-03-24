<template>
    <div class="table">
        <table>
            <thead>
                <slot name="header"></slot>
            </thead>
            <tbody>
                <slot 
                    name="body" 
                    v-for="item in data"
                    :key="item.id"
                    :row="item"
                ></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            required: false,
            default: [
                {id: 1, name: '遮天', author: '辰东'},
                {id: 2, name: '活着', author: '余华'},
                {id: 3, name: '汤姆叔叔的小屋', author: '未知'},
            ]
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style>
table{
    width: 500px;
    height: 300px;
    border: 1px solid orange;
    border-collapse: collapse;
    margin: 30px 0;
    text-align: center;
}
table thead tr th{
    border: 1px solid orange;
}
table tbody tr td{
    border: 1px solid orange;
}
</style>
