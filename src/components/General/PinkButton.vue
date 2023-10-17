<template>
  <div class="container">
    <svg width="237" height="61" viewBox="0 0 237 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="1" width="228" height="53" stroke="#F67896" stroke-width="2" class="rec1"/>
      <rect x="1" y="7" width="228" height="53" stroke="#F67896" stroke-width="2" class="rec2"/>
      <rect x = '8' y = '7' width = "221" height = "47" stroke="transparent" stroke-width="1" class="rec3"/>

    </svg>
    <router-link :to="'/'+this.link">
      <a>{{ this.text }}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PinkButton",
  props: {
    text: String,
    link: String,
  },
  mounted() {
      const elementButton = this.$el;
      const options = { root: null, rootMargin: '0px', threshold: 1 };
      const observerButton = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            elementButton.classList.add('animationButton');
          } else {
            elementButton.classList.remove('animationButton');
          }
        });
      });
    observerButton.observe(elementButton, options);
  }
};

</script>

<style scoped>

div {
  position: relative;
}

div:hover {
  cursor: pointer;
  .rec1{
    stroke: #cca176;
  }
  .rec2{
    stroke: #cca176;
  }
  .rec3{
    stroke: transparent;
  }
}


svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rec1 {
  stroke-dasharray: 562;
  stroke-dashoffset: 562;
  animation: dash 1.5s ease-in-out forwards;
}

.rec2 {
  stroke-dasharray: 562;
  stroke-dashoffset: -562;
  animation: dashInversed 1.5s ease-in-out forwards;
}

.animationButton {
  .rec1{
    animation: reverseDash 3s ease-in-out forwards;
  }
  .rec2{
    animation: reverseDashInversed 3s ease-in-out forwards;
  }
  .rec3{
    stroke: #F67896;
  }
}

a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  text-align: center;
  font-family: Cinzel, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 30.6px */
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dashInversed {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes reverseDash {

  0% {
    stroke-dashoffset: -562;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes reverseDashInversed {
  0% {
    stroke-dashoffset: 562;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

</style>