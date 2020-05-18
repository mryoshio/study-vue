<template>
<div>
  <h2>Tasks</h2>
  <ul>
    <li v-for='task in tasks' :key='task.id'>
      <input type='checkbox' :checked='task.done' @change='toggle(task)'>
      {{task.name}}
    </li>
  </ul>
  <form @submit.prevent='add'>
    <input type='text' v-model='newTaskName' placeholder='New Task'>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      newTaskName: ''
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    add() {
      // eslint-disable-next-line
      console.log('add', this.newTaskName)

      this.$store.commit('addTask', {
        name: this.newTaskName
      })
      this.newTaskName = ''
    },
    toggle(task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    }
  }
}
</script>
