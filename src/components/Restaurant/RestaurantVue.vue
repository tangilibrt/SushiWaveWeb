<template>
  <div class="restaurantPageContainer">
    <div class="restaurantTitle">
      <img src="@/assets/restaurants/mainImage.png" alt="Title Image" id="first_image">
      <h1>Nos Restaurants</h1>
      <PinkButton id = first_button text="Réserver" />
    </div>
    <div class="about">
      <img src="@/assets/restaurants/waves.png" alt="waves" id="waves">
      <h2 class="sectionRestaurantTitle">À propos</h2>
      <a class="sectionTextR">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
        .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</a>
    </div>
    <div class="allRestaurants">
      <div class="restaurant restaurant1">
        <img src="@/assets/restaurants/restaurantLesMangles.jpg" alt="restaurant les mangles" id="ImgRestaurant1">
        <div class="restaurantInfos restaurantInfos1">
          <h2 class="restoTitle">
            Restaurant des Mangles
          </h2>
          <p class="restoText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </p>
          <pink-button id="reserverBtn" text="Réserver" />
        </div>
      </div>
      <div class="restaurant restaurant2">
        <img src="@/assets/restaurants/restaurantCluny.jpg" alt="restaurant Cluny" id="ImgRestaurant2">
        <div class="restaurantInfos restaurantInfos2">
          <h2 class="restoTitle">
            Restaurant de Cluny
          </h2>
          <p class="restoText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </p>
          <pink-button id="reserverBtn" text="Réserver" />
        </div>
      </div>
      <div class="restaurant restaurant3">
        <img src="@/assets/restaurants/restaurantBasseGondeau.png" alt="restaurant Basse Gondeau" id="ImgRestaurant3">
        <div class="restaurantInfos restaurantInfos3">
          <h2 class="restoTitle">
            Restaurant de Basse-Gondeau
          </h2>
          <p class="restoText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            .malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </p>
          <pink-button id="reserverBtn" text="Réserver" />
        </div>
      </div>
    </div>
    <ReservationRect/>
    <GalleryComponent/>
    <footer-sushi/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import FooterSushi from "@/components/General/FooterSushi.vue";
import PinkButton from "@/components/General/PinkButton.vue";
import ReservationRect from "@/components/General/ReservationRect.vue";
import GalleryComponent from "@/components/Restaurant/GalleryComponent.vue";

export default defineComponent({
  components: {GalleryComponent, PinkButton, FooterSushi, ReservationRect}
})
</script>

<style >
.restaurantPageContainer {
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: black;
}

.restaurantTitle {
  position: relative;
  top: 0;
  width: 100%;
  height: 47.86vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#first_image {
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

#first_button {
  position: absolute;
  z-index: 1;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  padding-bottom: 50px;
  z-index: 1;
  color: #FFF;
  text-align: center;
  font-family: motion_picture, serif;
  font-size: 135px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;
}

.sectionRestaurantTitle {
  position: relative;
  z-index: 1;
  text-align: start;
  font-family: motion_picture, serif;
  font-size: 95px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;
  color: black;
  margin-left: 12.2vw ;
  padding-bottom: 50px

}

.about {
  position: relative;
  height: 450px;
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

#waves {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
}

.sectionTextR {
  position: relative;
  z-index: 1;
  text-align: start;
  font-family: Cinzel, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: black;
  margin-right: 32vw;
  margin-left: 11.6vw;
}

.allRestaurants {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.restaurant {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 100px;

  & > * {
    padding: 42px;
  }

}

.restaurantInfos {
  width: 45.83vw;
  text-align: start;
}

#ImgRestaurant1, #ImgRestaurant2, #ImgRestaurant3 {
  width: 40.625vw;
  margin-left: 5.41vw;
  height: 40.625vw;
}

.restoTitle {
  font-family: motion_picture, serif;
  font-size: 5.55vw;
  margin-top: 50px;
}

.restoText {
  font-family: Cinzel, serif;
  color: white;
  font-size: 1.25vw;
  font-weight: 500;
  text-align: start;
}

#reserverBtn {
  margin-top: 3vw;
  width: 250px;
  height: 70px;
}

</style>