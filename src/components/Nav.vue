<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-nav-form v-on:submit.prevent="search" >
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" v-model="search_text" />
          <b-button size="sm" class="my-2 my-sm-0 btn blue-btn" type="submit">Search</b-button>
        </b-nav-form>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse"  >
          <b-navbar-nav class="ml-auto d-none d-md-block">
            <router-link :to="{name: 'product-page'}" class="nav-btn  blue-btn">home</router-link>
            <router-link :to="{name: 'shop-list'}" class="nav-btn blue-btn notification">
              <i class="fas fa-shopping-cart"></i> cart
              <span v-if="quantity>0" class="badge">{{ quantity }}</span>
            </router-link>
          </b-navbar-nav>
          <div class="d-block d-md-none">
            <b-navbar-nav>
              <router-link :to="{name: 'product-page'}" class=" ml-auto">HOME</router-link>
              <router-link :to="{name: 'shop-list'}" class=" ml-auto notification">
                <i class="fas fa-shopping-cart"></i> CART
                <span v-if="quantity>0" class="badge">{{ quantity }}</span>
              </router-link>
            </b-navbar-nav>
          </div>
        </b-collapse>

    </b-navbar>

  </div>
</template>

<script>
export default {
  computed: {
    search_text: {
      get() {
        return this.$store.state.search.search_text
      },
      set(value) {
        this.$store.dispatch("search/setSearchText", value)
      }
    },
    quantity: {
      get() {
        return this.$store.state.cart.quantity
      }
    }
  },
  created() {
    this.$store.dispatch(
      "search/setSearchText",
      typeof(this.$route.params.title) == 'undefined' ? "" : this.$route.params.title
    )
    this.$store.dispatch("cart/getQuantity")
  },
  methods: {
    search: function() {
      this.$store.dispatch("search/setSearchText", this.search_text)
      this.$router.push({
        name: "product-search-page",
        params: { title: this.search_text }
      })
    }
  }
}
</script>

