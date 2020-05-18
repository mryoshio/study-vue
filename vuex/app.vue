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
      return this.$store.state.tasks
    },
    labels() {
      return this.$store.state.labels
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
    }
  }
}
</script>
