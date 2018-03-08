<template>
  <div>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  watch: {
    message: function (data) {
      console.log('message의 값이 바뀝니다 : ', data)
    }
  }
}
</script>
