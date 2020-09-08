// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import { ApiService } from "@/api";
Vue.config.productionTip = false

let apiService = new ApiService();
const global = window;
global.$api = apiService;
console.log(axios.defaults.baseURL);

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
console.log(process.env.VUE_APP_BASE_URL);
console.log(axios.defaults.baseURL);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")
