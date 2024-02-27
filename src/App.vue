<template>
  <HeaderVue/>
  <main>
    <router-view />
  </main>
</template>

<script>
import HeaderVue from "@/components/Header/HeaderVue.vue";

export default {
  name: 'App',
  components: {
    HeaderVue,
  },
  watch: {
    $route(to) {
      if (to.name === 'home')
        document.title = 'Sushi Wave Martinique - Page d\'Accueil';
      else if (to.name === 'menu')
        document.title = 'Sushi Wave Martinique - Notre Carte';
      else if (to.name === 'nosrestaurants')
        document.title = 'Sushi Wave Martinique - Nos Restaurants';
      else
      document.title = `Sushi Wave Martinique - ${to.name || 'Page d\'Accueil'}`;
    }
  }
}
</script>

<style>

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
  font-family: Cinzel, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  min-height: 1000px;
  overflow-x: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

@font-face {
  font-family: Cinzel;
  src: url(@/assets/Cinzel-VariableFont_wght.ttf);
}


</style>
