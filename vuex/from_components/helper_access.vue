<template>
<div id='app'>
  <p>{{v}}</p>
  <button @click='incr(1)'>+1</button>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: mapState({ v: 'count' }),
  methods: mapMutations({ incr: 'increment' })
}
</script>
