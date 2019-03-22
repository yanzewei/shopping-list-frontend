import Vue from "vue"
import Router from "vue-router"
import Product from './views/Product.vue'
import ShopList from './views/ShopList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'product-page',
            component: Product
        },
        {
            path: '/home/:title?',
            name: 'product-search-page',
            component: Product
        },
        {
            path: '/shoplist',
            name: 'shop-list',
            component: ShopList
        }
    ]
})