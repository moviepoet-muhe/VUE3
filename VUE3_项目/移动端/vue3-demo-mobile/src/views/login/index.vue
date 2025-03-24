<template>
  <div class="login">
    <h2>login 组件</h2>
    <button @click="loginFn">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {

    }
  },


  methods: {
    loginFn() {
      localStorage.setItem('token', 'HDUEHDUIWHEUFHUWEHFUWEHFUHWEUIFHUIWEHFWEUI')
      this.$router.push({ path: this.$route.query.path })
    }
  }


}
</script>

<style scoped></style>
