import Vue from 'vue'
//import app from './this_access.vue'
import app from './helper_access.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(app)
})
