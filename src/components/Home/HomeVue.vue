<template>
  <div id="home">
    <div id="MainTitle">
      <img src="@/assets/home.png" alt="Home page background image" id = "first_image"/>
      <h1 id="homeTitle">Le Lorem Ipsum Est Simplement</h1>
      <p>Home page content</p>
      <PinkButton id="first_button" text="Découvrir" link="nosrestaurants"/>
    </div>
    <div id = firstBlackRectangle>
<!--      <img src="@/assets/waves.png" alt="waves" id = "first_waves"/>-->
      <h2 id="scndTitle">Le Lorem Ipsum Est Simplement</h2>
      <a id="scndText">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
      </a>
      <PinkButton id="scnd_button" text="Découvrir" link="/nosrestaurants"/>
      <img src="@/assets/gold_wave.png" alt="vague" id = "palmier">
    </div>
    <div id = "scndBlackRectangle">
      <img src="@/assets/sushi_bol.png" alt="sushi_bol" id = "sushi_bol">
      <div class="section section1">
        <h3 class = "sectionTitle">
          Qui
          <a class="golden">&nbsp;Sommes Nous</a>
        </h3>
        <p class = "sectionText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <PinkButton id="third_button" text="Découvrir" link="/nosrestaurants"/>
      </div>
    </div>
    <div id = "thirdBlackRectangle">
      <div class="section section2">
        <p class = "sectionText sectionText2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <PinkButton id="third_button" text="Découvrir" link="/nosrestaurants"/>
      </div>
      <img src="@/assets/sushi_baguettes.png" alt="sushi baguettes" id = "sushi_baguette">
    </div>
    <img src="@/assets/sushi_rose.png" alt="sushi rose" id = "sushi_rose">
    <ReservationRect/>
    <footer-sushi/>
  </div>
</template>

<script>


import {defineComponent} from "vue";
import PinkButton from "@/components/General/PinkButton.vue";
import FooterSushi from "@/components/General/FooterSushi.vue";
import ReservationRect from "@/components/General/ReservationRect.vue";

export default defineComponent({
  components: {FooterSushi, PinkButton, ReservationRect},
})
</script>

<style scoped>
#home {
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#MainTitle {
  position: relative;
  height: 100vh;
}

#first_image {
  width: auto;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

#homeTitle {
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 50%;
  min-height: 350px;
  height: fit-content;
  min-width: 300px;
  transform: translate(-50%, -50%);
  color: #FFF;
  text-align: center;
  font-family: motion_picture, serif;
  font-size: 135px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;
}

#first_button {
  position: absolute;
  z-index: 1;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#firstBlackRectangle {
  position: relative;
  z-index: 1;
  top: 100%;
  //left: 49.95%;
  //transform: translate(-50%, 0);
  width: 100.1%;
  height: 80.462vh;
  background-color: #000;
  overflow: hidden;
}

#first_waves {
  position: absolute;
  z-index: 0;
  top: -1%;
  left: 0;
  width: 100%;
}

#scndTitle {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 39.306vw;
  color: #FFF;
  text-align: center;
  font-family: motion_picture, sans-serif;
  font-size: 95px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%; /* 66.5px */
}

#scndText {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 39vw;
  color: #FFF;
  text-align: center;
  font-family: Cinzel, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 30.6px */
  letter-spacing: 0.36px;
  text-transform: uppercase;
}

#scnd_button {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#palmier {
  position: absolute;
  top: 88%;
  left: 82%;
  transform: translate(-50%, -36vh) scaleX(-1);
  height: 36vh;

}

#scndBlackRectangle {
  position: static;
  z-index: 1;
  width: 100.1%;
  min-height: 600px;
  background-color: #000;
  display: flex;
  justify-content: center;
}

#sushi_bol {
  padding-right: 10%;
  max-width: 810px;
  max-height: 600px;
  width: auto;
  height: auto;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sectionTitle {
  color: #FFF;
  font-family: motion_picture, sans-serif ;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 50% */
  display: flex;
  padding-bottom: 12%;
}

.golden {
  color: rgba(255, 201, 148, 0.80);
}

.sectionText {
  display: flex;
  color: #FFF;
  font-family: Cinzel, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 30.6px */
  letter-spacing: 0.36px;
  text-transform: uppercase;
  width: 40vw;
  text-align: left;
}

#third_button {
  padding-top: 200px;
  padding-left: 237px;

}

#thirdBlackRectangle {
  position: static;
  z-index: 1;
  top: 260.924%;
  //left: 49.95%;
  //transform: translate(-50%, 0);
  width: 100.1%;
  min-height: 80.462vh;
  background-color: #000;
  display: flex;
  justify-content: space-between;
}

#sushi_baguette {
  max-width: 750px;
  max-height: 398px;
  width: auto;
  height: auto;
  flex-shrink: 0;
}

.section2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 18%;
  margin-top: 11%;
}

#sushi_rose {
  height: 100%;
  width: auto;
}

@font-face {
  font-family: 'motion_picture';
  src: url("MotionPicture_PersonalUseOnly.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@media screen and (width < 550px) {
  * {
    overflow: hidden;
  }
  #homeTitle {
    font-size: 95px;
    top: 40%;
    line-height: 100%;
  }

  #first_button {
    width: 250px;
    height: 70px;
  }

  #firstBlackRectangle {
    height: 750px;
  }
  #scndTitle {
    top: 20%;
    font-size: 60px;
    width: 90vw;
    min-height: 150px;
    line-height: 100%;

  }
  #scndText {
    top: 45%;
    width: 80vw;
    height: 200px;
  }
  #palmier {
    top: 110%;
    height: 20vh;
  }
  #scnd_button {
    width: 250px;
    height: 70px;
    top: 60%;
  }
  #scndBlackRectangle {
    flex-direction: column;
  }
  #sushi_bol {
    padding: 10%;
  }

  .section {
  }

  .sectionTitle {
    font-size: 50px;
    height: 100px;
    line-height: 100%;
    margin-left: 5vw;
  }
  .sectionText {
    width: 90vw;
    height: 350px;
    margin-left: 5vw;
    font-size: 16px;
    text-transform: uppercase;
  }
  #third_button {
    padding-left: 297px;
    padding-top: 100px;
  }
  #thirdBlackRectangle {
    flex-direction: column-reverse;
    padding-bottom: 90px;
  }
  #sushi_baguette {
    padding-top: 100px;
    padding-bottom: 50px;
    width: 100%;
    right: 0;
    height: fit-content;
  }
  .section2 {
    margin-left: 0;
    margin-top: 0;
  }
  #sushi_rose {
    height: 300px;
    width: fit-content;
    left: 50%;
    transform: translate(-50%, 0);
  }


}

</style>