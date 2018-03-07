<template>
  <div id='app'>
    {{ cmp3 }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cmp3: 'Hello Vue.js!'
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate')
  },
  created: function () {
    console.log('created')
  },
  mounted: function () {
    console.log('mounted')
    this.cmp3 = 'Hello Vue!'
  },
  update: function () {
    console.log('updated')
  }
}
</script>
