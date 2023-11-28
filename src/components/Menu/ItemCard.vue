<template>
  <div class="itemSushiContainer">
    <svg class="sushi-rec" fill="none" height="209" viewBox="0 0 480 209" width="480"
         xmlns="http://www.w3.org/2000/svg">
      <rect height="208" stroke="white" width="479" x="0.5" y="0.5"/>
    </svg>
    <div  class="item-image-div">
      <img :src="sushiPic" alt="sushi" class="item-image">
    </div>
    <div class="textSushi">
      <h2 class="sushiTitle">{{ sushiName }}
      </h2>
      <h3 class="sushiDescription">
        {{ sushiDescription }}
      </h3>
      <h3 class="price">
        {{ sushiPrice }} €
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sushiName: String,
    sushiDescription: String,
    sushiPrice: Number,
    sushiPic: String,
  },
  mounted() {
    console.log(this.sushiPic)
  }
};
</script>

<style>
.itemSushiContainer {
  position: relative;
  top: 0;
  left: 0;
  width: 562px;
  height: 238px;
  border: 1px solid transparent;
  margin: 77px 77px 0 0;
}

.sushi-rec {
  position: absolute;
  bottom: 0;
  right: 0;
}

.item-image-div {
  position: absolute;
  top: 0;
  left: 0;
  width: 173px;
  height: 197px;
  flex-shrink: 0;
  background-color: black;
  overflow: hidden;
  border: 1px solid white;
}

.item-image {
  position: absolute;
  left: 0;
  bottom: 10px;
  height: 173px;
  object-fit: cover;
}

.textSushi {
  position: absolute;
  bottom: 0;
  height: 209px;
  width: 319px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 199px;
  text-align: start;

}

.sushiTitle {
  color: white;
  font-family: "Cinzel", serif;
  font-size: 22px;
  font-weight: 600;
}

.sushiDescription {
  color: rgba(255, 255, 255, 0.80);
  font-family: "Cinzel", serif;
  font-size: 14px;
  font-weight: 400;
}

.price {
  color: #cca176;
  font-family: "Cinzel",serif;
  font-size: 18px;
  font-weight: 900;
}

@media screen and (max-width: 550px) {
  .itemSushiContainer {
    transform: scale(0.6);
  }

}

@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Oswald&display=swap');

</style>