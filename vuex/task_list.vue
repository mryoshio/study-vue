<template>
<div>
  <input type='text' v-model='filterWord'>
  <ul>
    <li v-for='task in filteredTaskList' :key='task.id'>
      <Task :task='task' />
    </li>
  </ul>
</div>  
</template>

<script>
import Task from './task.vue'

export default {
  name: 'TaskList',
  components: {
    Task
  },
  props: {
    taskList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filterWord: ''
    }
  },
  computed: {
    filterdTaskList() {
      const filtered = this.taskList.filter(task => {
        return task.name.includes(this.filterWrod)
      })
      return filtered
    }
  }
}
</script>
