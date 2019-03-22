import shop from "../../api/shop";
import Vue from 'vue'


const state = {
  cartlist: [],
  quantity: 0,
  subtotal: 0,
  /*
    status vaules:
    0 for initial state;
    1 for waiting for response; 
    2 for edited status;
    3 for exceed the stock limit;
    4 for success added.
  */
  status: [] 
};

// getters
const getters = {
};

// actions
const actions = {
  getCartList({ commit }) {
    shop.getShoppingCart(shopCart => {
      commit("setCartlist", shopCart);
      let subtotal = 0,
          quantity = 0
      for(let index in shopCart)
      {
        //when enter the cart list will check the items' remain_count again
        if(shopCart[index].num > shopCart[index].remain_count)
        {
          commit("updateCart", {index, num:shopCart[index].remain_count})
        }
        quantity += shopCart[index].num
        subtotal += shopCart[index].num * shopCart[index].price
      }
      commit("setQuantity", quantity)
      commit('setSubtotal', subtotal)
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

    commit('setUpdateStatus', {index:index, status:1})
    shop.updateShoppingCart(cart, num => {
      commit('setUpdateStatus', {index:index, status:0})
    }) 
  },

  removeItem ({ commit }, {uid, index}) {
    let cart = {},
        item = state.cartlist[index]
    cart.key = item.category + '-' + item.id
    cart.uid = uid
    shop.removeShoppingCart(cart, ()=> {
      let oldnum = state.cartlist[index].num,
          subtotal = state.subtotal - oldnum * state.cartlist[index].price
      commit('removeCart', index)
      commit('setSubtotal', subtotal)
      let quantity = state.quantity - oldnum
      commit("setQuantity", quantity)
    })
  },

  addItem ({ commit }, {uid, nums, key, remain_count}) {
    let cart = {}
    cart.key = key
    cart.remain_count = remain_count 
    cart.uid = uid
    cart.nums = nums
    commit('setUpdateStatus', {index:key, status:1})
    shop.addShoppingCart(cart, httpcode => {
      if(httpcode == 201)
      {

        commit("setQuantity", state.quantity+nums)
        
        commit('setUpdateStatus', {index:key, status:4})
        
        }
      if(httpcode == 400)
      {
        commit('setUpdateStatus', {index:key, status:3})
      }
    }) 
  },

  editCart ({commit}, {index, num}) {
    let oldnum = parseInt(state.cartlist[index].num),
        subtotal = state.subtotal + (parseInt(num) - oldnum) * state.cartlist[index].price,
        quantity = state.quantity + parseInt(num) - oldnum 
    commit("setQuantity", quantity)
    commit('setSubtotal', subtotal)
    commit("updateCart", {index, num})
    commit('setUpdateStatus', {index:index, status:2})
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
    state.status.splice(index,1)
  },
  setSubtotal(state, subtotal) {
    state.subtotal = subtotal
  },
  setUpdateStatus(state, {index, status}){
    Vue.set(state.status, index, status)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
