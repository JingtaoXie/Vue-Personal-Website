<template>
  <div class="header-icon"> 
  <img alt="Vue logo" src="./assets/logo.png" class="mutual-icon">
  <p>Toby's personal website</p>
  </div>
  <Homepage/>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
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
}

.header-icon{
  display: flex;
  align-items: center;
}

.mutual-icon{
  width:50px;
}
</style>
