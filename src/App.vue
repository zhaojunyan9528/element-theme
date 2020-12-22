<!--
 * @Description: 
 * @version:: 
 * @Author: zhao
 * @Date: 2020-12-22 11:16:09
 * @LastEditors: zhao
 * @LastEditTime: 2020-12-22 11:54:43
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <IndexContent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import IndexContent from './components/content.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    IndexContent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
