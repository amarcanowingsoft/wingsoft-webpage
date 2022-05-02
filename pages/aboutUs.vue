<template>
  <v-row justify="center" class="px-6 px-sm-0 px-lg-12" >
    <v-col cols="12" sm="10" md="10"  lg="7" class="mt-6 mt-md-0  ">
        <h1 class="h3 primary--text light-bolder text-center responsiveTitles">
            Algo sobre nosotros
        </h1>
        <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4" >
            Con más de 19 años de experiencia y saber hacer, nos encanta crear experiencias 
            digitales para ti y tus clientes y llevar tu negocio al éxito.
        </p>
    </v-col>
    <v-col cols="12">

    </v-col>
    <v-col cols="12" sm="8" md="4" class="parrent pr-lg-15 relativecol " >
        <div class="glossyCard">
            <div style="width:max-content">
                <h2 class=" primary--text text-box-animation text-center" style="font-size:30px">
                    Quienes somos
                </h2>
                <div class="styled-div-animation-text-col terciary"></div>
            </div>
            <p class="subtitle-2 graytext--text  font-weight-normal mt-4 " >
                Wingsoft fue fundada en 1987, con actividades principales de construcción y 
                alojamiento de sitios web. Está enmarcado por ejecutivos que cuentan con muchos 
                años de experiencia en el campo de las tecnologías de la información, diseño web, 
                diseño gráfico y marketing digital.
            </p>
            <div class="div-icon">
                <img
                    class="iconAboutUs1black"
                    alt="iconAboutUs"
                    src="@/assets/img/iconAboutUs1.png"
                >
            </div>
        </div>
    </v-col>
    <v-col cols="12" sm="8" md="4" class="parrent px-lg-6 relativecol ">
        <div class="glossyCard">
            <div style="width:max-content">
                <h2 class="  primary--text text-box-animation"  style="font-size:30px">
                    Que hacemos
                </h2>
                <div class="styled-div-animation-text-col terciary"></div>
            </div>
            <p class="subtitle-2 graytext--text  font-weight-normal mt-4 " >
                En colaboración con las empresas más grandes de todo el mundo y utilizando la última tecnología y las últimas herramientas, nuestra galardonada empresa desarrolla soluciones digitales con un enfoque innovador, adaptadas a las necesidades de su negocio.
            </p>
            <div class="div-icon">
                <img
                    class="iconAboutUs2"
                    alt="iconAboutUs"
                    src="@/assets/img/iconAboutUs2.png"
                >
            </div>
        </div>
    </v-col>
    <v-col cols="12" sm="8" md="4" class="parrent pl-lg-15 relativecol ">
        <div class="glossyCard ">
            <div style="width:max-content">
                <h2 class="  primary--text text-box-animation"  style="font-size:30px">
                    Nuestras alianzas
                </h2>
                <div class="styled-div-animation-text-col terciary"></div>
            </div>
            <p class="subtitle-2 graytext--text  font-weight-normal mt-4 " >
                Basándonos en la fiabilidad y la confianza, invertimos en asociaciones a largo plazo. Los clientes de Wingsoft incluyen más de 3 mil empresas y organizaciones de todas las categorías y tamaños de Chile e internacionalmente.
            </p>
            <div class="div-icon">
                <img
                    class="iconAboutUs3"
                    alt="iconAboutUs"
                    src="@/assets/img/iconAboutUs3.png"
                >
            </div>
        </div>
    </v-col>
    <v-col cols="12" class="mt-16 pt-lg-16">
        <Ask/>
    </v-col>    
    <div class="d-flex justify-center orbits-about-us">
        <div class="orbit-violet d-flex justify-center align-center">
            <div class="orbit-violet-inner d-flex justify-center align-center orbit">
                <div class="violet">
                </div>
            </div>
        </div>
        <div class="orbit-blue d-flex justify-center align-center">
            <div class="orbit-blue-inner d-flex justify-center align-center orbit">
                <div class="blue">
                </div>
            </div>
        </div>
        <div class="orbit-orange d-flex justify-center align-center">
            <div class="orbit-orange-inner d-flex justify-center align-center orbit">
                <div class="orange">
                </div>
            </div>
        </div>
        <div class="orbit-green d-flex justify-center align-center">
            <div class="orbit-green-inner d-flex justify-center align-center orbit">
                <div class="green">
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
            title: "Wingsoft | Nosotros",
         
        }
    },
    mounted(){
    window.onwheel = e => {
      if(e.deltaY >= 0){
        // Scrolling Down with mouse
        //console.log('Scroll Down');
        if (this.$route.path == '/aboutUs'  && this.$vuetify.breakpoint.lgOnly 
        || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly){
            this.goinOut()
            setTimeout(async () => {
                this.$router.push('/partners')
            }, 200);
        }
        
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
        if (this.$route.path == '/aboutUs'  && this.$vuetify.breakpoint.lgOnly 
        || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) {
            this.goinOut()
            setTimeout(async () => {
                this.$router.push('/')
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

            const violet = document.querySelector('.violet');
            violet.style.animation= 'animation-planet 10s linear  forwards infinite, goinOutOrbitViolet 250ms ease-in forwards  '
            violet.style.animationPlayState = 'paused, running'

            const blue = document.querySelector('.blue');
            blue.style.animation= 'animation-planet 7s linear  forwards infinite, goinOutOrbitBlue 250ms ease-in forwards  '
            blue.style.animationPlayState = 'paused, running'

            const orange = document.querySelector('.orange');
            orange.style.animation= 'animation-planet 6s linear  forwards infinite, goinOutOrbitOrange 250ms ease-in forwards  '
            orange.style.animationPlayState = 'paused, running'

            const green = document.querySelector('.green');
            green.style.animation= 'animation-planet 11s linear  forwards infinite, goinOutOrbitGreen 250ms ease-in forwards  '
            green.style.animationPlayState = 'paused, running'

        }
  }
    
}
</script>

<style>
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
    .parrent:hover .styled-div-animation-text-col{
        width: 112%;
        opacity: 1;
    }
    .div-icon{
        transition: 0.3s ease-in-out;
        position: relative;
        bottom: 0px;
    }
    .div-icon img{ 
        transition: 0.3s ease-in-out;
        filter: invert(11%) sepia(38%) saturate(5119%) hue-rotate(282deg) brightness(94%) contrast(116%);
    }
    .parrent:hover .div-icon img{
        transform: rotate(15deg); 
        filter: invert(35%) sepia(91%) saturate(6622%) hue-rotate(328deg) brightness(91%) contrast(128%)
    }
    .text-box-animation{
        position: relative;
        z-index: 2;
    }
    .light-bolder{
        font-weight: 800 !important;
    }


    .relativecol{
        position: relative !important;
        z-index: 6;
    }

    .orbits-about-us{
        position: fixed;
        width: 550px;
        height: 550px;
        bottom: -240px;
        right: -125px
    }

    .orbit-violet{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(30deg) rotateX(65deg) ;
        width: 72.72%; 
        height: 72.72%;
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        left: 125px;
        top: 25px;
        z-index: 2;
    }
    .orbit-violet-inner{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 10s linear  forwards infinite  
    }
    .violet{
        top: 0px;
        margin-top: -15%; /*25px*/
        position: absolute;
        width: 15%; /*31px;*/
        height: 35.50%;/*71px; */
        border-radius: 50% !important;
        background-color: #EC0D78;
        animation: animation-planet 10s linear  forwards infinite  
    }
    @keyframes goinOutOrbitViolet{
        from  {  margin-top: -15% ;  }
        to { margin-top: 100% ;  margin-right: 100% }
    }



    .orbit-blue{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-5deg) rotateX(65deg) ;
        width: 90.90%; 
        height: 90.90%; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        z-index: 3;
    }
    .orbit-blue-inner{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 7s linear  forwards infinite  
    }
    .blue{
        top: 0px;
        margin-top: -9%; /*25px*/
        position: absolute;
        width: 9%; /*31px;*/
        height: 21.30%;/*71px; */
        border-radius: 50% !important;
        background-color: #665DE3;
        animation: animation-planet 7s linear  forwards infinite  
    }
    @keyframes goinOutOrbitBlue{
        from  {  margin-top: -9% ;  }
        to { margin-top: 100% ;  margin-right: 100% }
    }



    .orbit-orange{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(90deg) rotateX(65deg) ;
        width: 90.90%; 
        height: 90.90%; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        left: 80px;
        z-index: 4;
    }
    .orbit-orange-inner{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 6s linear  forwards infinite  
    }
    .orange{
        top: 0px;
        margin-top: -9%; /*25px*/
        position: absolute;
        width: 9%; /*31px;*/
        height: 21.30%;/*71px; */
        border-radius: 50% !important;
        background-color: #E37330;
        animation: animation-planet 6s linear  forwards infinite  
    }
    @keyframes goinOutOrbitOrange{
        from  {  margin-top: -9% ;  }
        to { margin-top: 100% ;  margin-right: 100% }
    }

    .orbit-green{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(-10deg) rotateX(65deg) ;
        width: 72.72%; 
        height: 72.72%;
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        left: 120px;
        z-index: 5;
    }
    .orbit-green-inner{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 11s linear  forwards infinite  
    }
    .green{
        top: 0px;
        margin-top: -9%; /*25px*/
        position: absolute;
        width: 9%; /*31px;*/
        height: 21.30%;/*71px; */
        border-radius: 50% !important;
        background-color: #319620;
        animation: animation-planet 11s linear  forwards infinite  
    }

    @keyframes goinOutOrbitGreen{
        from  {  margin-top: -9% ;  }
        to { margin-top: 100% ;  margin-right: 100% }
    }

    .glossyCard{
        width: 100%;
        background-color: rgba(255, 255, 255, 0.486);
        backdrop-filter: blur(10px);
        border-radius: 8px;

    }

    
</style>