import Vue from 'vue'
import App from './App.vue'

// import App from './AppClick.vue'
import './assets/scss/main.scss'

import router from './plugins/router'
import store from './plugins/vuex'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
