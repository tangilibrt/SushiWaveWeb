<template>
  <div id="reservation_rectangle">
    <h3 class="sectionTitle reservationTitle">
      Réserver
      <a class="golden">&nbsp;Une Table</a>
    </h3>
    <img src="@/assets/sushi_res1.png" alt="sushi res1" id = "img_res1">
    <img src="@/assets/sushi_res2.png" alt="sushi res2" id = "img_res2">
  </div>
</template>

<script>

</script>

<style scoped>
#reservation_rectangle {
  position: relative;
  min-height: 100vh;
  background-color: black;
}

.reservationTitle {
  font-family: motion_picture, serif;
  font-size: 80px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 400;
  line-height: 40px;
}

#img_res1 {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  max-width: 447px;
  max-height: 559px;
  height: auto;
  width: auto;
}

#img_res2 {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  max-width: 408px;
  max-height: 612px;
  height: auto;
  width: auto;
}

.golden {
  color: rgba(255, 201, 148, 0.80);
}

@media screen and (max-width: 400px) {
  #img_res1, #img_res2 {
    opacity: 0;
  }
  .reservationTitle {
    font-size: 50px;
    width: 80vw;
    top: 10%;
  }
}

</style>