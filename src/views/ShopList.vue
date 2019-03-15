<template>
    <div class="container">
        <h1>Shop Cart</h1>
        <table class="table table-hover table-condensed">
            <thead>
                <tr>
                    <th style="width:40%" class="align-middle">Product</th>
                    <th style="width:20%" class="align-middle">Price</th>
                    <th style="width:8%" class="align-middle">Quantity</th>
                    <th style="width:22%" class="align-middle">Subtotal</th>
                    <th style="width:10%" class="align-middle">Operate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cart, index) in cartlist" :key="`cart-${index}`">
                    <th>
                        <div class="row">
                            <div class="col-sm-2 hidden-xs">
                                <img v-bind:src="cart.logo" class="img-responsive" />
                            </div>
                            <div class="col-sm-10  text-center " style="padding-top: 39px;">
                                {{ cart.brand_name }}
                            </div>
                        </div>  
                    </th>
                    <th class="align-middle">${{ cart.price }}</th>
                    <th class="align-middle">
                        <input type="text" pattern="\d*" maxlength="3" v-model="cart.num" />
                        <button @click="update(`${index}`, `${cart.num}`)">update</button>
                    </th>
                    <th class="align-middle">${{ cart.num*cart.price }}</th>
                    <th class="align-middle"><button @click="remove(`${index}`)">remove</button></th>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>
</template>

<script>
import {isEmptyObject} from '../../src/util.js';
import { mapState, mapActions } from 'vuex'

    export default {
        created() {
            this.$store.dispatch('cart/getCartList')
        },
        computed: mapState({
            cartlist: state => state.cart.cartlist
        }),
        methods: {
            remove: function(index) {
                console.log(index, isEmptyObject(this.cartlist), isEmptyObject({}));
                if(!isEmptyObject(this.cartlist))
                {
                    console.log(this.cartlist[index]);
                    let uid = 1
                    this.$store.dispatch('cart/removeItem', {uid, index})
                }
            },
            update: function(index, nums) {
                let uid = 1
                this.$store.dispatch('cart/updateCartList', {uid, index, nums})
            }
        }
    }
</script>

<style scoped>

</style>