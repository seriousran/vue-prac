<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
  <div>
    <button v-on:click="getData">프레임워크 목록 가져오기</button>
  </div>
</template>

<script>
export default {
  methods: {
    getData: function () {
      axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
      .then(function (response) {
        console.log(response);
      })
    }
  }
}
</script>
