<template>
  <div>
    <Nav/>
    <div class="container-fluid" id="app">
      <router-view  :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  name: "app",
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import "src/styles/global.scss";
</style>
