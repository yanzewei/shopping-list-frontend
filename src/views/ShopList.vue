<template>
  <div class="container">
    <h1>Shopping Cart</h1>
    <table class="table table-hover table-condensed">
      <thead>
        <tr>
          <th class="align-middle width-4">Product</th>
          <th class="align-middle width-2">CDN$</th>
          <th class="align-middle width-2">Quantity</th>
          <th class="align-middle width-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart, index) in cartlist" :key="index">
          <th>
            <div class="row d-none d-md-flex">
              <div class="col-sm-2 hidden-xs">
                <img v-bind:src="cart.logo" class="img-responsive">
              </div>
              <div class="col-sm-10 text-center product-name">{{ cart.brand_name }}</div>
            </div> 
            <div class="row d-block d-md-none ">
              <div class="col-sm-10 text-center ">{{ cart.brand_name }}</div>
              <div class="col-sm-2 hidden-xs">
                <img v-bind:src="cart.logo" class="img-responsive">
              </div>
            </div>
          </th>
          <th class="align-middle">{{ cart.price }}</th>
          <th class="align-middle">
            <div class="d-flex quantity-group">
              <input
                type="number"
                max="99"
                min="1"
                pattern="\d*"
                :id="index"
                :value="cart.num"
                @input="editQuantity"
              >
              <a @click="update(`${index}`, `${cart.num}`, `${cart.remain_count}`)">
                <span v-if="index in status && status[index] == 1">
                  <i class="far fa-save update-icon">
                    <b-spinner small/>
                  </i>
                </span>
                <span v-else-if="index in status &&  status[index] == 2">
                  <i class="far fa-save alert-update-icon"></i>
                </span>
                <span v-else>
                  <i class="far fa-save update-icon"></i>
                </span>
              </a>
            </div>
          </th>
          <th class="align-middle">
            <a @click="remove(`${index}`)">
              <i class="fas fa-trash-alt delete-icon"></i>
            </a>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="hidden-xs"></td>
          <td class="hidden-xs text-center">
            <strong>Subtotal ({{ quantity }} items):</strong>
          </td>
          <td>
            <strong>CDN$ {{ subtotal }}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
    <v-dialog/>
  </div>
</template>

<style lang="scss" scoped >
@import "src/styles/shoplist.scss";
</style>
<script>
import { isEmptyObject } from "../../src/util.js"
import { mapState } from "vuex"

export default {
  created() {
    this.$store.dispatch("cart/getCartList")
  },
  computed: {
    ...mapState({
      cartlist: state => state.cart.cartlist,
      quantity: state => state.cart.quantity,
      subtotal: state => state.cart.subtotal,
      status: state => state.cart.status
    })
  },
  methods: {
    //return: 0(fail) 1(pass)
    checkQuantity: function(index, num, remain_count) {
      if (isNaN(num)) {
        return 0
      }
      if (parseInt(remain_count) < parseInt(num)) {
        this.$modal.show("dialog", {
          title: "Alert!",
          text: "the number has exceed the limit of " + remain_count,
          buttons: [
            {
              title: "Close"
            }
          ]
        })

        this.$store.dispatch("cart/editCart", {
          index: index,
          num: parseInt(remain_count)
        })

        return 0
      }

      return 1
    },

    editQuantity: function(e) {
      let num = 0
      if (e.target.value.length > 2) {
        num = e.target.value.slice(0, 2)
      } else if (e.target.value < 0) {
        num = 1
      } else {
        num = e.target.value
      }
      if (num > 0) {
        this.$store.dispatch("cart/editCart", {
          index: e.target.id,
          num: num
        })
      }
    },
    remove: function(index) {
      if (!isEmptyObject(this.cartlist)) {
        let uid = 1
        this.$store.dispatch("cart/removeItem", { uid, index })
      }
    },
    update: function(index, nums, remain_count) {
      if (this.checkQuantity(index, nums, remain_count)) {
        let uid = 1
        this.$store.dispatch("cart/updateCartList", {
          uid,
          index,
          nums: parseInt(nums)
        })
      }
    }
  }
}
</script>
