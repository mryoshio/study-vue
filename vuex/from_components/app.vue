<template>
<div id='app'>
  <p>{{count}}</p>
  <button @click='incr(1)'>+1</button>
</div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    incr(v) {
      this.$store.commit('increment', { val: v })
    }
  }
}
</script>
