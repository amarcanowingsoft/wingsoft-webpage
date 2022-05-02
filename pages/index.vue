<template>
  <div class="fill-height d-flex justify-center justify-md-start flex-column align-center px-md-16 tal"  >
  <div class="d-flex justify-center">
      <div class="first-orbit d-flex justify-center align-center orbit">
        <div class="first-orbit-inner d-flex justify-center align-center orbit">
          <div class="jupiter planet">
          </div>
          <div class="second-orbit-inner d-flex justify-center align-center orbit">
            <div class="mars planet">
            </div>
            <div class="third-orbit-inner d-flex justify-center align-center orbit">
              <div class="earth planet">
              </div>
              <div class="fourth-orbit-inner d-flex justify-center align-center orbit">
                <div class="venus planet">
                </div>
                <div class="fifth-orbit-inner d-flex justify-center align-center orbit">
                  <div class="mercury planet">
                  </div>
                  <div class="sun planet">
                  </div>
                  <div class="sun-top planet">
                  </div>
                  <div class="fifth-orbit-inner-fix-oversun orbit">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <v-row justify="center"  class="fill-height">
    <v-col cols="12" class="pt-md-5 pt-lg-16  mt-md-16 pb-0 pb-md-3">
      <div class="fixed-z-index-text mt-md-10 ">
        <h1 class=" white--text font-weight-medium mt-4 mt-md-2 text-center text-md-left px-3 px-md-0" >
          El mundo está cambiando rápido. 
        </h1>
        <h1 class="white--text font-weight-bold text-center text-md-left px-3 px-md-0" >
          Te ayudamos a mantenerte al día.
        </h1>
        <div>
          <img
              class="homearrow-home"
              alt="homeArrow"
              src="@/assets/img/homeArrow.png"
          >
        </div>
        <h2 class="terciary--text font-weight-medium text-center text-md-left" >
          Hacking the future
        </h2>
        <div class="d-flex justify-center mt-8" v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly">
          <a href="https://www.facebook.com/wingsoftchile/" target="_blank" class="my-1 mx-2 a-icon">
            <v-icon color="white" >mdi-facebook</v-icon>
          </a> 
          <a href="https://www.linkedin.com/company/wingsoftcl" target="_blank" class="my-1 mx-2 a-icon">
            <v-icon color="white" >mdi-linkedin</v-icon>
          </a>
          <a href="https://www.instagram.com/wingsofthq" target="_blank" class="my-1 mx-2 a-icon">
            <v-icon color="white" >mdi-instagram</v-icon>
          </a>
          <a href="https://twitter.com/wingsoft" target="_blank" class="my-1 mx-2 a-icon">
            <v-icon color="white" >mdi-twitter</v-icon>
          </a>
      </div>
      </div>
    </v-col>
    <v-col cols="12" class="pb-0 pt-md-16" style="overflow:hidden" v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly" >
       <div class="d-flex flex-column" style="height:290px;overflow:hidden">
        <a href="https://www.facebook.com/wingsoftchile/" target="_blank" class="my-1 a-icon" style="width:25px">
          <v-icon color="white" >mdi-facebook</v-icon>
        </a> 
        <a href="https://www.linkedin.com/company/wingsoftcl" target="_blank" class="my-1 a-icon" style="width:25px">
          <v-icon color="white" >mdi-linkedin</v-icon>
        </a>
        <a href="https://www.instagram.com/wingsofthq" target="_blank" class="my-1 a-icon" style="width:25px">
          <v-icon color="white" >mdi-instagram</v-icon>
        </a>
        <a href="https://twitter.com/wingsoft" target="_blank" class="my-1 a-icon" style="width:25px">
          <v-icon color="white" >mdi-twitter</v-icon>
        </a>
        <div style="width:1px;height:300px;position:relative;margin-left:10px;margin-top:5px" class="white  "></div>
      </div>
    </v-col>
  </v-row>
  <img
      v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly"
      class="homeScrolldown-home"
      alt="homeArrow"
      src="@/assets/img/homeScrolldown.png"
  >
  </div>
</template>

<script>
export default {
  layout:'main',
  mounted(){
    window.onwheel = e => {
      if(e.deltaY >= 0){
        // Scrolling Down with mouse
        //console.log('Scroll Down');
        if (this.$route.path == '/' && this.$vuetify.breakpoint.lgOnly || 
        this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly ) {
          this.goinOut()
          setTimeout(async () => {
            this.$router.push('/aboutUs')
          }, 200);
        }
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
      }
    }
    
  },
  methods: {
    goinOut(){
     
      const orbits = document.querySelectorAll('.orbit');
      orbits.forEach(element => {
        element.style.animationPlayState = 'paused'
      });

      const jupiter = document.querySelector('.jupiter');
      jupiter.style.animation= `animation-planet 30s linear  forwards infinite, 
                                animationTexturePlanet 40s linear  forwards infinite, 
                                dinamic-shadow-jupiter 30s linear  forwards infinite,
                                goinOutOrbitJupiter 250ms ease-in forwards `
      jupiter.style.animationPlayState = 'paused, running, running, running'

      const mars = document.querySelector('.mars');
      mars.style.animation= `animation-planet 15s linear  forwards infinite,
                            animationTexturePlanet 45s linear  forwards infinite,
                            dinamic-shadow-mars 15s linear  forwards infinite,
                            goinOutOrbitMars 250ms ease-in forwards `
      mars.style.animationPlayState = 'paused, running, running, running'

      const earth = document.querySelector('.earth');
      earth.style.animation= `animation-planet 10s linear  forwards infinite,
                              animationTexturePlanet 40s linear  forwards infinite,
                              dinamic-shadow-earth 10s linear  forwards infinite,
                              goinOutOrbitEarth 250ms ease-in forwards  `
      earth.style.animationPlayState = 'paused, running, running, running'

      const venus = document.querySelector('.venus');
      venus.style.animation= `animation-planet 7.5s linear  forwards infinite, 
                              animationTexturePlanetVenus 45s linear  forwards infinite,
                              dinamic-shadow-venus 7.5s linear  forwards infinite,
                              goinOutOrbitVenus 250ms ease-in forwards `
      venus.style.animationPlayState = 'paused, running, running, running'

      const mercury = document.querySelector('.mercury');
      mercury.style.animation= `animation-planet 6s linear  forwards infinite,
                                animationTexturePlanet 60s linear  forwards infinite,
                                dinamic-shadow-mercury 6s linear  forwards infinite,
                                goinOutOrbitMercury 250ms ease-in forwards `
      mercury.style.animationPlayState = 'paused, running, running, running'

      const sun = document.querySelector('.sun');
      sun.style.animationPlayState = 'paused, running, running'
      const sunTop = document.querySelector('.sun-top');
      sunTop.style.animationPlayState = 'paused, running'
    },

    /*FOR TESTING ONLY */
    pauseAnimations(){
      const planets = document.querySelectorAll('.planet');
      planets.forEach(element => {
        element.style.animationPlayState = 'paused'

      });
      const orbits = document.querySelectorAll('.orbit');
      orbits.forEach(element => {
        element.style.animationPlayState = 'paused'
      });
    },
    resumeAnimations(){
      const planets = document.querySelectorAll('.planet');
      planets.forEach(element => {
        element.style.animationPlayState = 'running'

      });
      const orbits = document.querySelectorAll('.orbit');
      orbits.forEach(element => {
        element.style.animationPlayState = 'running'
      });
    }
  },
}


</script>

<style>
 
  .first-orbit{
    /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
    transform: rotate(-10deg) rotateX(65deg) ;
    width: 1400px; 
    height: 1400px; 
    border-radius: 50% !important;
    border-width: 1px !important;
    position: absolute;
    margin-right: -1400px; /*-760px;*/
    margin-top:-390px; /*-390px;*/
    /*overflow: hidden;*/
  }
  .first-orbit-inner{
    width: 95%;
    height: 95%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite  
  }
  .jupiter{
    top: 0px;
    margin-top: -2.05%; /*25px*/
    position: absolute;
    width: 2.05%; /*31px;*/
    height: 4.85%;/*71px; */
    border-radius: 50% !important;
    /* background-color: #EC0D78; */
    /*background: url("https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg");
    background-size: auto 7vmax;
    /*box-shadow: inset 0.5vmax 0.5vmax 0.5vmax #EC0D78,
                inset 0.8vmax 0.8vmax 1vmax #c1410e88, 
                inset 5vmax 5vmax 10vmax #000;*/
    background: url("@/assets/img/jupiter.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #e1440636,
                  inset 0px -2.5VW 0.7VW  0px #c1410e2a, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082; 
    animation: animation-planet 30s linear  forwards infinite, animationTexturePlanet 40s linear  forwards infinite,
    dinamic-shadow-jupiter 30s linear  forwards infinite 
  }
  @keyframes dinamic-shadow-jupiter{
    0%   {  
      box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #e1440636,
                  inset 0px -2.5VW 0.7VW  0px #c1410e2a, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082; }
    25%  { 
      box-shadow: inset 0.5VW 0VW 0.7VW -0.4VW #e144069c,
                  inset 0.3VW 0VW  0.7VW  0px #c1410e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0;}
    50%  {  
      box-shadow: inset 0px 0.5VW 0.7VW -0.4VW #e144069c,
                  inset 0px 0.5VW 0.7VW  0px #c1410e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0; }
    75%  { 
      box-shadow: inset -0.5VW 0VW 0.7VW -0.4VW #e144069c,
                inset -0.3VW 0VW  0.7VW  0px #c1410e86, 
                inset 0.5VW 5VW 3.2VW 1.1VW #000000a0;}
    100%   {  
      box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #e1440636,
                  inset 0px -2.5VW 0.7VW  0px #c1410e2a, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082;  }
  }

  /* .jupiter {
    width: 8vmax;
    height: 8vmax;
    top: 40%;
    left: 45vmax;
    background: url("https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg");
    background-size: auto 7vmax;
    box-shadow: inset 0.5vmax 0.5vmax 0.5vmax #e7671191,
      inset 0.8vmax 0.8vmax 1vmax #c1410e88, inset 5vmax 5vmax 10vmax #000;
    animation: spin 9s linear infinite;
  } */
  
  @keyframes goinOutOrbitJupiter{
    from  {  margin-top: -2.05% ;  }
    to { margin-top: -30% ;  margin-right: -40% }
  }
  .second-orbit-inner{
    width: 80%;
    height: 80%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite  
  }
  .mars{
    top: 0px;
    margin-top: -2.1%;  /*-25px*/
    position: absolute;
    width: 2.1%; /*25px*/ 
    height: 4.97%;  /*60px*/
    border-radius: 50% !important;
    /*background-color: #898989;*/
    background: url("@/assets/img/mars.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    animation: animation-planet 15s linear  forwards infinite,animationTexturePlanet 45s linear  forwards infinite,
    dinamic-shadow-mars 15s linear  forwards infinite ;
    box-shadow: inset 0px -2VW 0.7VW -0.4VW #e115063b,
                inset 0px -2VW 0.7VW  0px #c11a0e23, 
                inset 0.5VW 5VW 3.2VW 1.1VW #00000062; 
                
  }
   @keyframes dinamic-shadow-mars{
    0%   {  
      box-shadow: inset 0px -2VW 0.7VW -0.4VW #e115063b,
                  inset 0px -2VW 0.7VW  0px #c11a0e23, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000062; }
    25%  { 
      box-shadow: inset 0.7VW 0VW 0.7VW -0.4VW #e115066d,
                  inset 0.3VW 0VW 0.7VW  0px #c11a0e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #0000006e}
    50%  {  
      box-shadow: inset 0px 0.9VW 0.7VW -0.4VW #e115069c,
                  inset 0px 0.5VW 0.7VW  0px #c11a0e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082; }
    75%  { 
      box-shadow: inset -0.7VW 0VW 0.7VW -0.4VW #e115066d,
                  inset -0.3VW 0VW 0.7VW  0px #c11a0e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #0000006e;}
    100%   {  
      box-shadow: inset 0px -2VW 0.7VW -0.4VW #e115063b,
                  inset 0px -2VW 0.7VW  0px #c11a0e23, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000062;  }
  }
  @keyframes goinOutOrbitMars{
    from  {  margin-top: -2.1% ;  }
    to { margin-top: -30% ;  margin-right: -40% }
  }
  .third-orbit-inner{
    width: 78%;
    height: 78%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite  
  }
  /* .earth{
    top: 0px;
    margin-top: -6.3%; 
    position: absolute;
    width: 6.3%;  
    height: 14.91%; 
    border-radius: 50% !important;
    background-color: #319620;
    animation: animation-planet 10s linear  forwards infinite  
  } */
  .earth{
    top: 0px;
    margin-top: -6.3%; /*-60px*/ 
    position: absolute;
    width: 6.3%; /*59px*/ 
    height: 14.91%; /*135px*/ 
    border-radius: 50% !important;
    /* background-color: #319620; */
    background: url("@/assets/img/earth.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    animation: animation-planet 10s linear  forwards infinite  , animationTexturePlanet 40s linear  forwards infinite,
    dinamic-shadow-earth 10s linear  forwards infinite  ;
    
    box-shadow: inset 0px -5VW 0.6VW -0.4VW #32962031,
                inset 0px -2.5VW 0.7VW  0px rgba(32, 150, 107, 0.258), 
                inset 0.5VW 5VW 3.2VW 1.1VW #0000005c;  
  }
  @keyframes dinamic-shadow-earth{
    0%   {  
      box-shadow: inset 0px -3VW 0.6VW -0.4VW #32962031,
                  inset 0px -1.5VW 0.7VW  0px rgba(32, 150, 107, 0.258), 
                  inset 0.5VW 5VW 3.2VW 1.1VW #0000005c; }
    25%  { 
      box-shadow: inset 1.5VW  0VW 0.6VW -0.4VW #32962062,
                  inset 0.6VW  0VW 0.7VW  0px rgba(32, 150, 107, 0.455), 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082;}
    50%  {  
      box-shadow: inset 0px 3VW 0.6VW -0.4VW #32962062,
                  inset 0px 1.5VW 0.7VW  0px rgba(32, 150, 107, 0.455), 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082;  }
    75%  { 
      box-shadow: inset -1.5VW  0VW 0.6VW -0.4VW #32962062,
                  inset -0.6VW  0VW 0.7VW  0px rgba(32, 150, 107, 0.455), 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082;}
    100%   {  
      box-shadow: inset 0px -3VW 0.6VW -0.4VW #32962031,
                  inset 0px -1.5VW 0.7VW  0px rgba(32, 150, 107, 0.258), 
                  inset 0.5VW 5VW 3.2VW 1.1VW #0000005c;   }
  }
  /* .earth{
    top: 45%;
    width: 5vmax;
    height: 5vmax;
    background: url("https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg");
    background-size: auto 4vmax;
    left: 34vmax;
    animation: spin 15s linear infinite;
    box-shadow: inset 0.5vmax 0.5vmax 0.5vmax rgba(75, 170, 146, 0.767),
    inset 0.5vmax 0.5vmax 6vmax #000;
  } 
    background-color: #319620;
    animation: animation-planet 10s linear  forwards infinite  
  }*/
  @keyframes goinOutOrbitEarth{
    from  {  margin-top: -6.3% ;  }
    to { margin-top: -50% ;  margin-right: -70% }
  }
  .fourth-orbit-inner{
    width: 65%;
    height: 65%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite;
  }
  .venus{
    top: 0px;
    margin-top: -6%; /*-29px*/ 
    position: absolute;
    width: 6%; /*37px*/ 
    height:14.2%;  /*82px*/ 
    border-radius: 50% !important;
    /*background-color: #040131;*/
    background: url("@/assets/img/venus.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    animation: animation-planet 7.5s linear  forwards infinite  , animationTexturePlanetVenus 45s linear  forwards infinite,
    dinamic-shadow-venus 7.5s linear  forwards infinite;

    box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #e1440636,
                inset 0px -2.5VW 0.7VW  0px #c1410e2a, 
                inset 0.5VW 5VW 3.2VW 1.1VW #00000082;  
  }
  @keyframes dinamic-shadow-venus{
    0%   {  
      box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #e1440636,
                  inset 0px -2.5VW 0.7VW  0px #c1410e2a, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082; }
    25%  { 
      box-shadow: inset 0.5VW 0VW 0.7VW -0.4VW #e144069c,
                  inset 0.3VW 0VW  0.7VW  0px #c1410e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0;}
    50%  {  
      box-shadow: inset 0px 0.5VW 0.7VW -0.4VW #e144069c,
                  inset 0px 0.5VW 0.7VW  0px #c1410e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0; }
    75%  { 
      box-shadow: inset -0.5VW 0VW 0.7VW -0.4VW #e144069c,
                  inset -0.3VW 0VW  0.7VW  0px #c1410e86, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0;}
    100% {  
      box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #e1440636,
                  inset 0px -2.5VW 0.7VW  0px #c1410e2a, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000082;  }
  }
  @keyframes goinOutOrbitVenus{
    from  {  margin-top: -6% ;  }
    to { margin-top: -50% ;  margin-right: -70% }
  }
  .fifth-orbit-inner{
    width: 52%;
    position: relative;
    height: 52%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite;
    z-index: 10;
  }
  .mercury{
    top: 0px;
    margin-top: -8.1%; /*-20px*/ 
    position: absolute;
    width: 8.1%; /*25px*/ 
    height: 19.17%;  /*60px*/ 
    border-radius: 50% !important;
    /*background-color: #E37330;*/
    animation: animation-planet 6s linear  forwards infinite  , animationTexturePlanet 60s linear  forwards infinite,
    dinamic-shadow-mercury 6s linear  forwards infinite ;
    background: url("@/assets/img/mercury.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    z-index: 15;
     box-shadow:  inset 0px -2.5VW 0.7VW -0.4VW #c6c5c589,
                  inset 0px -1VW 0.7VW  0px #c6c5c50e, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000024;  
  }
  @keyframes dinamic-shadow-mercury{
    0%   {  
      box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #c6c5c589,
                  inset 0px -1VW 0.7VW  0px #c6c5c50e, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000024;  }
    25%  { 
      box-shadow: inset 1VW 0VW 0.7VW -0.4VW #c6c5c5a2,
                  inset 0.5VW 0VW 0.7VW  0px #c6c5c53f, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0; }
    50%  {  
      box-shadow: inset 0px 1VW 0.7VW -0.4VW #c6c5c5a2,
                  inset 0px 0.5VW 0.7VW  0px #c6c5c53f, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0; }
    75%  { 
      box-shadow: inset -1VW 0VW 0.7VW -0.4VW #c6c5c5a2,
                  inset -0.5VW 0VW 0.7VW  0px #c6c5c53f, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #000000a0; }
    100%   {  
      box-shadow: inset 0px -2.5VW 0.7VW -0.4VW #c6c5c589,
                  inset 0px -1VW 0.7VW  0px #c6c5c50e, 
                  inset 0.5VW 5VW 3.2VW 1.1VW #00000024;   }
  }
  @keyframes goinOutOrbitMercury{
    from  {  margin-top: -8.1% ;  }
    to { margin-top: -80% ;  margin-right: -90% }
  }
  .sun{
    width: 55%; /* 152px;*/
    position: relative;
    height: 130.18%; /*  335px;*/
    border-radius: 50% !important;
    /* background-color: #FFC75F; */
    /* border-bottom:8vw solid #2a2419;; */
    background: url("@/assets/img/sun.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    animation: animation-planet  6s linear  forwards infinite, sun-fire  5s linear  forwards infinite  , animationTexturePlanet 200s linear  forwards infinite ;
    z-index: 5;
    /* box-shadow: 0px 0px 50px #7108B1; */
    
  }

  .sun-top{
    width:  55%; /* 152px;*/
    position: absolute;
    height: 130.18%;/*  335px;*/
    border-radius: 50% !important;
    background: url("@/assets/img/sun-top.webp");
    background-repeat: repeat-x;
    background-position:  0px 0px;
    background-size: 200% 100%;
    
    animation: animation-planet 6s linear  forwards infinite   , animationTexturePlanet 200s linear  forwards infinite ;
    z-index: 20;
    /*border-top:8vw solid #FFC75F;*/
    /*box-shadow: 0 0 8px 8px #ffffff63 inset;*/
    /* background:url("../assets/img/sun.png"); */
    /* box-shadow: inset 0.5vmax 0.5vmax 0.5vmax #724d08,
    inset 0.8vmax 0.8vmax 0.8vmax #563801; */
    
  }

  .fifth-orbit-inner-fix-oversun{
    width: 100%;
    position: absolute;
    height: 100%;
    border: 3px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    z-index: 10;
  }
  
  @keyframes animation-orbit {
    from { transform: rotate(0deg) ; }
    to   { transform: rotate(360deg) ; }
  }
  @keyframes animation-planet{
    from { transform: rotate(0deg) ; }
    to   { transform: rotate(-360deg) ; }
  }
  @keyframes sun-fire{
    0% { box-shadow: 0px 0px 50px #7108B1;}
    50% { box-shadow: 0px 0px 50px #ff6fd9; }
    100% { box-shadow: 0px 0px 50px #7108B1;}
  }

  @keyframes animationTexturePlanet{
    0% { background-position:  0px 0px;  }
    100%  { background-position:  600px 0px }
  }
  /* venus rotates in the opposite direction  */
  @keyframes animationTexturePlanetVenus{
    0% { background-position:  0px 0px;  }
    100%  { background-position:  -600px 0px }
  }

 
 
  .fixed-z-index-text{
    position: relative;
    z-index: 21;
    
  }

  .fixed-z-index-text h1{
    font-size:50px
  }
  .fixed-z-index-text h2{
    font-size:35px
  }

  
  @media screen and (max-width: 960px){/*
    .first-orbit{
      margin-right: 0px;
      margin-top:-90px;
      position: relative;
    }*/
    .fixed-z-index-text div img{
      width: 95%;
      margin-left: 2.5%;
    }
    .tal{
      width:100%
    }
  }

  @media screen and (max-width: 600px){
    .fixed-z-index-text h1{
      font-size:30px
    }
    .fixed-z-index-text h2{
      font-size:20px
    }
  }
  @media screen and (min-width: 600px) and (max-width: 960px){
    .fixed-z-index-text h1{
      font-size:40px
    }
    .fixed-z-index-text h2{
      font-size:25px
    }
  }
  @media screen and (max-width: 320px){
    /*.first-orbit{
      width: 200px;
      height: 200px;
      margin-top:-60px;
    }
    .fixed-z-index-text{
      margin-top:-50px;
    }*/
  }
  @media screen and (min-width: 320px) and (max-width: 400px){
    /*.first-orbit{
      width: 305px;
      height: 305px;
    }
    .fixed-z-index-text{
      margin-top:-70px;
    }*/
  }
  @media screen and (min-width: 400px) and (max-width: 500px){
    /*.first-orbit{
      width: 390px;
      height: 390px;
      margin-top:-110px;
    }
    .fixed-z-index-text{
      margin-top:-80px;
    }*/
  }
   @media screen and (min-width: 500px) and (max-width: 600px){
    /*.first-orbit{
      width: 490px;
      height: 490px;
      margin-top:-130px;
    }
    .fixed-z-index-text{
      margin-top:-95px;
    }*/
  }
  @media screen and (min-width: 600px) and (max-width: 700px){
    /*.first-orbit{
      width: 600px;
      height: 600px;
      margin-top:-160px;
    }/*
    .fixed-z-index-text{
      margin-top:-160px;
    }*/
  }
  @media screen and (min-width: 700px) and (max-width: 800px){
    /*.first-orbit{
      width: 700px;
      height: 700px;
      margin-top:-190px;
    }
    .fixed-z-index-text{
      margin-top:-180px;
    }*/
  }
  @media screen and (min-width: 800px) and (max-width: 900px){
    /*.first-orbit{
      width: 800px;
      height: 800px;
      margin-top:-210px;
    }/*
    .fixed-z-index-text{
      margin-top:-200px;
    }*/
  }
  @media screen and (min-width: 900px) and (max-width: 960px){
    /*.first-orbit{
      width: 900px;
      height: 900px;
      margin-top:-250px;
    }/*
    .fixed-z-index-text{
      margin-top:-230px;
    }*/
  }
  @media screen and (min-width: 200px) and (max-width: 450px){
    .first-orbit{
      width: 850px;
      height: 850px;
      margin-top:80px;
      margin-right: -150px
    }
  }
  @media screen and (min-width: 450px) and (max-width: 555px){
    .first-orbit{
      width: 950px;
      height: 950px;
      margin-top:80px;
      margin-right: -150px
    }
  }
  @media screen and (min-width: 555px) and (max-width: 600px){
    .first-orbit{
      width: 950px;
      height: 950px;
      margin-top:20px;
      margin-right: -150px
    }
  }
  @media screen and (min-width: 600px) and (max-width: 750px){
    .first-orbit{
      width: 1050px;
      height: 1050px;
      margin-top:80px;
      margin-right: -150px
    }
  }
  @media screen and (min-width: 750px) and (max-width: 960px){
    .first-orbit{
      width: 1150px;
      height: 1150px;
      margin-top:-20px;
      margin-right: -150px
    }
  }
  
  @media screen and (min-width: 960px) and (max-width: 1100px){
    .first-orbit{
      width: 1200px;
      height: 1200px;
      margin-top:-300px;
      margin-right: -850px
    }
  }
  @media screen and (min-width: 1100px) and (max-width: 1250px){
    .first-orbit{
      width: 1300px;
      height: 1300px;
      margin-top:-340px;
      margin-right: -1200px
    }
  }
  @media screen and (min-width: 1250px) and (max-width: 1500px)  {
    .first-orbit{
      width: 1400px;
      height: 1400px;
      margin-top:-400px;
      margin-right: -1400px
    }
  }
   @media screen and (min-width: 1500px) and (max-width: 1900px)  {
    .first-orbit{
      width: 1400px;
      height: 1400px;
      margin-top:-400px;
      margin-right: -1400px
    }
  }
  @media screen and (min-width: 1900px) and (max-width: 2300px)  {
    .first-orbit{
      width: 1600px;
      height: 1600px;
      margin-top:-400px;
      margin-right: -2000px
    }
    
  }
  @media screen and (min-width: 1900px)  {
    .fixed-z-index-text{
      padding-top: 9%;
    }
  }
  @media screen and (min-width: 2300px)   {
    .first-orbit{
      width: 1600px;
      height: 1600px;
      margin-top:-400px;
      margin-right: -2400px
    }
    
  }
  .a-icon i {
    transition: 0.3s ease-in-out;
  }
  .a-icon:hover i{
    transform: rotate(23deg); 
    color: #FFC75F !important
  }

  .homeScrolldown-home{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    animation-name: moveImgScroll;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
   @keyframes moveImgScroll{
     0% {
        transform: translate3d(0,-2.5px,0)
      }

      to {
        transform: translate3d(0,2.5px,0)
      }
    }

  /*
  .first-orbit-inner:hover{
    animation-play-state: paused;
  }
  .jupiter:hover{
    animation-play-state: paused;
  }*/

  
</style>