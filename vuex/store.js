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
    ],
    labels: [
      {
        id: 1,
        text: 'grossary'
      },
      {
        id: 2,
        text: 'food'
      },
      {
        id: 3,
        text: 'book'
      }
    ],
    nextTaskId: 3,
    nextLabelId: 4,
  },
  mutations: {
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false,
        labelIds
      })
      state.nextTaskId++
    },
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.done = !task.done
      })
    },
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })
      state.nextLabelId++
    }
  }
})

export default store
