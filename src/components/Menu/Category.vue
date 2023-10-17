<template>
  <div class="categoryContainer">
    <section class="cardsContainer">
      <div v-for="(sushi, key) in categories['categories'][category]" :key="key">
        <ItemCard :sushi-name="sushi.name" :sushi-description="sushi.description" :sushi-price="sushi.price" :sushi-pic="sushi.image" @imageLoaded="image-Loaded" />
      </div>
    </section>
  </div>
</template>

<script>

import categories from "@/menuItems.json";
import ItemCard from "@/components/Menu/ItemCard.vue";

export default {
  name: 'ItemCategory',
  components: { ItemCard},
  props: {
    category: String,
  },
  data() {
    return {
      categories,
      isLoading: true,
      imagesToLoad: 0,
    }
  },
}

</script>

<style scoped>
  .categoryContainer {
    position: relative;
    top: 0;
    min-height: 100vh;
    width: 100vw;
    background-color: black;
  }

  .cardsContainer {
    width: 90vw;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 110px;
  }
</style>