<!-- src/App.vue -->
<template>
  <div id="app">
    <div class="header-icon"> 
      <img alt="Vue logo" src="./assets/logo.png" class="mutual-icon">
      <p>Toby's personal website</p >
    </div>
    <router-view/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Education from './components/Education.vue'
import SkillandIntro from './components/SkillandIntro.vue'
import WorkingExp from './components/WorkingExp.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Education,
    SkillandIntro,
    WorkingExp
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

.header-icon {
  display: flex;
  align-items: center;
}

.mutual-icon {
  width: 50px;
}
</style>
