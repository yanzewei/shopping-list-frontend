<template>
  <div>
    <Search/>
    <div class="container mt-3" v-for="(product_arr, index) in products" :key="`${index}`">
      <div>
        <h1>{{index}}</h1>
        <hr/>
        <b-card-group deck v-for="(product, index) in product_arr" :key="`product-group${index}`">
          <b-card
            v-for="prod in product" :key="`${prod.category}-${prod.id}`" :prod="prod" 
            v-bind:title="prod.brand_name"
            v-bind:img-src="prod.logo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>${{ prod.price }}</b-card-text>
            <b-card-text>number:{{ prod.remain_count }}</b-card-text>
            <b-button @click="add(`${index}`, 1, `${prod.category}-${prod.id}`, `${prod.remain_count}`)" class="blue-btn">Add to cart</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/product.scss";
</style>

<script>
import Search from "../components/Search.vue";
//import axios from "axios";

// import { mapState } from "vuex";
//import {chunk} from '../../src/util.js';
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Search
  },
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: {
    add: function(index, nums, key, remain_count){
      let uid = 1
      this.$store.dispatch('cart/addItem', {uid, index, nums, key, remain_count})
    }
  }
};
</script>

