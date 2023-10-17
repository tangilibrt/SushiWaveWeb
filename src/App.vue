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
