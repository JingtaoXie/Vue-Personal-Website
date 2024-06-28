<template>
    <div id="content">
        <h1>My Working Experience</h1>
        <div class="internship-card">
            <img src="../assets/OSRAM.png" width="300px" class="company-logo">
            <div class="description">
                <h2>{{ Companyname1 }}</h2>
                <h3>Title: {{ Role1 }}</h3>
                <p>Responsibilities: {{ JobDescription1 }}</p>
                <p>Learning Skills: {{ LearningSkills1 }}</p>
            </div>
        </div>
        <div class="internship-card">
            <img src="../assets/coscologo.png" width="300px" class="company-logo">
            <div class="description">
                <h2>{{ Companyname2 }}</h2>
                <h3>Title: {{ Role2 }}</h3>
                <p>Responsibilities: {{ JobDescription2 }}</p>
                <p>LearningSkills: {{ LearningSkills2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkingExp',
    data() {
        return {
            Companyname1: "Osram (Guangzhou)",
            Role1: "Supply Chain Intern (11/2021 to 03/2022)",
            JobDescription1: "Handled stock transfers, managed new model product distribution, supported product phase in/out management, and drove delivery service improvement. Collaborated on data accuracy in SAP, especially PO and MRP, and assisted with data analysis.",
            LearningSkills1: "Data Analysis, Microsoft PowerBI, SAP R/4",
            Companyname2: "Guangzhou Zhenhua Shipping CO. Ltd, Guangdong, China",
            Role2:"Business Specialist Intern (04/2020 to 08/2020)",
            JobDescription2:"Assisted the manager in operating the Chuanhuoyi Platform, a social media account for coastal bulk cargo transportation. Collected and collated daily information on large ships and shipping prices, and provided feedback reports",
            LearningSkills2: "Report writing, Data analysis"

        }
    }
}
</script>

<style>
body, html {
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
  display: flex;
  align-items: center;
  margin: 20px auto;
  background-color: aliceblue;
  border-radius: 20px;
  height: 250px;
  padding: 20px;
  border: 2px solid #333;
  max-width: 1000px;
}

.company-logo {
  width: 300px;
  height: auto;
}

.description {
  text-align: left;
  padding-left: 20px;
}

@media (max-width: 600px) {
  .internship-card {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 10px;
  }

  .company-logo {
    width: 100%;
    max-width: 200px;
  }

  .description {
    padding-left: 0;
    text-align: center;
  }
}



</style>