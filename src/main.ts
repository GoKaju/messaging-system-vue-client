import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// layout importation 
import Default from "./layouts/Default.vue"
import Home from "./layouts/Home.vue"
Vue.component("default-layout",Default)
Vue.component("home-layout",Home)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
