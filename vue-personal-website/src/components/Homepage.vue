<template>
  <div class="hello">
    <img class="icon" src="../assets/Icon.png">
    <h1>{{ title }}</h1>
    <p>{{ introduction }}</p>
    <div class="button-area">
    <a href="">Educational Experience</a>
    <a href="">Working Experience</a>
    <a href="">Skill and Introduction</a>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data(){
    return{
      title: "Jingtao personal website",
      introduction: "Welcome to my personal website, and wish that you can know me better via this website"
    }
  }
}
</script>

<style>
.icon{
  width: 200px;
  border-radius: 50%;
}

</style>
