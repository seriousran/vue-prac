<template>
  <div>
    <p> {{ reversedMessage }} </p>
    <p> {{ msg58 }} </p>
    <button v-on:click="reverseMsg">문자열 역순</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg58: 'Hello Vue.js!'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.msg58.split('').reverse().join('')
    }
  },
  methods: {
    reverseMsg: function () {
      this.msg58 = this.msg58.split('').reverse().join('')
      return this.msg58
    }
  }
}
</script>
