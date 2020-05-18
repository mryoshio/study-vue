import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: 'buy milk',
        done: false,
        labelIds: [1, 2]
      },
      {
        id: 2,
        name: 'buy  vue.js book',
        done: true,
        labelIds: [1, 3]
      }
    ]
  }
})

export default store