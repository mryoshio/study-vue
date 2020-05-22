import Vue from 'vue'
import 'es6-promise/auto'
import App from './App'
import router from './router'
import store from './store'

import ErrorBoundary from './ErrorBoundary'

Vue.config.productionTip = false
Vue.config.performance = true

Vue.component(ErrorBoundary.name, ErrorBoundary)
Vue.config.errorHandler = (err, vm, info) => {
  console.error('global error:', err)
  console.error('global error:', vm)
  console.error('global error:', info)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
