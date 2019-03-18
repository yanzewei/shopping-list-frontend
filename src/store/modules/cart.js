import shop from "../../api/shop";
const state = {
  cartlist: [],
  quantity: 0
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
  getQuantity({ commit }) {
    shop.getShoppingQuantity(quantity => {
      commit("setQuantity", quantity)
    })
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
      let quantity = 0
      for(let i = 0; i < state.cartlist.length; i++)
      {
        quantity += parseInt(state.cartlist[i].num)
      }
      commit("setQuantity", quantity)
    }) 
  },
  removeItem ({ commit }, {uid, index}) {
    let cart = {},
        item = state.cartlist[index]
    cart.key = item.category + '-' + item.id
    cart.uid = uid
    shop.removeShoppingCart(cart, ()=> {
      commit('removeCart', index)
      let quantity = 0
      for(let i = 0; i < state.cartlist.length; i++)
      {
        quantity += parseInt(state.cartlist[i].num)
      }
      commit("setQuantity", quantity)
    })
  },
  addItem ({ commit }, {uid, index, nums, key, remain_count}) {
    let cart = {}
    cart.key = key
    cart.remain_count = remain_count 
    cart.uid = uid
    cart.nums = nums
    shop.addShoppingCart(cart, num => {
      commit("setQuantity", state.quantity+num)
    }) 
  }
};

// mutations
const mutations = {
  setCartlist(state, cartlist) {
    state.cartlist = cartlist;
  },
  setQuantity(state, quantity) {
    state.quantity = quantity
  },
  updateCart(state, {index, num}) {
    state.cartlist[index].num = num
  },
  removeCart(state, index){
    state.cartlist.splice(index, 1)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
