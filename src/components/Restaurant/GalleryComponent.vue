<template>
  <div style="height: 200px">
    <h2 class="galleryTitle">Galerie Photo</h2>
  </div>
  <div class="gallery">
    <button class="galleryButton" @click="previousGallery"><img src="/gallery/arrow-left.svg" alt="fleche gauche" class="arrow"></button>
    <div class="hidingRect">
      <div class="galleryContainer">
        <div v-for ="(image, index) in imageList" :key="index" >
          <img :src="image" alt="galleryImage" class="galleryImage">
        </div>
      </div>
    </div>
    <button class="galleryButton" @click="nextGallery"><img src="/gallery/arrow-right.svg" alt="fleche droite" class="arrow"></button>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  data() {
    return {
      isLoading: true,
      imagesToLoad: 0,
      imageList:["/gallery/gallery1.png","/gallery/gallery2.png", "/gallery/gallery3.png", "/gallery/gallery4.png", "/gallery/gallery5.png", "/gallery/gallery1.png", "/gallery/gallery2.png","/gallery/gallery3.png"]
    }
  },
  methods: {
    nextGallery() {
      const galleryContainer = document.getElementsByClassName("galleryContainer")[0];
      galleryContainer.style.left = "-100%";
      // galleryContainer.style.width = "200%";
    },
    previousGallery() {
      const galleryContainer = document.getElementsByClassName("galleryContainer")[0];
      galleryContainer.style.left = "0";
    }
  }
}
</script>
<style>

.gallery {
  position: relative;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
}

.hidingRect {

  width: 90%;
  height: 1000px;
  overflow: hidden;
}

.galleryContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  transition: left 0.5s ease-in-out;
  :nth-child(5n+1) {
    padding-top: 210px;
  }
  :nth-child(5n+2) {
    padding-top: 307px;
  }
  :nth-child(5n+3) {
    padding-top: 210px;
  }
  :nth-child(5n+4) {
    padding-top: 132px;
  }
  :nth-child(5n+5) {
    padding-top: 174px;
  }
}


.galleryImage {
  width: 250px;
  padding-left: 15px;
  padding-right: 15px;
}

.arrow {
  width: 50px;
  height: 50px;
}

.galleryButton {
  background-color: transparent;
  border: none;
  padding: 50px;
  cursor: pointer;
}

.galleryTitle {
  position: absolute;
  left: 30%;
  transform: translate(-40%, 0);
  z-index: 1;
  text-align: center;
  font-family: motion_picture, serif;
  font-size: 150px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;
  color: white;
  padding-bottom: 50px
}



</style>