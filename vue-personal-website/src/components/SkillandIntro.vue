<template>
    <div id="content">
        <h1>My Introduction</h1>
        <div id="introduction-card">
            <div id="introduction-content">
                <p>{{ Introduction }}</p>
            </div>
        </div>
        <h1>My Qualification and Techical Skills</h1>
        <div class="qualiandskill">
            <div class="qualification">
                <h2>My Qualificatios</h2>
                <ul>
                    <li>Google Cybersecurity Specialization</li>
                    <li>Record of Achievement - Composing and automating with SAP Build the No-Code Way</li>
                    <li>Record of Achievement - Implementing with SAP Cloud ALM</li>
                    <li>LeanIX Certified Practitioner (Level1)</li>
                </ul>
            </div>

            <div class="skills">
                <h2>My Skills</h2>
                <ul>
                    <li>Programming (Java, Python)</li>
                    <li>Web development (Javascript, Html5, CSS, Vue)</li>
                    <li>Data Analysis (Basic SQL, Spyder, Tableau, Pandas, SPSS modeler)</li>
                </ul>
            </div>
        </div>

        <div id="project-card">
            <h1>My Project</h1>
            <div id="project-matrix">
                <div class="project-item">
                    <img src="../assets/pokemon.png" width="250px">
                    <div class="description">
                        <h3>Project 1: {{ Project1 }}</h3>
                        <h5>{{ Association1 }}</h5>
                        <p>{{ Description1 }}</p>
                        <p>Language/Techiques: {{ Stack1 }}</p>
                        <p>Github Link: <a
                                href="https://github.com/UOA-PGCIT-FULLTIME/web-pokemon-assignment-s2-2023-JingtaoXie">https://github.com/UOA-PGCIT-FULLTIME/web-pokemon-assignment-s2-2023-JingtaoXie</a>
                        </p>
                    </div>
                </div>
                <div class="project-item">
                    <img src="../assets/group3blog.png" width="250px">
                    <div class="description">
                        <h3>Project 2: {{ Project2 }}</h3>
                        <h5>{{ Association2 }}</h5>
                        <p>{{ Description2 }}</p>
                        <p>My Main Contribution: {{ Contribution }}</p>
                        <p>Language/Techiques: {{ Stack2 }}</p>
                        <p>Github Link: <a
                                href="https://github.com/UOA-PGCIT-FULLTIME/group-3-s2-23-v1">https://github.com/UOA-PGCIT-FULLTIME/group-3-s2-23-v1</a>
                        </p>
                    </div>
                </div>
                <div class="project-item">
                    <img src="../assets/Calculator.png" width="250px">
                    <div class="description">
                        <h3>Project 3: {{ Project3 }}</h3>
                        <!-- <h5>{{ Association3 }}</h5> -->
                        <p>{{ Description3 }}</p>
                        <p>Language/Techiques: {{ Stack3 }}</p>
                        <p>Github Link: <a
                                href="https://github.com/JingtaoXie/Calculator?tab=readme-ov-file">https://github.com/JingtaoXie/Calculator?tab=readme-ov-file</a>
                        </p>
                    </div>
                </div>
                <div class="project-item">
                    <img src="../assets/hertzcms.png" width="250px">
                    <div class="description">
                        <h3>Project 4: {{ Project4 }}</h3>
                        <h5>{{ Association4 }}</h5>
                        <p>{{ Description4 }}</p>
                        <p>Language/Techiques: {{ Stack4 }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p>More info can be browsed in <a
                href="https://www.linkedin.com/in/jingtao-xie-559956284/">https://www.linkedin.com/in/jingtao-xie-559956284/</a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'SkillandIntro',
    data() {
        return {
            Introduction: "My name is Jingtao Xie, you can call me Toby. As you can see from my education profile, currently I am a student of information technology in the University of Auckland, and my coursework in progress are more relevant with data analysis, cybersecurity and cloud computing. Therefore, I am also interested in taking these directions as my future career path, and seeking some relative roles.",
            Project1: "Pokemon Data Viewer",
            Association1: "Associated with The University of Auckland, COMPSCI719",
            Description1: "A website-developing assignment from one of my courseworks, which supports users view the information and data of a pokemon. Users can also delete or add their favourite pokemons. All relevant info are from pokemon offical api.",
            Stack1: "Javascript, CSS, Html5",
            Project2: "Personal blog website (Team project)",
            Contribution: "Personal Hompage and Dashboard building (Frontend), relative dao function (Backend)",
            Association2: "Associated with The University of Auckland, COMPSCI719",
            Description2: "A blog system which allows users to upload, edit, delete, manage their own articles. Users can also follow other users and take some actions to other users's articles, such as like or dislike, comments or delete comments, etc.",
            Stack2: "Javascript, CSS, Html5",
            Project3: "Simple Tax Calculator",
            Description3: "A simple tax calculator which can allows user to calculate the personal income' tax much more easily. Its function is similar with normal calculator, but have some shortcut for users to choose the tax rate.",
            Stack3: "Python and Python Tkinter",
            Project4: "HertzRide Contract Management Mobile APP",
            Association4: "Associated with The University of Auckland, INFOSYS704",
            Description4: "An application which can allow users browsing, modifying, deleting contracts, and also do some relevant actions. This app has both mobile and web version, and is completed by SAP build appgyver. Its function compliment and data transferring are mainly drove by Javascript and REST API.",
            Stack4: "SAP appgyver, Javascript, REST"








        }
    }
}
</script>

<style>
#introduction-card {
    justify-items: justify;
    align-items: center;
    background-color: aliceblue;
    padding: 10px;
    border: 2px solid #333;
    border-radius: 5px;
}

#introduction-content {
    text-align: left;

}

.qualiandskill {
    display: flex;
    width: 100%;
    text-align: left;
    background-color: aliceblue;
    border-radius: 20px;
    border: 2px solid #333;
    border-radius: 5px;
}

.qualification {
    width: 100%;
    margin-left: 20px;
}

.skills {
    width: 100%;
}


#project-matrix {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    height: 100%;
}

.project-item {
    background-color: aliceblue;
    border: 2px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    border-radius: 5px;
}

.description {
    margin-left: 20px;
}
</style>