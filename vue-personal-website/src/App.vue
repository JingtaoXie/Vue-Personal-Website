<!-- src/App.vue -->
<template>
  <title>Toby Website</title>
  <div id="app">
    <button @click="toggleMenu" class="menu-button">Menu</button>
    <div v-if="menuVisible" class="menu">
      <router-link to="/" class="menu-item">Home</router-link>
      <router-link to="/Education" class="menu-item">Educational Experience</router-link>
      <router-link to="/Work" class="menu-item">Working Experience</router-link>
      <router-link to="/Skill" class="menu-item">Skills and Projects </router-link>
      <router-link to="/Aboutme" class="menu-item">About Me</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Education from './components/Education.vue'
import SkillandIntro from './components/SkillandIntro.vue'
import WorkingExp from './components/WorkingExp.vue'
import Aboutme from './components/Aboutme.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Education,
    SkillandIntro,
    WorkingExp,
    Aboutme
  },
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
}
</script>

<style>
body {
  background: linear-gradient(270deg, #f6714f, #feb47b);
  background-size: 800% 800%;
  animation: gradientBackground 5s ease infinite;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-out {
  font-size: 2rem;
  color: white;
  animation: fadeOut 1s forwards;
}

@keyframes gradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeOut {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


.menu-button {
  background-color: aliceblue;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #333;
  border: 2px solid #333;
  border-radius: 5px;
  z-index: 1000;
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  color:#333;
  position: absolute;
  top: 50px;
  left: 10px;
  border: 2px solid #333;
  border-radius: 5px;
  z-index: 999;
}

.menu-item {
  padding: 10px 20px;
  color:#333;
  text-decoration: none;
}

.menu-item:hover {
  background-color: lightyellow;
}

</style>
