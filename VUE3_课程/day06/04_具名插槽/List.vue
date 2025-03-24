<template>
    <div class="list">
        <ul>
            <li>
                <div class="top">
                    <!-- 预留一个位置 -->
                    <slot name="pic"></slot>
                </div>
                <div class="content">
                    <!-- 注意点：如果插槽不起名称，那么它就是默认插槽 -->
                    <slot></slot>
                </div>
                <div class="bottom">
                    <slot name="desc"></slot>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SelectCity',
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
