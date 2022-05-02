<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="9"  lg="6" class="mt-6 mt-md-0 " >
        <h1 class="h3 primary--text light-bolder text-center responsiveTitles">
            Nuestros servicios
        </h1>

        <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4" >
            Ofrecemos servicios respaldados por nuestra experiencia en estrategia, uso de modernas tecnologías, análisis, marketing y diseño.
        </p>
    </v-col>
    <v-col cols="12" class="px-lg-16">
        <v-row class="px-lg-16">
            <v-col cols="12" md="4" class="d-flex justify-center pt-10" style="min-height:318px">
                <div class="cardService py-4 px-7 builder" @click="$router.push('/services/builder')" >
                    <div style="width:max-content">
                        <h2 class="primary--text text-box-animation text-center" style="font-size:30px">
                            Builder
                        </h2>
                        <div class="styled-div-animation-text-col terciary"></div>
                    </div>
                    <p class="subtitle-2 graytext--text  font-weight-normal mt-4 p-card" >
                        Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, 
                        sin tapujos, que añada cerveza al whisky.
                    </p>
                    <div class="d-flex justify-space-between align-end">
                        <span class="primary--text span-build">Construye</span>
                        <div class="div-icon">
                            <img
                                class="iconServices1black"
                                alt="iconServices"
                                src="@/assets/img/iconservices1.png"
                            >
                        </div>
                    </div>
                </div>
            
            </v-col>
            <v-col cols="12" md="4"  class="d-flex justify-center pt-10" style="min-height:318px">
                <div class="cardService py-4 px-7 consulting" @click="$router.push('/services/consulting')">
                    <div style="width:max-content">
                        <h2 class="primary--text text-box-animation text-center" style="font-size:30px">
                            Consulting
                        </h2>
                        <div class="styled-div-animation-text-col terciary"></div>
                    </div>
                    <p class="subtitle-2 graytext--text  font-weight-normal mt-4 p-card" >
                        Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, 
                        sin tapujos, que añada cerveza al whisky.
                    </p>
                    <div class="d-flex justify-space-between align-end">
                        <span class="primary--text span-build">Construye</span>
                        <div class="div-icon">
                            <img
                                class="iconServices2black"
                                alt="iconServices"
                                src="@/assets/img/iconservices2.png"
                            >
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center pt-10" style="min-height:318px">
                <div class="cardService py-4 px-7 venture" @click="$router.push('/services/venture')">
                    <div style="width:max-content">
                        <h2 class="primary--text text-box-animation text-center" style="font-size:30px">
                            Venture
                        </h2>
                        <div class="styled-div-animation-text-col terciary"></div>
                    </div>
                    <p class="subtitle-2 graytext--text  font-weight-normal mt-4 p-card" >
                        Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, 
                        sin tapujos, que añada cerveza al whisky.
                    </p>
                    <div class="d-flex justify-space-between align-end">
                        <span class="primary--text span-build">Construye</span>
                        <div class="div-icon">
                            <img
                                class="iconServices3black"
                                alt="iconServices"
                                src="@/assets/img/iconservices3.png"
                            >
                        </div>
                    </div>
                </div>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" class="mt-16 pt-lg-8">
            <Ask/>
        </v-col>   
        <div class="d-flex justify-center orbits-services">
            <div class="orbit-blue3 d-flex justify-center align-center">
                <div class="orbit-blue-inner3 d-flex justify-center align-center orbit">
                    <div class="blue3">
                    </div>
                </div>
            </div>
            <div class="orbit-green3 d-flex justify-center align-center">
                <div class="orbit-green-inner3 d-flex justify-center align-center orbit">
                    <div class="green3">
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
            title: "Wingsoft | Servicios",
           
        }
    },
    mounted(){
        window.onwheel = e => {
        if(e.deltaY >= 0){
            // Scrolling Down with mouse
            //console.log('Scroll Down');
            if (this.$route.path == '/services'  && this.$vuetify.breakpoint.lgOnly 
            || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) {
                this.goinOut()
                setTimeout(async () => {
                    this.$router.push('/knowledge')
                }, 200);
            }
        } 
        else {
            // Scrolling Up with mouse
            //console.log('Scroll Up');
            if (this.$route.path == '/services'  && this.$vuetify.breakpoint.lgOnly 
            || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) {
                this.goinOut()
                setTimeout(async () => {
                    this.$router.push('/partners')
                }, 200);
            }
        }
        }
    },
    methods: {
        goinOut(){
          const orbits = document.querySelectorAll('.orbit');
          orbits.forEach(element => {
              element.style.animationPlayState = 'paused'
          });

          const blue3 = document.querySelector('.blue3');
          blue3.style.animation= 'animation-planet 7s linear  forwards infinite, goinOutOrbitBlue3 250ms ease-in forwards  '
          blue3.style.animationPlayState = 'paused, running'

          const green3 = document.querySelector('.green3');
          green3.style.animation= 'animation-planet 8.5s linear  forwards infinite, goinOutOrbitGreen3 250ms ease-in forwards  '
          green3.style.animationPlayState = 'paused, running'

      }
    },
}
</script>

<style>
    .cardService{
        background-color: rgba(255, 255, 255, 0.568);
        backdrop-filter: blur(8px);
        box-shadow: 12px 12px 12px #0000000D;
        border: 0.5px solid #AAAAAA;
        border-radius: 6px;
        opacity: 1;
        width: 324px;
        height: 266px;
        cursor: pointer;
    }
    .styled-div-animation-text-col{
        width: 0%;
        margin-left: -10px;
        position: relative;
        height: 13px;
        margin-top: -20px !important;
        z-index: 1;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .cardService:hover .styled-div-animation-text-col{
        width: 116%;
        opacity: 1;
    }
    .div-icon{
        transition: 0.2s ease-in-out;
        position: relative;
        bottom: 0px;
    }
    .div-icon img{ 
        transition: 0.2s ease-in-out;
        filter: invert(11%) sepia(38%) saturate(5119%) hue-rotate(282deg) brightness(94%) contrast(116%);
    }
    .cardService:hover .div-icon img{
        filter: invert(100%) sepia(7%) saturate(0%) hue-rotate(95deg) brightness(106%) contrast(109%);
    }
    .text-box-animation{
        position: relative;
        z-index: 2;
        transition: 0.2s ease-in-out;
    }
    .cardService:hover .text-box-animation{
        color: rgb(255, 255, 255) !important;
    }
    .cardService:hover .p-card{
        color: rgb(255, 255, 255) !important;
    }
    .cardService:hover .span-build{
        color: rgb(255, 255, 255) !important;
    }
    .span-build{
        transition: 0.2s ease-in-out;
    }
    .p-card{
        transition: 0.2s ease-in-out;
    }
    .light-bolder{
        font-weight: 800 !important;
    }
    .cardService{
        position: relative;
        transition: 0.2s ease-in-out;
        z-index: 6;
    }
    .cardService:hover{
        margin-top: -40px;
    }
    .builder:hover{
        background: #E37330 0% 0% no-repeat padding-box;
    }
    .consulting:hover{
        background: #665DE3 0% 0% no-repeat padding-box;
    }
    .venture:hover{
        background: #319620 0% 0% no-repeat padding-box;
    }


    

    .orbits-services{
        position: fixed;
        width: 750px;
        height: 750px;
        bottom: -260px;
        left: -290px
    }

    .orbit-blue3{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-15deg) rotateX(65deg) ;
        width: 80%; 
        height: 80%; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        z-index: 2;
        left: 160px;
    }
    .orbit-blue-inner3{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 7s linear  forwards infinite  
    }
    .blue3{
        top: 0px;
        margin-top: -5%; /*25px*/
        position: absolute;
        width: 4.5%; /*31px;*/
        height: 10.65%;/*71px; */
        border-radius: 50% !important;
        background-color: #665DE3;
        animation: animation-planet 7s linear  forwards infinite  
    }
    @keyframes goinOutOrbitBlue3{
        from  {  margin-top: -5% ;  }
        to { margin-top: -100% ;  margin-right: -100% }
    }

    .orbit-green3{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-70deg) rotateX(67deg) ;
        width: 57.33%;
        height: 57.33%;
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        left: 260px;
        top: 60px;
        z-index: 3;
    }
    .orbit-green-inner3{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 8.5s linear  forwards infinite  
    }
    .green3{
        top: 0px;
        margin-top: -10%; /*25px*/
        position: absolute;
        width: 8%; /*31px;*/
        height:21%;/*71px; */
        border-radius: 50% !important;
        background-color: #319620;
        animation: animation-planet 8.5s linear  forwards infinite  
    }
    @keyframes goinOutOrbitGreen3{
        from  {  margin-top: -10% ;  }
        to { margin-top: -100% ;  margin-right: -100% }
    }
</style>