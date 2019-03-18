import product from '../../api/product'

// initial state
const state = {
    all:[]
}

// getters
const getters = {}

// actions
const actions = {
    getAllProducts ({ commit }, title) {
        product.getProducts(prods => {
            commit('setProducts', prods)
        }, title)
    }
}

// mutations
const mutations = {
    setProducts (state, products) {
        state.all = products
    },
    setProductsAdded (state, index) {
        state.all[index].added = 1
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}