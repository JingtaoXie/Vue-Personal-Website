<template>
  <div class="hello">
    <img class="icon" src="../assets/Icon.png" />
    <h1>{{ title }}</h1>
    <p>{{ introduction }}</p>
    <div id="container">
      <div id="left"></div>
      <div id="contact-info">
        <div>
          <img src="../assets/phone.png" width="20px" class="item">
          <p class="item">02885147002</p>
        </div>
        <div>
          <img src="../assets/email.png" width="20px" class="item">
          <p class="item">toby20000428@outlook.com</p>
        </div>
        <div>
          <img src="../assets/linkedin.png" width="20px" class="item">
          <p class="item">https://www.linkedin.com/in/jingtao-xie-559956284/"</p>
        </div>
      </div>
      <div id="right"></div>
    </div>
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

.link:hover {
  animation: jump 1s ease-out;

}
#container{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left contact-info right";
}
#left{
  grid-area: left;
}
#contact-info {
  width: 100%;
  grid-area: contact-info;
  background-color: aliceblue;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 10px;

}
#right{
  grid-area: right;
}

.item {
  display: inline;
  margin-left: 5px;

}
@media (max-width: 800px) {
  #container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "contact-info";
  }

  #contact-info {
    margin: 0 auto; 
    width: 90%;
  }

  .button-area {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .link {
    width: 80%;
    margin: 10px 0;
  }
}

</style>
