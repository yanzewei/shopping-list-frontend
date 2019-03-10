<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> -->
      <!-- <router-link :to="{name: 'event-list'}">List</router-link>
      <router-link to="/event/create">Create</router-link>  -->
      <Nav/>
    <hr/>
      <Product/>

    <!-- <router-view/> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <EventCard /> -->
  </div>
</template>

<script>
// import EventCard from './components/EventCard.vue'
//import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import Product from './components/Product.vue'
export default {
  name: 'app',
  components: {
    Nav,
    Product
  }
}
// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss">
@import 'src/assets/global.scss'
</style>
