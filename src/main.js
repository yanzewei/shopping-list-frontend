import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true })
Vue.use(BootstrapVue)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
