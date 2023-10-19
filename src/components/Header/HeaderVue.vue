<template>
  <div class = "headerContainer">
    <img src="@/assets/logoLettre.svg" alt="logo">
    <div id = "headerText">
        <router-link id="accueil" to="/">Accueil</router-link>
        <router-link id="menu" to="/menu">Menu</router-link>
        <router-link id="nosrestaurants" to="/nosrestaurants">Nos Restaurants</router-link>
        <a>Réserver</a>
    </div>
  </div>
  <div class="headerContainerMobile">
    <HeaderMobileVue/>
  </div>
</template>

<script setup>

import HeaderMobileVue from "@/components/Header/HeaderMobileVue.vue";
</script>

<style scoped>
.headerContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 4.621vw;
  padding-right: 5.655vw;
  padding-top: 3vh;
  z-index: 10;

}

#headerText, #accueil, #menu, #nosrestaurants {
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #FFF;
  font-family: Cinzel,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-decoration: none;
}

a:hover{
  color: #fff;
  text-decoration: none;
}

a:before, a:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -2px;
  background: #fff;
}

a:before {
  left: 0;
}
a:after {
  right: 0;
  background: #fff;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

a:hover:before {
  background: #fff;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

a:hover:after {
  background: transparent;
  width: 100%;
  transition: 0s;
}

img {
  width: 15vw
}

a {
  position: relative;
  display: block;
  margin-left: 3.724vw;
  cursor: pointer;
}

@media screen and (width > 649px){
  .headerContainerMobile{
    display: none;
  }
  .headerContainer {
    display: flex;
  }

}

@media screen and (width < 650px) {
  .headerContainerMobile{
    display: block;
  }
  .headerContainer{
    display: none;
  }
}

</style>