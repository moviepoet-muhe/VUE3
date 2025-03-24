<template>
    <div class="list">
        <ul>
            <slot 
                v-for="item in data" 
                :key="item.id" 
                :item="item"
                >
            </slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SelectCity',
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
.list ul li{
    width: 200px;
    height: 300px;
    border: 1px solid orangered;
    list-style: none;
}
.list ul li .top{
    width: 100%;
    height: 150px;
}
.list ul li .top img{
    width: 100%;
    height: 100%;
}
</style>
