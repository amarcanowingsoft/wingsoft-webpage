<template>
    <div>
        <div class="px-6 px-sm-16 d-flex flex-wrap justify-space-between pt-0 pb-10">
            <div style="width:max-content;cursor:pointer" class="parrent mt-5" @click="$router.push('/services')">
                <h1 class="white--text text-box-animation">Regresar a los servicios</h1>
                <div class="styled-div-animation-text-col primary"></div>
            </div>
            <div style="width: 528px;" class="mt-5">
                <p class="white--text">Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky.</p>
            </div>
        </div>
        <div class="white">
            <v-row justify="center" align="center" class="pb-10">
                <v-col cols="12" sm="10" md="9"  lg="6" class="mt-6 px-6" >
                    <h1 class="h3 primary--text light-bolder text-center">
                        Wingsoft Consulting
                    </h1>
                    <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4" >
                        ¡Creamos sitios web innovadores y pioneros que funcionan para usted!
                    </p>
                </v-col>
                <v-col cols="12" class="d-flex flex-column flex-md-row" >
                    <div class="px-lg-16 px-md-6 px-sm-10 px-5 d-flex justify-center align-center">
                        <img
                            alt="consulting"
                            src="@/assets/img/consulting.png"
                        >
                    </div>
                    <div class="px-lg-16 px-md-14 px-sm-10 px-5">
                        <p class="subtitle-2 graytext--text text-center text-md-left pb-4  font-weight-normal mt-4" >
                            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. 
                        </p>
                        <p class="subtitle-2 graytext--text text-center text-md-left pb-4 font-weight-normal mt-4" >
                            Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo. El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro. El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja. 
                        </p>
                        <p class="subtitle-2 graytext--text text-center text-md-left pb-4 font-weight-normal mt-4" >
                            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán.
                        </p>
                    </div>
                </v-col>
                <v-col cols="12" sm="10" md="9"  lg="6" class="mt-6 px-6" >
                    <h1 class="h3 primary--text light-bolder text-center">
                        Lo que te ofrecemos
                    </h1>
                    <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4" >
                        Utilizamos la tecnología más moderna para brindarle una herramienta moderna para presentar y acercarse a clientes potenciales.
                    </p>
                </v-col>
                <v-col cols="12" class="px-6 pt-0 pb-16">
                    <div class="d-flex justify-center align-center flex-wrap pb-4">
                        <div class="cardServiceOffer px-4 mt-8 py-3"
                            v-for="(item, i) in 4"
                            :key="i">
                             <div style="width:max-content">
                                <h2 class="primary--text text-box-animation text-center" style="font-size:30px">
                                    Dinámico
                                </h2>
                                <div class="styled-div-animation-text-col terciary"></div>
                            </div>
                            <p class="subtitle-2 graytext--text  font-weight-normal mt-4" >
                                Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky.
                            </p>
                            <div class="div-icon">
                                <img
                                    class="logowingsoftblack"
                                    alt="logowingsoft"
                                    src="@/assets/img/logowingsoftblack.png"
                                >
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="center" class="pb-10">
            <v-col cols="12" sm="10" md="10"  lg="8" class="mt-13 px-6" >
                <h1 class="h3 white--text light-bolder text-center">
                    Por qué colaborar con nosotros
                </h1>
                <p class="subtitle-2 white--text text-center font-weight-normal mt-4 px-md-16 mx-lg-16" >
                    Utilizamos la tecnología más moderna para brindarle una herramienta moderna para presentar y acercarse a clientes potenciales.
                </p>
            </v-col>
            <v-col cols="12" class="d-flex justify-center mt-4">
                <div class="d-flex justify-center align-center flex-wrap pb-4" style="width:1200px">
                    <div class="cardColaboration d-flex"
                        v-for="(item, i) in 8"
                        :key="i">
                        <div style="min-width:40px" class="icon-div">
                            <v-icon>mdi-check</v-icon>
                        </div>
                        <div>   
                            <h2 class="font-weight-normal white--text" style="font-weight:600">Título de colaboración</h2>
                            <div class="white my-2" style="width:50px;height:2px"></div>
                            <p class="subtitle-2 white--text  font-weight-normal mt-4" >
                                Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </v-col>
        </v-row>
        <div class="white px-lg-12 pt-15">
            <v-row justify="center" align="center" class="pb-10 px-md-16 px-sm-10">
                <v-col cols="12" md="6"  class="mt-0 px-md-6 px-6" >
                    <h1 class="h3 primary--text text-center text-md-left">
                        Proyectos destacados
                    </h1>
                    <p class="subtitle-2 graytext--text  font-weight-normal text-center text-md-left" >
                        Ver nuestros proyectos
                    </p>
                </v-col>
                <v-col cols="12" md="6" class="px-md-6 px-6">
                    <p class="subtitle-1 graytext--text  text-center text-md-left  font-weight-normal mt-0 pt-8" >
                        Desde la creación de identidad corporativa y reconocimiento de marca hasta la construcción de sitios web y la construcción de eshop, trabajamos en cada desafío creativo para implementar sus ideas.
                    </p>
                </v-col>
                <v-col cols="12"   class="mt-0 px-md-6 d-flex justify-center pb-6" >
                    <div class="cardContainer d-flex" >
                        <div class="cardProject mr-7" 
                            v-for="(card, index) in imgs"
                            :key="index">
                            <img
                                :src="require(`@/assets/img/${card.imgurl}`)"
                            >
                            <div class="cardInside px-6 py-5">
                                <p class="subtitle-2 black--text mb-0 font-weight-bold text-card-inside" >
                                    Nombre del proyecto
                                </p>
                                <p class="subtitle-2 black--text mb-4 font-weight-light text-card-inside" >
                                    Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky.
                                </p>
                                <div class="d-flex justify-space-between">
                                    <div>
                                        <p class="subtitle-2 black--text mb-0 font-weight-bold text-card-inside" >
                                            Enlace
                                        </p>
                                        <p class="subtitle-2 black--text mb-0  font-weight-light text-card-inside" >
                                            proyecto.com
                                        </p>
                                    </div>
                                    <div>
                                        <p class="subtitle-2 black--text mb-0  font-weight-bold text-card-inside" >
                                            Plataforma
                                        </p>
                                        <p class="subtitle-2 black--text mb-0  font-weight-light text-card-inside" >
                                            wordpress
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="start" class="pb-10 px-4 px-sm-16 mt-16" style="position: relative;overflow: hidden;">
            <img
                class="logowingsofttransparentServices"
                alt="logowingsoft"
                src="@/assets/img/logowinsoftgray.png"
            >
            <v-col cols="12" md="6"  class="mt-0 px-md-6"  >
                <h1 class="h4 white--text text-center text-md-left">
                    ¿Quieres hablar de tu próximo proyecto?
                </h1>
            </v-col>
            <v-col cols="12" md="6"  class="mt-0 px-md-6 d-flex justify-md-end justify-center"  >
                <v-btn color="white" outlined small class="parrent-btn-main">
                    <div class="text-capitalize text-btn-with-hover">
                    <span class="text-capitalize">Comentanos 
                        <span  class="text-lowercase">que tienes para tu futuro</span></span>
                    </div>
                    <div class="div-btn-parrent-services">
                        <div class="div-btn white align-self-start"></div>
                    </div>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center justify-sm-start justify-md-center align-start relativeindex2">
                <div>
                    <div class="d-flex flex-column justify-start mt-12">
                        <h2 class="h6 font-weight-bold white--text">Social</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <div class="d-flex flex-column justify-start mt-2">
                        <a href="https://www.facebook.com/wingsoftchile/" target="_blank"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <v-icon color="white" class="mr-1">mdi-facebook</v-icon>
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/company/wingsoftcl" target="_blank" 
                        class="subtitle-1 font-weight-light white--text my-1">
                            <v-icon color="white" class="mr-1">mdi-linkedin</v-icon>
                            <span>Linkedin</span>
                        </a>
                        <a href="https://www.instagram.com/wingsofthq" target="_blank"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <v-icon color="white" class="mr-1">mdi-instagram</v-icon>
                            <span>Instagram</span>
                        </a>
                        <a href="https://twitter.com/wingsoft" target="_blank"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <v-icon color="white" class="mr-1">mdi-twitter</v-icon>
                            <span>Twitter</span>
                        </a> 
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6"  md="3" class="d-flex justify-center justify-sm-start justify-md-center align-start relativeindex2">
                 <div>
                    <div class="d-flex flex-column justify-start mt-12">
                        <h2 class="h6 font-weight-bold white--text">Servicios</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <div class="d-flex flex-column justify-start mt-2">
                        <a @click="$router.push('/services/builder')"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <span>Builder</span>
                        </a>
                        <a @click="$router.push('/services/venture')"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <span>Venture</span>
                        </a>
                        <a @click="$router.push('/services/consulting')"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <span>Consulting</span>
                        </a>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6"  md="3" class="d-flex justify-center justify-sm-start justify-md-center align-start relativeindex2">
                <div>
                    <div class="d-flex flex-column justify-start mt-12">
                        <h2 class="h6 font-weight-bold white--text">Nosotros</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <div class="d-flex flex-column justify-start mt-2">
                        <a @click="$router.push('/aboutUs')"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <span>Quienes somos</span>
                        </a>
                        <a @click="$router.push('/services')"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <span>Que hacemos</span>
                        </a>
                        <a @click="$router.push('/partners')"
                        class="subtitle-1 font-weight-light white--text my-1">
                            <span>Nuestras alianzas</span>
                        </a>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center justify-sm-start justify-md-center  align-start relativeindex2">
                <div style="max-width:170px">
                    <div class="d-flex flex-column justify-start mt-12">
                        <h2 class="h6 font-weight-bold white--text">Contáctanos</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <div class="d-flex flex-column justify-start mt-2">
                        <span
                        class="subtitle-1 font-weight-thin white--text my-1">
                            +01 234 567 890
                        </span>
                        <span 
                        class="subtitle-1 font-weight-thin white--text my-1">
                            Av. Del Parque 4265, Huechuraba, Chile
                        </span>
                        <span 
                        class="subtitle-1 font-weight-thin white--text my-1">
                            contacto@wingsoft.com
                        </span>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="relativeindex2 d-flex justify-space-between">
                 <div class="d-flex justify-space-between   mt-16" style="width:100%">
                    <div class="d-flex ">
                    <img
                        alt="iconAboutUs"
                        width="20"
                        style="margin-top:2px"
                        class="mr-2 "
                        height="20"
                        src="@/assets/img/logowingsoft256.png"
                    >
                    <span class="white--text subtitle-2" >Wingsoft © 2022, Todos los derechos reservados</span>
                    </div>
                    <v-btn color="white" icon outlined small @click="goUp()"  class="ml-2" 
                        >
                        <v-icon style="font-size:21px">mdi-arrow-up</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import goTo from 'vuetify/lib/services/goto'

export default {
    layout:'mainNoBGBlue',
    head () {
        return {
            title: "Wingsoft | Consulting",
           
        }
    },
    data() {
        return {
            imgs:[
                {
                    imgurl:'cvio.jpg'
                },
                {
                    imgurl:'mantelit.jpg'
                },
                {
                    imgurl:'cvio.jpg'
                },
                {
                    imgurl:'mantelit.jpg'
                },
            ]
            
        }
    },
    methods:{
        goUp(){
            goTo(0, {
                duration: 300,
                easing: 'easeInQuad',
                offset: -9
            })
        },
        
    },
    mounted(){
        const slider = document.querySelector('.cardContainer');
        let mouseDown = false;
        let touchDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            slider.style.cursor = 'grabbing';
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        let startDraggingMobile = function (e) {
            touchDown = true;
            startX = e.changedTouches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        let stopDragging = function (event) {
            slider.style.cursor = 'default'
            mouseDown = false;
            touchDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if(!touchDown) { return; }
            const x = e.changedTouches[0].pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });


        // Add the event listeners
        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);

        slider.addEventListener("touchstart", startDraggingMobile, false);
        slider.addEventListener("touchend", stopDragging, false);
        slider.addEventListener("touchcancel", stopDragging, false);
        slider.addEventListener("touchleave", stopDragging, false);
    }
}
</script>

<style>
    .cardServiceOffer{
        width: 282px;
        height: 191px;
    }
    .cardServiceOffer .div-icon img{
        width: 34px;
        height: 34px;
        filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(44deg) brightness(103%) contrast(101%) drop-shadow(1px 1px 0 #44006D) drop-shadow(-1px -1px 0 #44006D) ;
        transition: 0.2 ease-in;
    }
    .cardServiceOffer:hover .styled-div-animation-text-col{
        width: 112%;
        opacity: 1;
    }
    .cardServiceOffer:hover .div-icon img {
        filter: invert(11%) sepia(38%) saturate(5119%) hue-rotate(282deg) brightness(94%) contrast(116%);
        margin-top: -10px;
    }
    
    .cardColaboration{
        width: 290px;
        height: 200px;
    }

    .cardColaboration .icon-div i{
        color: #FFFFFF80;
        font-size: 30px;
        transition: 0.2 ease-in;
    }

    .cardColaboration:hover .icon-div i{
        color: white;
        font-size: 38px;
    }

    .cardContainer{
        width:100%;
        height: 370px;
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .cardProject{
        width: 483px;
        height: 296px;
        min-width: 483px;
        min-height: 296px;
        border-radius: 6px;
    }
    
    .cardProject img{
        width: 483px;
        height: 296px;
        position: relative;
        z-index: 1;
        border-radius: 6px;
    }

    .cardInside{
        background-color: white;
        border-radius: 6px;
        width: 332px;   
        height: 182px;
        position: relative;
        z-index: 2;
        top:-150px;
        left:30px;
        transition: 0.2 ease-in !important;
    }
    .text-card-inside{
        transition: 0.2 ease-in !important;
    }

    .cardInside:hover{
        background-color: #E37330;
    }

    .cardInside:hover .text-card-inside{
        color:white !important
    }

    .div-btn-parrent-services{
        width: 109.5%;
        height: 160%;
        border-radius:3px !important;
        position: absolute;
        z-index: 5;
    }

    .logowingsofttransparentServices{
         position: absolute;
            z-index: 1;
            bottom: -100px;
            right: -70px;
            
    }

    .relativeindex2{
        position: relative;
        z-index: 2;
        
    }
</style>