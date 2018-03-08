<template>
  <div>
    <button v-on:click="showLog">03-9_example</button>
  </div>
</template>

<script>
export default {
  methods: {
    showLog: function () {
      this.$emit('show-log')
    }
  }
}
</script>
