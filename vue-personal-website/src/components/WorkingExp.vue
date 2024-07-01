<template>
  <div id="content">
    <h1 id="title">My Working Experience</h1>
    <div class="internship-card" @click="flipCard($event, 1)">
      <div class="card-inner">
        <div class="card-front">
          <img src="../assets/OSRAM.png" width="300px" class="company-logo">
          <div class="description">
            <h2>{{ Companyname1 }}</h2>
            <h3>Title: {{ Role1 }}</h3>
            <p>Responsibilities: {{ JobDescription1 }}</p>

          </div>
        </div>
        <div class="card-back">
          <div class="description">
            <h2>More about this role</h2>
            <p>Learning Skills: {{ LearningSkills1 }}</p>
            <p>Company Introduction: {{ CompanyIntro1 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="internship-card" @click="flipCard($event, 1)">
      <div class="card-inner">
        <div class="card-front">
          <img src="../assets/coscologo.png" width="300px" class="company-logo">
          <div class="description">
            <h2>{{ Companyname2 }}</h2>
            <h3>Title: {{ Role2 }}</h3>
            <p>Responsibilities: {{ JobDescription2 }}</p>
          </div>
        </div>
        <div class="card-back">
          <div class="description">
            <h2>More about this role</h2>
            <p>Learning Skills: {{ LearningSkills2 }}</p>
            <p>Company Introduction: {{ CompanyIntro2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'WorkingExp',
  data() {
    return {
      Companyname1: "Osram (Guangzhou)",
      Role1: "Supply Chain Intern (11/2021 to 03/2022)",
      JobDescription1: "Handled stock transfers, managed new model product distribution, supported product phase in/out management, and drove delivery service improvement. Collaborated on data accuracy in SAP, especially PO and MRP, and assisted with data analysis.",
      LearningSkills1: "Data Analysis, Microsoft PowerBI, SAP R/4",
      Companyname2: "Guangzhou Zhenhua Shipping CO. Ltd, Guangdong, China",
      Role2: "Business Specialist Intern (04/2020 to 08/2020)",
      JobDescription2: "Assisted the manager in operating the Chuanhuoyi Platform, a social media account for coastal bulk cargo transportation. Collected and collated daily information on large ships and shipping prices, and provided feedback reports.",
      LearningSkills2: "Report writing, Data analysis",
      CompanyIntro1: "Osram is one of the most famous and largest lightening manufactuerer in the world, and it is headquartered in Germany. OSRAM has several offices in China, of which the Guangzhou office is mainly responsible for supply chain planning, incoming and outgoing raw materials and product transportation in the Asia-Pacific region.",
      CompanyIntro2: "Guangzhou Zhenhua Shipping Co., Ltd. is a shipping company under COSCO Shipping Bulk Carrier Group, whose business scope includes but is not limited to water freight forwarding and transport. It also operates a number of shipping analysis media."

    }
  },
  methods: {
    flipCard(event, cardNumber) {
      const card = event.currentTarget.querySelector('.card-inner');
      if (card.classList.contains('flipped')) {
        gsap.to(card, { duration: 0.5, rotationY: 0 });
        card.classList.remove('flipped');
      } else {
        gsap.to(card, { duration: 0.5, rotationY: 180 });
        card.classList.add('flipped');
      }
    }
  }
}
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#content {
  padding: 20px;
}

h1 {
  text-align: center;
}

.internship-card {
  perspective: 1000px;
  width: 100%;
  max-width: 1000px;
  margin: 50px auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 250px;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-front {
  background-color: aliceblue;
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #333;
}

.card-back {
  background-color: aliceblue;
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #333;
  transform: rotateY(180deg);
}

.company-logo {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.description {
  text-align: left;
}

@media (max-width: 800px) {
  #title {
    margin-top: 60px;
  }

  .internship-card {
    width: 90%;
    margin: 20px auto;
    height: auto;
  }

  .card-inner {
    height: 500px;
    padding: 20px 10px;
    width: 90%;
  }

  .card-front,
  .card-back {
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
  }

  .company-logo {
    width: 100%;
    max-width: 200px;
  }

  .description {
    text-align: center;
    padding: 10px;
  }
}
</style>