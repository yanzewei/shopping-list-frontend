import shop from "../../api/shop";
const state = {
  cartlist: []
};

// getters
const getters = {};

// actions
const actions = {
  getCartList({ commit }) {
    shop.getShoppingCart(shopCart => {
      commit("setCartlist", shopCart);
    });
  },
  updateCartList({ state, commit }, {uid, index, nums}) {
    let cart = {},
        item = state.cartlist[index]
    cart.key = item.category + '-' + item.id
    cart.remain_count = item.remain_count 
    cart.uid = uid
    cart.nums = nums
    shop.updateShoppingCart(cart, num => {
      commit("updateCart", {index, num})
    }) 
  },
  removeItem ({ commit }, {uid, index}) {
    let cart = {},
        item = state.cartlist[index]
    cart.key = item.category + '-' + item.id
    cart.uid = uid
    shop.removeShoppingCart(cart, ()=> {
      commit('removeCart', index)
    })
  },
  addItem ({ commit }, {uid, index, nums, key, remain_count}) {
    let cart = {}
    cart.key = key
    cart.remain_count = remain_count 
    cart.uid = uid
    cart.nums = nums
    shop.addShoppingCart(cart, num => {
      commit("addCart", {index, num})
    }) 
  }
};

// mutations
const mutations = {
  setCartlist(state, cartlist) {
    state.cartlist = cartlist;
  },
  updateCart(state, {index, num}) {
    state.cartlist[index].num = num
  },
  removeCart(state, index){
    state.cartlist.splice(index, 1)
  },
  addCart(state, {index, num}) {
    state.cartlist[index].num = state.cartlist[index].num + num
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
