import Vue from 'vue'
import App from './App.vue'//!fichier App principal relié à index.html par #app
// import App from './AppClick.vue'
import './assets/scss/main.scss'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') //! relie à id index.html
