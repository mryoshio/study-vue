<template>
<div>
  <h2>Tasks</h2>
  <ul>
    <li v-for='task in tasks' :key='task.id'>
      <input type='checkbox' :checked='task.done' @change='toggle(task)'>
      {{task.name}}
      -
      <span v-for='id in task.labelIds' :key='id'>
        {{ getLabelText(id) }}
      </span>
    </li>
  </ul>
  <form @submit.prevent='add'>
    <input type='text' v-model='newTaskName' placeholder='New Task'>
  </form>

  <h2>Lables</h2>
  <ul>
    <li v-for='label in labels' :key='label.id'>
      <input type='checkbox' :value='label.id' v-model='newTaskLabelIds'>
      {{ label.text }}
    </li>
  </ul>
  <form @submit.prevent='addL'>
    <input type='text' v-model='newLabelText' placeholder='New Label'>
  </form>
  <h2>FILTER</h2>
  <ul>
    <li v-for='label in labels' :key='label.id'>
      <input type='radio' :checked='label.id === filter' @change='changeF(label.id)'>
      {{ label.text }}
    </li>
    <li>
      <input type='radio' :checked='filter === null' @change='changeF(null)'>
      nothing
    </li>
  </ul>
  <h2>Save & Restore</h2>
  <button type='button' @click='saveMe'>save</button>
  |
  <button type='button' @click='restoreMe'>restore</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      newTaskName: '',
      newTaskLabelIds: [],
      newLabelText: ''
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks
    },
    labels() {
      return this.$store.state.labels
    },
    filter() {
      return this.$store.state.filter
    }
  },
  methods: {
    add() {
      // eslint-disable-next-line
      console.log('add', this.newTaskName, this.newTaskLabelIds)

      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds
      })
      this.newTaskName = ''
      this.newTaskLabelIds = []
    },
    toggle(task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },
    addL() {
      this.$store.commit('addLabel', {
        text: this.newLabelText
      })
      this.newLabelText = ''
    },
    getLabelText(id) {
      const l = this.labels.filter(label => label.id === id)[0]
      return l ? l.text : ''
    },
    changeF(labelId) {
      // eslint-disable-next-line
      console.log('changeF', labelId)

      this.$store.commit('changeFilter', {
        filter: labelId
      })
    },
    saveMe() {
      this.$store.dispatch('save')
      // eslint-disable-next-line
      console.log('save')
    },
    restoreMe() {
      this.$store.dispatch('restore')
    }
  }
}
</script>
