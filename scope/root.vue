<template>
<div id='root'>
  <h1 class='header'>Root</h1>
  <p>this is Foo</p>
  <foo/>
  <bar/>
</div>
</template>

<script>
import Foo from './foo'
import Bar from './bar'

export default {
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
#root {
  border: solid 1px blue;
  margin: 4px;
  padding: 4px;
}

.header { font-size: 200%; }
</style>
