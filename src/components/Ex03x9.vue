<template>
  <button v-on:click="showLog">show</button>
</teamplate>

<script>
method: {
  showLog: function() {
    this.$emit('show-log');
}
</script>
