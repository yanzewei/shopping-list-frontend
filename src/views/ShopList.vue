<template>
    <div class="container">
        <h1>Shop Cart</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cart, index) in cartlist" :key="`cart-${index}`">
                    <th><img v-bind:src="cart.image" />{{ cart.title }}  </th>
                    <th>${{ cart.price }}</th>
                    <th>
                        <input type="text" pattern="\d*" maxlength="3" v-model="cart.num" />
                        <button @click="update(`${index}`)">update</button>
                    </th>
                    <th>${{ cart.num*cart.price }}</th>
                    <th><button @click="remove(`${index}`)">remove</button></th>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>
</template>

<script>
import {isEmptyObject} from '../../src/util.js';
    export default {
        data() {
            return {
                cartlist:{}
            };
        },
        created() {
            let cart = this.$cookie.get("cart");
            if(cart !== null)
            {
               this.cartlist = JSON.parse(cart);
            }
            console.log(cart);
        },
        computed: {
            subtotal: function(index){
                
            }
        },
        methods: {
            remove: function(index) {
                console.log(index, isEmptyObject(this.cartlist), isEmptyObject({}));
                if(!isEmptyObject(this.cartlist))
                {
                    console.log(this.cartlist[index]);
                    this.$delete(this.cartlist, index);
                }
            }
        }
    }
</script>

<style scoped>

</style>