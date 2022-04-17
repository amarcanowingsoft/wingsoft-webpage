<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="9"  lg="6" class="mt-6 mt-md-0 " >
         <h1 class="h3 primary--text light-bolder text-center">
            Partners
        </h1>

        <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4" >
            Enamórate de Wingsoft, estamos certificados para entregar un mejor servicio y calidad en todas nuestras estrategias
        </p>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
        <div class="d-flex flex-wrap justify-center align-center" style="width:780px">
          <div class="microsoft mx-8 my-6">
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
          <div class="mailchimp mx-8 my-6">
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
          <div class="shopifyplus mx-8 my-6">
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
          <div class="fbmarketing mx-8 mt-7 my-6">
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
          <div class="hubspot mx-8 my-6">
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
    <div class="d-flex justify-center orbits-partners">
        <div class="orbit-blue2 d-flex justify-center align-center">
            <div class="orbit-blue-inner2 d-flex justify-center align-center">
                <div class="blue2">
                </div>
            </div>
        </div>
        <div class="orbit-orange2 d-flex justify-center align-center">
            <div class="orbit-orange-inner2 d-flex justify-center align-center">
                <div class="orange2">
                </div>
            </div>
        </div>
        <div class="orbit-green2 d-flex justify-center align-center">
            <div class="orbit-green-inner2 d-flex justify-center align-center">
                <div class="green2">
                </div>
            </div>
        </div>
    </div>
  </v-row>
</template>

<script>
export default {
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
        if (this.$route.path == '/partners'  && this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) this.$router.push('/services')
        
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
        if (this.$route.path == '/partners'  && this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) this.$router.push('/aboutUs')
      }
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
        width: 500px; 
        height: 500px; 
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



    .orbit-orange2{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-10deg) rotateX(72deg) ;
        width: 570px; 
        height: 570px; 
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

    .orbit-green2{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-120deg) rotateX(72deg) ;
        width: 600px; 
        height: 600px; 
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
</style>