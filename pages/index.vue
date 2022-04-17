<template>
  <div class="fill-height d-flex justify-center justify-md-start flex-column align-center px-md-16 tal" >
  <div class="d-flex justify-center">
      <div class="first-orbit d-flex justify-center align-center">
        <div class="first-orbit-inner d-flex justify-center align-center">
          <div class="jupiter">
          </div>
          <div class="second-orbit-inner d-flex justify-center align-center">
            <div class="mars">
            </div>
            <div class="third-orbit-inner d-flex justify-center align-center">
              <div class="earth">
              </div>
              <div class="fourth-orbit-inner d-flex justify-center align-center">
                <div class="venus">
                </div>
                <div class="fifth-orbit-inner d-flex justify-center align-center">
                  <div class="mercury">
                  </div>
                  <div class="sun">
                  </div>
                  <div class="sun-top">
                  </div>
                  <div class="fifth-orbit-inner-fix-oversun ">
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
        <h1 class=" white--text font-weight-medium mt-2 text-center text-md-left px-6 px-md-0" >
          El mundo está cambiando rápido. 
        </h1>
        <h1 class="white--text font-weight-bold text-center text-md-left px-6 px-md-0" >
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
        <div class="d-flex justify-center mt-10" v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly">
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
        <a href="https://www.facebook.com/wingsoftchile/" target="_blank" class="my-1 a-icon">
          <v-icon color="white" >mdi-facebook</v-icon>
        </a> 
        <a href="https://www.linkedin.com/company/wingsoftcl" target="_blank" class="my-1 a-icon">
          <v-icon color="white" >mdi-linkedin</v-icon>
        </a>
        <a href="https://www.instagram.com/wingsofthq" target="_blank" class="my-1 a-icon">
          <v-icon color="white" >mdi-instagram</v-icon>
        </a>
        <a href="https://twitter.com/wingsoft" target="_blank" class="my-1 a-icon">
          <v-icon color="white" >mdi-twitter</v-icon>
        </a>
        <div style="width:1px;height:500px;position:relative;margin-left:10px;margin-top:5px" class="white  "></div>
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
        if (this.$route.path == '/' && this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly ) this.$router.push('/aboutUs')
        
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
      }
    }
  }
  
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
    overflow: hidden;
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
    background-color: #EC0D78;
    animation: animation-planet 30s linear  forwards infinite  
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
    background-color: #898989;
    animation: animation-planet 15s linear  forwards infinite  
  }
  .third-orbit-inner{
    width: 78%;
    height: 78%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite  
  }
  .earth{
    top: 0px;
    margin-top: -6.3%; /*-60px*/ 
    position: absolute;
    width: 6.3%; /*59px*/ 
    height: 14.91%; /*135px*/ 
    border-radius: 50% !important;
    background-color: #319620;
    animation: animation-planet 10s linear  forwards infinite  
  }
  .fourth-orbit-inner{
    width: 65%;
    height: 65%;
    border: 1px solid #ffffffca !important;
    border-radius: 50% !important;
    border-width: 1px !important;
    animation: animation-orbit 30s linear  forwards infinite  
  }
  .venus{
    top: 0px;
    margin-top: -6%; /*-29px*/ 
    position: absolute;
    width: 6%; /*37px*/ 
    height:14.2%;  /*82px*/ 
    border-radius: 50% !important;
    background-color: #665DE3;
    animation: animation-planet 7.5s linear  forwards infinite  
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
    background-color: #E37330;
    animation: animation-planet 6s linear  forwards infinite;
    z-index: 15;
  }

  .sun{
    width: 55%; /* 152px;*/
    position: relative;
    height: 130.18%; /*  335px;*/
    border-radius: 50% !important;
    background-color: #FFC75F;
    animation: animation-planet  6s linear  forwards infinite, sun-fire  5s linear  forwards infinite;
    z-index: 5;
    box-shadow: 0px 0px 50px #7108B1;
  }

  .sun-top{
    width:  55%; /* 152px;*/
    position: absolute;
    height: 130.18%;/*  335px;*/
    border-radius: 50% !important;
    background-color: transparent;
    animation: animation-planet 6s linear  forwards infinite ;
    z-index: 20;
    border-top:8vw solid #FFC75F;
    
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

  
  @media screen and (max-width: 960px){
    .first-orbit{
      margin-right: 0px;
      margin-top:-90px;
      position: relative;
    }
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
      font-size:16px
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
    .first-orbit{
      width: 200px;
      height: 200px;
      margin-top:-60px;
    }
    .fixed-z-index-text{
      margin-top:-50px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 400px){
    .first-orbit{
      width: 305px;
      height: 305px;
    }
    .fixed-z-index-text{
      margin-top:-70px;
    }
  }
  @media screen and (min-width: 400px) and (max-width: 500px){
    .first-orbit{
      width: 390px;
      height: 390px;
      margin-top:-110px;
    }
    .fixed-z-index-text{
      margin-top:-80px;
    }
  }
   @media screen and (min-width: 500px) and (max-width: 600px){
    .first-orbit{
      width: 490px;
      height: 490px;
      margin-top:-130px;
    }
    .fixed-z-index-text{
      margin-top:-95px;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 700px){
    .first-orbit{
      width: 600px;
      height: 600px;
      margin-top:-160px;
    }
    .fixed-z-index-text{
      margin-top:-160px;
    }
  }
  @media screen and (min-width: 700px) and (max-width: 800px){
    .first-orbit{
      width: 700px;
      height: 700px;
      margin-top:-190px;
    }
    .fixed-z-index-text{
      margin-top:-180px;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 900px){
    .first-orbit{
      width: 800px;
      height: 800px;
      margin-top:-210px;
    }
    .fixed-z-index-text{
      margin-top:-200px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 960px){
    .first-orbit{
      width: 900px;
      height: 900px;
      margin-top:-250px;
    }
    .fixed-z-index-text{
      margin-top:-230px;
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
      width: 1400px;
      height: 1400px;
      margin-top:-400px;
      margin-right: -2000px
    }
  }
  @media screen and (min-width: 2300px)   {
    .first-orbit{
      width: 1400px;
      height: 1400px;
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
  }
  /*
  .first-orbit-inner:hover{
    animation-play-state: paused;
  }
  .jupiter:hover{
    animation-play-state: paused;
  }*/
</style>