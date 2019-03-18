<template>
  <div>
    <div class="container mt-3" v-for="(product_arr, index) in products" :key="`${index}`">
      <div>
        <h1>{{index}}</h1>
        <hr/>
        <b-card-group deck v-for="(product, j) in product_arr" :key="`product-group${j}`">
          <b-card
            v-for="(prod,k) in product" :key="`${prod.category}-${prod.id}`" :prod="prod" 
            v-bind:title="prod.brand_name"
            v-bind:img-src="prod.logo"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2 col-3"
          >
            <b-card-text>${{ prod.price }}</b-card-text>
            <b-card-text>remain: {{ prod.remain_count }}</b-card-text>
            <b-card-text @click="add(`${index}`, 1, `${prod.category}-${prod.id}`, `${prod.remain_count}`)" class="add-icon mb-2"><a><i class="fas fa-cart-plus"></i></a></b-card-text>
            <b-badge v-if="k%2==0" variant="info" class="state-badge"><b-card-text>Exceed the stock number</b-card-text></b-badge>
              <!-- <b-alert variant="success" show   >Success Add To The Cart</b-alert> -->
            <!-- <b-badge variant="danger">Exceed the stock number</b-badge>
            <b-badge variant="success">Success</b-badge> -->
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/product.scss";
</style>

<script>

//import axios from "axios";

// import { mapState } from "vuex";
//import {chunk} from '../../src/util.js';
import { mapState } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts', this.$route.params.title === undefined ? '' : this.$route.params.title)
  },
  methods: {
    add: function(index, nums, key, remain_count){
      let uid = 1
      this.$store.dispatch('cart/addItem', {uid, index, nums, key, remain_count})
    }
  }
};
</script>

