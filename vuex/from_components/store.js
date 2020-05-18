import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state, val) {
      // eslint-disable-next-line
      console.log('increment', val)

      this.state.count += val
    }
  }
})

export default store
