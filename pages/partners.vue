<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="9"  lg="6" class="mt-6 mt-md-0 " >
         <h1 class="h3 primary--text light-bolder text-center responsiveTitles">
            Partners
        </h1>

        <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4" >
            Enamórate de Wingsoft, estamos certificados para entregar un mejor servicio y calidad en todas nuestras estrategias
        </p>
    </v-col>
    <v-col cols="12" class="d-flex  justify-center align-center pb-md-16 mb-2">
        <div class="d-flex flex-wrap justify-center align-center flex-column flex-sm-row" style="width:780px">
          <div class="microsoft mx-8 my-6 glossyCardPartners">
            <img
              class="microsoft-img-black indexImg"
              alt="microsoft-img-black"
              src="@/assets/img/microsoftlogobn.png"
            >
            <img
              class="microsoft-img indexImg"
              alt="microsoft-img"
              src="@/assets/img/microsoftlogo.png"
            >
          </div>
          <div class="mailchimp mx-8 my-6 glossyCardPartners">
            <img
              class="mailchimp-img-black indexImg"
              alt="mailchimp-img-black"
              src="@/assets/img/mailchimpbn.png"
            >
            <img
              class="mailchimp-img indexImg"
              alt="mailchimp-img"
              src="@/assets/img/mailchimp.png"
            >
          </div>
          <div class="shopifyplus mx-8 my-6 glossyCardPartners">
            <img
              class="shopifyplus-img-black indexImg"
              alt="shopifyplus-img-black"
              src="@/assets/img/shopifybn.png"
            >
            <img
              class="shopifyplus-img indexImg"
              alt="shopifyplus-img"
              src="@/assets/img/shopify.png"
            >
          </div>
          <div class="fbmarketing mx-8 mt-7 my-6 glossyCardPartners">
            <img
              class="fbmarketing-img-black indexImg"
              alt="fbmarketing-img-black"
              src="@/assets/img/fbbn.png"
            >
            <img
              class="fbmarketing-img indexImg"
              alt="fbmarketing-img"
              src="@/assets/img/fb.png"
            >
          </div>
          <div class="hubspot mx-8 my-6 glossyCardPartners">
            <img
              class="hubspot-img-black indexImg"
              alt="hubspot-img-black"
              src="@/assets/img/hubspotbn.png"
            >
            <img
              class="hubspot-img indexImg"
              alt="hubspot-img"
              src="@/assets/img/hubspot.png"
            >
          </div>
        </div>
    </v-col>
    <v-col cols="12" class="mt-16 pt-lg-16">
        <Ask/>
    </v-col>    
    <div class="d-flex justify-center orbits-partners">
        <div class="orbit-blue2 d-flex justify-center align-center">
            <div class="orbit-blue-inner2 d-flex justify-center align-center orbit">
                <div class="blue2">
                </div>
            </div>
        </div>
        <div class="orbit-orange2 d-flex justify-center align-center">
            <div class="orbit-orange-inner2 d-flex justify-center align-center orbit">
                <div class="orange2">
                </div>
            </div>
        </div>
        <div class="orbit-green2 d-flex justify-center align-center">
            <div class="orbit-green-inner2 d-flex justify-center align-center orbit">
                <div class="green2">
                </div>
            </div>
        </div>
    </div>
  </v-row>
</template>

<script>
import Ask from "@/components/Ask.vue";
export default {
  components:{
        Ask
    },
  layout:'mainWhite',
  head () {
      return {
        title: "Wingsoft | Partners",
        
      }
  },
  mounted(){
    window.onwheel = e => {
      if(e.deltaY >= 0){
        // Scrolling Down with mouse
        //console.log('Scroll Down');
        if (this.$route.path == '/partners'  && this.$vuetify.breakpoint.lgOnly || 
        this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly){
            this.goinOut()
            setTimeout(async () => {
                this.$router.push('/services')
            }, 200);
        }
       
        
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
        if (this.$route.path == '/partners'  && this.$vuetify.breakpoint.lgOnly || 
        this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly){
          this.goinOut()
          setTimeout(async () => {
              this.$router.push('/aboutUs')
          }, 200);
        }
        
      }
    }
  },
  methods:{
    goinOut(){
          const orbits = document.querySelectorAll('.orbit');
          orbits.forEach(element => {
              element.style.animationPlayState = 'paused'
          });

          const blue2 = document.querySelector('.blue2');
          blue2.style.animation= 'animation-planet 7s linear  forwards infinite, goinOutOrbitBlue2 250ms ease-in forwards  '
          blue2.style.animationPlayState = 'paused, running'

          const orange2 = document.querySelector('.orange2');
          orange2.style.animation= 'animation-planet 5s linear  forwards infinite, goinOutOrbitOrange2 250ms ease-in forwards  '
          orange2.style.animationPlayState = 'paused, running'

          const green2 = document.querySelector('.green2');
          green2.style.animation= 'animation-planet 11s linear  forwards infinite, goinOutOrbitGreen2 250ms ease-in forwards  '
          green2.style.animationPlayState = 'paused, running'

      }
  }
}
</script>

<style>
  .microsoft{
    width:190px;
    height: 41px;

  }
  .microsoft-img-black{
    width:190px;
    height: 41px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 1;
  }
  .microsoft-img{
    width:0px;
    height: 41px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 2;
    transition: 0.2s ease-in;
  }
  .microsoft:hover .microsoft-img{
    width:190px;
  }

  .mailchimp{
    width:190px;
    height: 41px;
  }
  .mailchimp-img-black{
    width:190px;
    height: 41px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 1;
  }
  .mailchimp-img{
    width:0px;
    height: 41px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 2;
    transition: 0.2s ease-in;
  }
  .mailchimp:hover .mailchimp-img{
    width:190px;
  }

  .shopifyplus{
    width:190px;
    height: 57px;
  }
  .shopifyplus-img-black{
    width:190px;
    height: 57px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 1;
  }
  .shopifyplus-img{
    width:0px;
    height: 57px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 2;
    transition: 0.2s ease-in;
  }
  .shopifyplus:hover .shopifyplus-img{
    width:190px;
  }

  .fbmarketing{
    width:153px;
    height: 45px;
  }
  .fbmarketing-img-black{
    width:153px;
    height: 45px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 1;
  }
  .fbmarketing-img{
    width:0px;
    height: 45px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 2;
    transition: 0.2s ease-in;
  }
  .fbmarketing:hover .fbmarketing-img{
    width:153px;
  }

  .hubspot{
    width:116px;
    height: 51px;
  }
  .hubspot-img-black{
    width:116px;
    height: 51px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 1;
  }
  .hubspot-img{
    width:0px;
    height: 51px;
    position: absolute;
    object-fit: none;
    object-position: 0px 0px;
    z-index: 2;
    transition: 0.2s ease-in;
  }
  .hubspot:hover .hubspot-img{
    width:116px;
  }




  .indexImg{
      z-index: 6;
  }

  .orbits-partners{
      position: fixed;
      width: 750px;
      height: 750px;
      bottom: -400px;
      left: -320px
  }

  .relativecol{
        position: relative !important;
        z-index: 6;
    }

  
    .orbit-blue2{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-45deg) rotateX(75deg) ;
        width: 66.66%; 
        height: 66.66%; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        z-index: 2;
        left: 160px;
    }
    .orbit-blue-inner2{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 2px !important;
        animation: animation-orbit 7s linear  forwards infinite  
    }
    .blue2{
        top: 0px;
        margin-top: -14%; /*25px*/
        position: absolute;
        width: 8%; /*31px;*/
        height: 28.56%;/*71px; */
        border-radius: 50% !important;
        background-color: #665DE3;
        animation: animation-planet 7s linear  forwards infinite  
    }
    @keyframes goinOutOrbitBlue2{
        from  {  margin-top: -14% ;  }
        to { margin-top: -100% ;  margin-right: -100% }
    }


    .orbit-orange2{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-10deg) rotateX(72deg) ;
        width: 76%; 
        height: 76%; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        left: 220px;
        top: -40px;
        z-index: 3;
    }
    .orbit-orange-inner2{
        width: 95%;
        height: 95%;
        border: 2px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 2px !important;
        animation: animation-orbit 5s linear  forwards infinite  
    }
    .orange2{
        top: 0px;
        margin-top: -11%; /*25px*/
        position: absolute;
        width:7%; /*31px;*/
        height:22.9%;/*71px; */
        border-radius: 50% !important;
        background-color: #E37330;
        animation: animation-planet 5s linear  forwards infinite  
    }
    @keyframes goinOutOrbitOrange2{
        from  {  margin-top: -11% ;  }
        to { margin-top: -100% ;  margin-right: -100% }
    }

    .orbit-green2{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-120deg) rotateX(72deg) ;
        width: 80%; 
        height: 80%; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        left: 120px;
        top: -120px;
        z-index: 4;
    }
    .orbit-green-inner2{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 2px !important;
        animation: animation-orbit 11s linear  forwards infinite  
    }
    .green2{
        top: 0px;
        margin-top: -9%; /*25px*/
        position: absolute;
        width: 7%; /*31px;*/
        height:21%;/*71px; */
        border-radius: 50% !important;
        background-color: #319620;
        animation: animation-planet 11s linear  forwards infinite  
    }
    @keyframes goinOutOrbitGreen2{
        from  {  margin-top: -11% ;  }
        to { margin-top: 130% ;  margin-right:-130% }
    }

    .glossyCardPartners{
        background-color: rgba(255, 255, 255, .05);
        backdrop-filter: blur(5px);
        border-radius: 6px;
        z-index: 1;
    }

    @media screen and (max-width: 480px){
      .orbits-partners{
          position: fixed;
          width: 450px;
          height: 450px;
          bottom: -270px;
          left: -270px
      }
    }
    @media screen and (min-width: 480px) and (max-width: 600px){
      .orbits-partners{
          position: fixed;
          width: 550px;
          height: 550px;
          bottom: -320px;
          left: -300px
      }
    }


</style>