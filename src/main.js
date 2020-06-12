import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './bootstrap'
import './httpClient'
import './forms'
import './mixins'
import './filters'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
