<template>
  <div class="containerMenu">
    <div class="containerMenuTitle">
      <img src="../../../public/menu/bgMenu.png" alt="bgMenu" id="first_image">
      <h1 id="menu_title">Notre carte</h1>
    </div>
    <div class="containerMenuCategories">
      <div class="categories">
        <div class="recCat">

          <button class="category recommandations" v-on:click="showCategory('recommandations')">recommandations</button>

          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectrecommandations">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>

        </div>
        <div class="recCat" >
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectmenus">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category menus" v-on:click="showCategory('menus')">menus</button>
        </div>
        <div class="recCat">
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectsashimis">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category sashimis" @click="showCategory('sashimis')">sashimis</button>
        </div>
        <div class="recCat">
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectsushis">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category sushis" @click="showCategory('sushis')">sushis</button>
        </div>
        <div class="recCat" >
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectmakis">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category makis" @click="showCategory('makis')">makis</button>
        </div>
        <div class="recCat">
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectrolls">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category rolls" @click="showCategory('rolls')">rolls</button>
        </div>
        <div class="recCat">
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectbrochettes">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category brochettes" @click="showCategory('brochettes')">brochettes</button>
        </div>
        <div class="recCat">
          <svg width="100%" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="pinkRectaccompagnements">
            <rect x="8" y="1" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
            <rect x="1" y="7" width="100%" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
            <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>
          </svg>
          <button class="category accompagnements" @click="showCategory('accompagnements')">accompagnements</button>
        </div>
      </div>
    </div>
    <div class="sushiContainer">
      <ItemCategory v-if="selectedCategory" @close="showRecommandations = null" :title="selectedCategory.title" :category=selectedCategory.label />
    </div>
    <img src="@/assets/menu/bottomMenu.png " alt="bottomMenu" id="bottom_image">
    <footer-sushi/>
  </div>
</template>

<script>

import ItemCategory from "@/components/Menu/Category.vue";
import categories from "@/menuItems.json"
import FooterSushi from "@/components/General/FooterSushi.vue";

export default {
  components: {FooterSushi, ItemCategory},
  methods: {
    showCategory(category) {
      this.selectedCategory = {
        title: category.toUpperCase(),
        label: category,
        informations: this.categories[category]
      }
      const pinkRect = document.getElementsByClassName("pinkRect" + category)[0];
      pinkRect.style.opacity = 1;
    //   then we select all the other element that contains pinkrect in their name and set their opactity to 0
      const pinkRects = document.querySelectorAll("[class*='pinkRect']");
      pinkRects.forEach((pinkRect) => {
        if (pinkRect.classList[0] !== "pinkRect" + category) {
          pinkRect.style.opacity = 0;
        }
      })


    },
  },
  mounted() {
    this.showCategory("recommandations")
    const pinkRect = document.getElementsByClassName("pinkRectrecommandations")[0];
    pinkRect.classList.toggle("show")
  },
  data() {
    return {
      categories,
      selectedCategory: "recommandations",
    }
  }
}

</script>

<style scoped>

.containerMenu {
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.containerMenuTitle {
  position: relative;
  top: 0;
  width: 100%;
  height: 34.3vw;
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

#menu_title {
  z-index: 1;
  color: #FFF;
  text-align: center;
  font-family: motion_picture, serif;
  font-size: 135px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;
}

.containerMenuCategories {
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: center;
  .containerMenuCategories::before {
    content: "";
    position: absolute;
    top: 0;
    right: -30px;
    height: 100%;
    width: 30px;
    background-color: black;
    box-shadow: -10px 0 20px rgba(0, 0, 0, 0.5); /* Adjust shadow properties */
    z-index: -1;
  }
}

.recCat {
  position: relative;

}

.show {
  opacity: 1;
}

.pinkRectrecommandations {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 260px;
    height: 50px;
  }
}

.pinkRectmenus {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 102px;
    height: 50px;
  }
}

.pinkRectsashimis {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 124px;
    height: 50px;
  }
}

.pinkRectsushis {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 100px;
    height: 50px;
  }
}

.pinkRectmakis {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 96px;
    height: 50px;
  }
}

.pinkRectrolls {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 94px;
    height: 50px;
  }
}

.pinkRectbrochettes {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 164px;
    height: 50px;
  }
}

.pinkRectaccompagnements {
  opacity: 0;
  width: 300px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 0;
  .rec1, .rec2, .rec3 {
    width: 256px;
    height: 50px;
  }
}

button {
  position: relative;
  z-index: 1;
  border: none;
  background-color: transparent;
}

.arrow {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}


.categories {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 70%;
  flex-wrap: wrap;
  border: 1px solid black;
}

.blur-box {
  background-color: #555;
  box-shadow: 0 0 5px 10px #555;
}

.category {
  border: none;
  background: none;
  color: white;
  font-family: Cinzel, serif;
  font-size: 22px;
  margin: 50px;
  cursor: pointer;
}

.sushiContainer {
  min-height: 80vh;
  background-color: black;
}

@media screen and (width < 550px) {
  .containerMenu {
    overflow-x: hidden;
  }
  .containerMenuTitle {
    height: 500px;
    width: 100%;
    overflow-x: hidden;
  }
  #menu_title {
    padding-bottom: 0;
  }

  #first_image {
    height: 100%;
    width: auto;
  }
  .categories {
    flex-wrap: nowrap;
    overflow-x: scroll;
    max-width: 100%;
    justify-content: flex-start;
  }
}

</style>