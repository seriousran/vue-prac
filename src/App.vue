<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <router-view/><br/>
    <router-link to="/Ex02x1">02-1_example</router-link><br/>
    <router-link to="/Ex02x2">02-2_example</router-link><br/>
    <router-link to="/Ex03x1">03-1_example</router-link><br/>
    <router-link to="/Ex03x7">03-7_example</router-link><br/>
    <Ex03x8 v-bind:propsdata="mEx37"></Ex03x8>
    <!--<router-link to="/Ex03x8">03-8_example</router-link><br/>-->
    <Ex03x9 v-on:show-log="printText"></Ex03x9>
    <!--<router-link to="/Ex03x9">03-9_example</router-link><br/>-->
    <Ex03x10></Ex03x10>
    <router-link to="/Ex04x5">04-5_example</router-link><br/>
  </div>
</template>

<script>
import Ex02x1 from './components/Ex02x1'
import Ex02x2 from './components/Ex02x2'
import Ex03x1 from './components/Ex03x1'
import Ex03x7 from './components/Ex03x7'
import Ex03x8 from './components/Ex03x8'
import Ex03x9 from './components/Ex03x9'
import Ex03x10 from './components/Ex03x10'
import EventBus from './components/event-bus'

export default {
  name: 'App',
  components: {
    'my-component1': Ex02x1,
    Ex02x2,
    Ex03x1,
    Ex03x7,
    Ex03x8,
    Ex03x9,
    Ex03x10
  },
  created: function () {
    EventBus.$on('triggerEventBus', function (value) {
      console.log('이벤트를 전달받음. 전달받은 값 : ', value)
    })
  },
  data: function () {
    return {
      message: 'Hello Vue.js',
      mEx37: '03-8_example 결과 입니다.'
    }
  },
  methods: {
    printText: function () {
      console.log('received an event')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
