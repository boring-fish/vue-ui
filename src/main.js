import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { ApiService } from '@/api'
import store from './store/index.js'
import common from './utils/common.js'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.common = common
let apiService = new ApiService()
// const global = window
// global.$api =apiService
Vue.prototype.$api = apiService
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
