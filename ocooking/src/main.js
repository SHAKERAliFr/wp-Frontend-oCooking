import Vue from 'vue'
import App from './AppClick.vue'//!composnt principal relié à index.html

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') //! relie à id inexi.html
