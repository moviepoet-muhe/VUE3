<template>
    <div class="tab-bar">
        <ul>
            <li 
                v-for="item in tabList" 
                :key="item.path"
                @click="$router.push(item.path)"
            >
                {{ item.meta.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import routes from '@/router/routes'
export default {
    name: 'TabBar',
    computed: {
        tabList(){
            return routes.slice(1, -3)
        }
    }
}
</script>

<style scoped>
.tab-bar{
    width: 100%;
    height: 45px;
    background-color: #e5e5e5;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
}
.tab-bar ul{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    font-size: 14px;
}
</style>
