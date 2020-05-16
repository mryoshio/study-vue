<template>
  <p :class="$style.message">
    こんにちは！
  </p>
</template>

<script>
export default{
  created() {
    // eslint-disable-next-line
    console.log('cssmodules:$style', this.$style)
  }
}
</script>

<style module>
  .message { color: #42b983; }
</style>
