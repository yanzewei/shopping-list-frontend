import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cart from '@/store/modules/cart.js'
import { cloneDeep } from 'lodash'

test('adding and removing item will effect the quanitity and the status of update', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  //make sure the store be clean
  const store = new Vuex.Store(cloneDeep(cart))
  //add
  expect(store.state.quantity).toBe(0)
  expect(store.state.status.length).toBe(0)
  //key: category_id-sub_category_id
  let nums = 1,
      key = '1-1'
  store.commit("setQuantity", store.state.quantity+nums)
  store.commit('setUpdateStatus', {index:key, status:4})
  expect(store.state.quantity).toBe(1)
  expect(store.state.status[key]).toBe(4)
  //remove
  store.commit('removeCart', 0)
  store.commit("setQuantity", 0)
  expect(store.state.quantity).toBe(0)
  expect(store.state.status.length).toBe(0)
})

