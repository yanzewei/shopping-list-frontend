import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'
import vueCookie from 'vue-cookie'

Vue.use(BootstrapVue)
Vue.use(vueCookie)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
