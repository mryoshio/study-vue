<template>
  <div>
    <div v-if='error' class='error'>
      <p class='display'>Unknown Error</p>
      <hr>
      <p class='msg'>{{ error.message }}</p>
      <p class='info'>{{info}}</p>
      <p class='stack'>{{error.stack}}</p>
    </div>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data () {
    return {
      error: null,
      info: null
    }
  },
  errorCaptured (err, vm, info) {
    this.error = err
    this.info = info
  }
}
</script>

<style scoped>
.error {
  color: red;
  text-align: left;
}
</style>
