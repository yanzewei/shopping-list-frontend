<template>
  <div>
    <!-- <b-navbar toggleable="lg" type="light" variant="light">
      <b-nav-form v-on:submit.prevent="search">
        <b-form-input class="mr-sm-2" type="text" placeholder="Search" v-model="search_text"/>
        <b-button variant="outline-success" class="btn blue-btn" @click="search">Search</b-button>
      </b-nav-form>
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <router-link :to="{name: 'product-page'}" class="nav-btn blue-btn">home</router-link>
          <router-link :to="{name: 'shop-list'}" class="nav-btn blue-btn notification">
            <i class="fas fa-shopping-cart"></i> cart
            <span v-if="quantity>0" class="badge">{{ quantity }}</span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

    <b-navbar type="light" variant="light">
      <!-- <b-nav-form v-on:submit.prevent="onSubmit"> -->
      <b-nav-form>
        <b-form-input class="mr-sm-2" type="text" placeholder="Search" v-model="search_text"/>
        <b-button variant="outline-success" class="btn blue-btn" @click="search">Search</b-button>
      </b-nav-form>
      <b-navbar-nav class="ml-auto">
        <router-link :to="{name: 'product-page'}" class="nav-btn blue-btn">home</router-link>
        <router-link :to="{name: 'shop-list'}" class="nav-btn blue-btn notification"><i class="fas fa-shopping-cart"> </i> cart
            <span v-if="quantity>0" class="badge">{{ quantity }}</span>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    search_text: {
      get() {
        return this.$store.state.search.search_text;
      },
      set(value) {
        this.$store.dispatch("search/setSearchText", value);
      }
    },
    quantity: {
      get() {
        return this.$store.state.cart.quantity;
      }
    }
  },
  created() {
    this.$store.dispatch(
      "search/setSearchText",
      this.$route.params.title === undefined ? "" : this.$route.params.title
    );
    this.$store.dispatch("cart/getQuantity");
  },
  methods: {
    search: function() {
      this.$store.dispatch("search/setSearchText", this.search_text);
      this.$router.push({
        name: "product-search-page",
        params: { title: this.search_text }
      });
    }
  }
};
</script>

<style scoped>
</style>