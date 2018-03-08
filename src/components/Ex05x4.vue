<template>
  <div>
    <a v-if="flag">두잇 Vue.js</a>
    <ul>
      <li v-for="(system, index) in systems" v-bind:key="index"> {{ system }} </li>
    </ul>
    <p v-show="flag">두잇 Vue.js</p>
    <h5 v-bind:id="uid">뷰 입문서</h5>
    <button v-on:click="popupAlert">경고 창 버튼</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flag: true,
      systems: ['android', 'ios', 'window'],
      uid: 10
    }
  },
  methods: {
    popupAlert: function () {
      return alert('경고 창 표시')
    }
  }
}
</script>
