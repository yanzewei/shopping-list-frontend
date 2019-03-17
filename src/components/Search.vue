<template>
  <!-- <header>
        <form action="">
            <input type="text" placeholder="Search.." name="product_name">
            <button>submit</button>
        </form>
  </header>-->
  <div>
    <b-navbar type="light" variant="light">
      <b-nav-form v-on:submit.prevent="search">
        <b-form-input class="mr-sm-2" type="text" placeholder="Search" v-model="search_text" />
        <b-button variant="outline-success" class="btn blue-btn" @click="search">Search</b-button>
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  //    computed: mapState({
  //        search_text: state => state.search.search_text
  //     }),
  computed: {
    search_text: {
      get() {
        return this.$store.state.search.search_text;
      },
      set(value) {
         this.$store.dispatch('search/setSearchText', value) 
      }
    }
  },
  created() {
    this.$store.dispatch('search/setSearchText', this.$route.params.title === undefined ? '' : this.$route.params.title) 
  },
  methods: {
    search: function() {
        this.$store.dispatch('search/setSearchText', this.search_text)
        this.$router.push({name: 'product-page', params: {title: this.search_text}})
        this.$router.go()
    }
  }
};
</script>

<style scoped>
</style>