<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <router-view/>
    <router-link to="/Ex02x1">02-1_example</router-link><br/>
    <router-link to="/Ex02x2">02-2_example</router-link><br/>
    <!--<my-component1></my-component1>
    <Ex02x2></Ex02x2>-->
  </div>
</template>

<script>
import Ex02x1 from './components/Ex02x1'
import Ex02x2 from './components/Ex02x2'

export default {
  name: 'App',
  el: '#app',
  components: {
    'my-component1': Ex02x1,
    Ex02x2
  },
  data: function () {
    return {
      message: 'Hello Vue.js'
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
