<script>

export default {
  name: "HeaderMobileVue"
}

</script>

<template>
  <!--mobilescreen can be used in @media queries, if you want to display the menu on mobile devices only/ just set on .mobilescreen{display=none} on regular screen-sizes-->
  <nav class="mobilescreen">
    <div title="Menu" id="menuToggle">
      <input type="checkbox">
      <span></span>
      <span></span>
      <span></span>
      <ul id="menuMobile">
        <li>
          <router-link id="accueil" to="/">Accueil</router-link>
        </li>
        <li><router-link id="menu" to="/menu">Menu</router-link>
        </li>
        <li><router-link id="nosrestaurants" to="/nosrestaurants">Nos Restaurants</router-link>
        </li>
        <li>
          <a style="color: #cca176">Réserver</a>
        </li>
      </ul>
    </div>
  </nav>


</template>

<style >
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900');
/**This is just the Codepen area here, feel free to style it as you want in your own project**/
body {
  background: transparent;
}

html {
  font-family: 'Roboto', sans-serif;
}


/**Mobile (Hamburger-)Menu from here on**/

/** This is kind of a styled trigger here **/
#menuToggle
{
  display: block;
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 20;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span
{
  display: block;
  width: 26px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #ECF0F1;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 3px 0px;
  transition: transform 0.2s cubic-bezier(0.77,0.2,0.05,1.0),
  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #fff;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg)
  scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

/*This is the Menu part, which gets triggered by toggle*/
#menuMobile
{
  position: absolute;
  width: 100vw;
  height: 110vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: rgba(18, 19, 19, 0.97);
  list-style-type: none;
  transform-origin: 0 0;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  text-align: center;

}


#menuMobile li
{
  padding: 15px 0;
  color: #000000;
  list-style-type: none;
  font-size: 2em;
  font-weight: 300;
}


#menuMobile li a {
  color: #fff;
  text-decoration: none;

}



#menuMobile li a:hover {
  color: #cca176;
  text-decoration: none;
}

#menuToggle input:checked ~ ul
{
  transform: scale(1.0, 1.0);
  opacity: 1;
}

@media screen and (width > 649px){
  .mobilescreen{
    display: none;
  }

}

@media screen and (width < 650px) {
  .mobilescreen{
    display: block;
  }
}

</style>