import Vue from 'vue'
import App from './App.vue'

// import App from './AppClick.vue'
import './assets/scss/main.scss'

import router from './Plugins/router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
