<template>
  <div id="app">
    <pm-header></pm-header>
    <img src="./assets/logo.png">
    <router-view/>
    <pm-footer></pm-footer>
    
  </div>
</template>

<script>
import PmFooter from './components/loyaut/Footer.vue'
import PmHeader from './components/loyaut/Header'

export default {
  name: 'App',
  components:{PmFooter,PmHeader}
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
