<template>
    <div id="content">
        <div id="introduction-card">
            <h1>My Introduction</h1>
            <div id="introduction-content">
                <p>{{ Introduction }}</p>
            </div>
        </div>
        <div id="project-card">
            <h1>My Project</h1>
            <div id="project-matrix">
                <div class="project-item">
                    <img >

                </div>
                <div class="project-item">2</div>
                <div class="project-item">3</div>
                <div class="project-item">4</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SkillandIntro',
    data() {
        return {
            Introduction: "My name is Jingtao Xie, you can call me Toby. As you can see from my education profile, currently I am a student of information technology in the University of Auckland, and my coursework in progress are more relevant with data analysis, cybersecurity and cloud computing. Therefore, I am also interested in taking these directions as my future career path, and seeking some relative roles.",



        }
    }
}
</script>

<style>
#introduction-card {
    justify-items: justify;
    align-items: center;
    margin: 20px;
    background-color: aliceblue;
    border-radius: 20px;
    height: 200px;
    padding: 10px;
}

#introduction-content {
    text-align: left;

}

#project-matrix {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    width: 200px;
    height: 200px;
}

.project-item{
    background-color: #ddd;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>