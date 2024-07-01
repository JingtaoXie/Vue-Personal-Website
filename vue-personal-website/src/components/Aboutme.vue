<template>
    <div id="content">
        <h1 id="title">About me</h1>
        <div id="imgandintroduction">
            <el-card style="max-width: 300px" id="card" height="200px">
                <template #header>Photo token in Taupo, NZ</template>
                <img src="../assets/photo2.png" style="width: 100%" />
            </el-card>
            <div id="intro">
                <p>{{ introduction1 }}</p>
                <p>{{ introduction2 }}</p>
                <p>{{ introduction3 }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Aboutme',
    data() {
        return {
            introduction1: "My name is Jingtao Xie, you can also call me Toby. As you can see from my educational profile, currently I am purchasing a master degree from The University of Auckland. I am seeking spportunities in IT fields to apply my knowledge and skills gained from my studies.",
            introduction2: "I am a very studious and capable of continuous improvement as a student as well as a staff in the workplace. It's been a difficult process to go from a business background in my undergraduate degree to a technical background in my current Masters. However, my personal learning ability has enabled me to get good grades in all the courses I am currently taking. I believe that my attitude of continuous learning will enable me to be competent in my future job in the IT industry.",
            introduction3: "In my spare time, I enjoy photography and travelling. This interest allows me to regulate my emotions and inspires me with skills in photo editing, video editing and basic graphic design."
        };
    }
}
</script>


<style scoped>
#imgandintroduction {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: ". img intro .";
    gap: 20px;
    padding: 20px;
}

#card {
    grid-area: img;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

#intro {
    grid-area: intro;
    width: 100%;
    text-align: left;
    background-color: aliceblue;
    border: 2px solid #333;
    border-radius: 5px;
    padding: 20px;
}

@media (max-width: 800px) {
    #title {
        margin-top: 60px;
    }

    #imgandintroduction {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "img"
            "intro";
        gap: 10px;
    }

    #card {
        width: 100%;
        margin: 0 auto 10px;
    }

    #intro {
        width: 80%;
        text-align: left;
        margin: 0 auto 10px;
    }
}
</style>