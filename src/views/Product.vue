<template>
  <div>
    <Search/>
    <div class="container mt-3">
      <div>
        <b-card-group deck v-for="(product, index) in products" :key="`product-group${index}`">
          <b-card
            v-for="prod in product" :key="prod.id" :prod="prod" 
            v-bind:title="prod.product.title"
            v-bind:img-src="prod.product.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{ prod.product.price }}$</b-card-text>
            <b-card-text>number:{{ prod.quantity }}</b-card-text>

            <b-button href="#" class="blue-btn">Add to cart</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import axios from "axios";
// import { mapState } from "vuex";
import {chunk} from '../../src/util.js';
export default {
  components: {
    Search
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        this.products = chunk(response.data,3);
        
        console.log(this.products);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>

