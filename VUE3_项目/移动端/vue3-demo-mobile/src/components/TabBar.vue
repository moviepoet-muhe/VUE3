<template>
    <div class="tab-bar">
        <ul>
            <li v-for="item in tabList" :key="item.path" @click="$router.push(item.path)">
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
        tabList() {
            return routes.slice(1, -1)
        }
    }
}
</script>

<style scoped>
.tab-bar {
    width: 100%;
    height: 1.3333rem;
    background-color: #e5e5e5;
    text-align: center;
}

.tab-bar ul {
    display: flex;
    height: 100%;
    justify-content: space-between;
}

.tab-bar ul li {
    cursor: pointer;
    border: .0267rem solid #ccc;
    width: 23%;
    height: 100%;
    line-height: 1.3333rem;
}
</style>
