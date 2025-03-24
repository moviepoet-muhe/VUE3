<template>
    <div>
        <h3>登录页面</h3>
        <button @click="loginFn">登录</button>
        {{ $route.query.path }}
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
        }
    },
    methods: {
        loginFn(){
            localStorage.setItem('token', 'djgnmSGHQNAFGWBSNSVDNWFASHVUWFGSAVD')
            // console.log(this.$route.query)
            this.$router.push({path: this.$route.query.path})
        }
    }
}
</script>

<style scoped>
h3{
    color: orangered;
}
</style>
