<template>
    <div id="content">
        <h1 id="header">Education</h1>
        <div id="master-degree">
            <div class="school-card">
                <img src="../assets/UOA.png" width="300px" class="school-logo">
                <div class="description">
                    <h2>The University of Auckland</h2>
                    <h3>Master of Information Technology (Expected in 07/2025)</h3>
                    <p><b>Coursework: </b>{{ UOACoursework }}</p>
                    <p>Technical Skills: {{ UOATechnicalSkills }}</p>
                </div>
            </div>
        </div>
        <div id="bachelor-degree">
            <div class="school-card">
                <img src="../assets/BNUZ.png" width="300px" class="school-logo">
                <div class="description">
                    <h2>Beijing Normal University, Zhuhai</h2>
                    <h3>Bachelor of Management in Logistics Management (Graduated in 06/2022)</h3>
                    <p><b>Coursework: </b>{{ BNUZ1Coursework }}</p>
                    <p>Technical Skills: {{ BNUZ1TechnicalSkills }}</p>
                </div>
            </div>
        </div>
        <div class="school-card">
            <img src="../assets/BNUZ.png" width="300px" class="school-logo">
            <div class="description">
                <h2>Beijing Normal University, Zhuhai</h2>
                <h3>Bachelor of Commerce in Finance (Minor) (Graduated in 06/2022)</h3>
                <p><b>Coursework: </b>{{ BNUZ2Coursework }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Education',
    data() {
        return {
            UOACoursework: "Programming for Industry, Programming with Web Technology, Advanced Information Security, Big Data and Data Mining, etc.",
            UOATechnicalSkills: "Java, Javascript, Pandas, Tableau, PySpark, etc.",
            BNUZ1Coursework: "Logistic Information System, International Trade and Agency, Supply Chain Management, etc.",
            BNUZ1TechnicalSkills: "Flexsim, Microsoft Access, SPSS statstic, etc.",
            BNUZ2Coursework: "Financial Engineering, Investment, Commercial Law",
            menuVisible: false
        }
    }
};

</script>

<style>
.school-card {
    display: flex;
    justify-items: justify;
    align-items: center;
    margin: 20px;
    background-color: aliceblue;
    border-radius: 20px;
    padding: 10px;
    border: 2px solid #333;
    border-radius: 5px;
}

.description {
    text-align: left;
}

@media (max-width: 800px) {
    #header {
        margin-top: 60px;
    }

    .school-card {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .school-logo {
        width: 100%;
        max-width: 200px;
    }

    .description {
        padding-left: 0;
        text-align: center;
    }
}
</style>