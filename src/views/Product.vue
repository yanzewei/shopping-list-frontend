<template>
  <div>
    <div class="container mt-3 " v-for="(product_arr, index) in products" :key="`${index}`" v-show="product_arr.length>0">
      <div>
        <h1>{{index}}</h1>
        <hr/>
          <div class="row" >
            <div v-for="(prod, k) in product_arr" :key="`b-card${k}`" class="col-lg-3">
              <b-card
                v-bind:title="prod.brand_name"
                v-bind:img-src="prod.logo"
                img-alt="Image"
                img-top
                class="mb-2 card-height"
              >
                <b-card-text>${{ prod.price }}</b-card-text>
                <b-card-text>remain: {{ prod.remain_count }}</b-card-text>
                <b-card-text @click="add( 1, `${prod.category}-${prod.id}`, `${prod.remain_count}`)" class="add-icon mb-2">
                  <a v-if="index in status && status[index] == 1">
                    <i class="fas fa-cart-plus"><b-spinner small/></i>
                  </a>
                  <a v-else>
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </b-card-text>
                <div v-if="`${prod.category}-${prod.id}` in status && status[`${prod.category}-${prod.id}`] == 3">
                  <b-badge  variant="info" class="state-badge"><b-card-text>Exceed the stock number</b-card-text></b-badge>
                </div>
                <div v-else-if="`${prod.category}-${prod.id}` in status && status[`${prod.category}-${prod.id}`] == 4">
                  <b-badge variant="success" class="state-badge"><b-card-text>Success Add To The Cart</b-card-text></b-badge>
                </div>
                  <!-- <b-alert variant="success" show   >Success Add To The Cart</b-alert> -->
                <!-- <b-badge variant="danger">Exceed the stock number</b-badge>
                <b-badge variant="success">Success</b-badge> -->  
              </b-card>
            </div>
          </div>
      </div>
    </div>
    <!-- <div class="container" v-show="products.length == 0"> -->
 
      
    <div class="empty-result" v-show="Object.keys(products).length == 0">
      <p class="lead">Sorry. The product is not found.</p>
    </div>
      
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/product.scss";
</style>

<script>

import { mapState } from 'vuex'
import { isEmptyObject } from "../../src/util.js";
export default {
  computed: mapState({
    products: state => state.products.all,
    status: state => state.cart.status
  }),
  created() {
    this.$store.dispatch('products/getAllProducts', this.$route.params.title === undefined ? '' : this.$route.params.title)
  },
  methods: {
    add: function( nums, key, remain_count){
      let uid = 1
      
      this.$store.dispatch('cart/addItem', {uid,  nums, key, remain_count})
      
    }
  }
};
</script>

