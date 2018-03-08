<template>
  <div>
    <a v-if="flag">두잇 Vue.js</a>
    <ul>
      <li v-for="(system, index) in systems" v-bind:key="index"> {{ system }} </li>
    </ul>
    <p v-show="flag">두잇 Vue.js</p>
    <h5 v-bind:id="uid">뷰 입문서</h5>
    <button v-on:click="popupAlert">경고 창 버튼</button>
    <button v-on:click="clickBtn">클릭</button>
    <button v-on:click="clickBtn2(10)">클릭</button>
    <button v-on:click="clickBtn3">클릭</button>
    <button v-on:click="clickBtn4($event, 7)">클릭</button>
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
    },
    clickBtn: function () {
      alert('clicked')
    },
    clickBtn2: function (num) {
      alert('clicked ' + num + ' times')
    },
    clickBtn3: function (event) {
      console.log(event)
    },
    clickBtn4: function (event, num) {
      alert('clicked ' + num + ' times')
      console.log(event)
    }
  }
}
</script>
