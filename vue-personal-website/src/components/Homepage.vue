<template>
  <div class="hello">
    <img class="icon" src="../assets/Icon.png" />
    <h1>{{ title }}</h1>
    <p>{{ introduction }}</p>
    <div class="button-area">
      <router-link to="/Education" class="link"><img src="../assets/school.png" width="50px">
        <h5>Educational Experience</h5>
      </router-link>
      <router-link to="/Work" class="link"><img src="../assets/case.png" width="50px">
        <h5>Working Experience</h5>
      </router-link>
      <router-link to="/Skill" class="link"><img src="../assets/profile.png" width="50px">
        <h5>Detailed Introduction</h5>
      </router-link>
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
.hello {
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

.link {
  display: inline-block;
  background-color: aliceblue;
  padding: 10px;
  margin: 10px;
  border: 2px solid #333;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s;
}

.link:active {
  animation: jump 0.2s ease-out;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
.link:hover{
  animation: jump 1s ease-out;

}
</style>
