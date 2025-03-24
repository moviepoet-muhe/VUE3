<template>
  <div class="app-container">
    <header>
      <RouterView name="header"></RouterView>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
      <RouterView name="footer"></RouterView>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.app-container {
  margin: 0 auto;
  width: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container main {
  flex: 1;
  overflow: auto;
}
</style>