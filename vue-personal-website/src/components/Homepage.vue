<template>
  <div class="hello">
    <img class="icon" src="../assets/Icon.png" />
    <h1>{{ title }}</h1>
    <p>{{ introduction }}</p >
    <div class="button-area">
      <router-link to="/Education">Educational Experience</router-link>
    </div>
    <div class="button-area">
      <router-link to="/Work">Working Experience</router-link>
    </div>
    <div class="button-area">
      <router-link to="/Skill">Skill and Introduction</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      title: "Jingtao personal website",
      introduction: "Welcome to my personal website, and wish that you can know me better via this website"
    }
  }
}
</script>

<style scoped>
.hello{
  margin-top: 50px;
}
.icon {
  width: 200px;
  height: auto;
  border-radius: 50%;
}
.button-area {
  margin-top: 20px;
}
</style>
