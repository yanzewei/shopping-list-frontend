<template>
  <div class="container-fluid" id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "app",
  components: {
    Nav
  },
  created() {
    const cart = {
      2:{
        id: 2,
        title: "Juice - Clam, 46 Oz",
        image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
        price: 76.44,
        num: 3,
        quantity: 13
      },
      4:{
        id: 4,
        title: "Veal - Striploin",
        image: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
        price: 83.42,
        num: 2,
        quantity: 11
      },
      6:{
        id: 6,
        title: "Bread - Sour Sticks With Onion",
        image: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
        price: 21.22,
        num: 3,
        quantity: 6
      },
      10:{
        id: 10,
        title: "Beans - Fine",
        image: "http://dummyimage.com/100x100.bmp/dddddd/000000",
        price: 89.42,
        num: 1,
        quantity: 13
      }
    };
    this.$cookie.delete("cart");
    this.$cookie.set("cart", JSON.stringify(cart));
  }
};
</script>

<style lang="scss">
@import "src/assets/global.scss";
</style>
