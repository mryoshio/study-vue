<template>
  <p class='message'>msg: {{msg}}</p>
</template>

<script>
export default {
  data() {
    return { msg: 'hello world' }
  }
}
</script>

<style scoped>
  .message { color: #99cc00; }
</style>

