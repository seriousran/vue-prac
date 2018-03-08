<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <router-view/><br/>
    <router-link to="/Ex02x1">02-1_example</router-link><br/>
    <router-link to="/Ex02x2">02-2_example</router-link><br/>
    <router-link to="/Ex03x1">03-1_example</router-link><br/>
    <router-link to="/Ex03x7">03-7_example</router-link><br/>
    <!--<Ex03x8 v-bind:propsdata="message"></Ex03x8>-->
    <router-link to="/Ex03x8">03-8_example</router-link><br/>
    <Ex03x9 v-on:show-log="printText"></Ex03x9>
    <router-link to="/Ex03x9">03-9_example</router-link><br/>
    <!--<my-component1></my-component1>
    <Ex02x2></Ex02x2>-->
  </div>
</template>

<script>
import Ex02x1 from './components/Ex02x1'
import Ex02x2 from './components/Ex02x2'
import Ex03x1 from './components/Ex03x1'
import Ex03x7 from './components/Ex03x7'
import Ex03x8 from './components/Ex03x8'
import Ex03x9 from './components/Ex03x9'

export default {
  name: 'App',
  components: {
    'my-component1': Ex02x1,
    Ex02x2,
    Ex03x1,
    Ex03x7,
    Ex03x8,
    Ex03x9
  },
  data: function () {
    return {
      message: 'Hello Vue.js'
    }
  },
  method: {
    printText: function() {
      console.log("received and event")
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
