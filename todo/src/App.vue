<template>
  <div id="app">
    
    <Mainpage msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>

import Mainpage from './components/Mainpage.vue'
export default {
  name: 'App',
  components: {
    Mainpage,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
