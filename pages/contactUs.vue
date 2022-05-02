<template>
    <div class="px-6 px-sm-16">
        <v-row class="px-lg-16">
            <v-col cols="12" md="6" class="d-flex align-end mb-6 mb-md-0"
                v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly">
                <div>
                    <div class="d-flex flex-column justify-start">
                        <h2 class="h6 font-weight-bold white--text">Contáctanos</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <h3 class="h6 font-weight-thin white--text mt-3">+01 234 567 890</h3>
                    <h3 class="h6 font-weight-thin white--text">Juan Valiente 3630, Vitacura, Chile</h3>
                    <h3 class="h6 font-weight-thin white--text">contacto@wingsoft.com</h3>
                    <div class="d-flex flex-column justify-start mt-12">
                        <h2 class="h6 font-weight-bold white--text">Social</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <div class="d-flex flex-column justify-start mt-2 relativeindex2">
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
            <v-col cols="12" md="6" style="overflow:hidden;">
                <img
                    class="logowingsofttransparent"
                    alt="logowingsoft"
                    src="@/assets/img/logowinsoftgray.png"
                >
                <h1 class="white--text text-center text-md-left relativeindex2">¿Quieres hablar de tu próximo proyecto?</h1>
                <ValidationObserver v-slot="{ valid , handleSubmit  }" ref="contactForm">
                    <form @submit.prevent="handleSubmit(onSubmit(valid))" class="relativeindex2">
                        <ValidationProvider name="Nombre" rules="required" v-slot="{ errors }">
                            <v-text-field
                                dense
                                outlined
                                dark
                                type="text"
                                class="rounded-lg mt-7"
                                label="Nombre"
                                placeholder=""
                                color="terciary"
                                :error-messages="errors[0]"
                                v-model.trim="dataForm.name"
                                >
                            </v-text-field>
                        </ValidationProvider>
                        <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                            <v-text-field
                                dense
                                outlined
                                dark
                                type="text"
                                label="Email"
                                class="rounded-lg"
                                placeholder=""
                                color="terciary"
                                :error-messages="errors[0]"
                                v-model.trim="dataForm.email"
                                >
                            </v-text-field>
                        </ValidationProvider>
                        <ValidationProvider name="Telefono" rules="required" v-slot="{ errors }">
                            <v-text-field
                                dense
                                outlined
                                dark
                                type="text"
                                label="Telefono"
                                class="rounded-lg"
                                placeholder=""
                                color="terciary"
                                :error-messages="errors[0]"
                                v-model.trim="dataForm.phone"
                                >
                            </v-text-field>
                        </ValidationProvider>
                        <ValidationProvider name="Empresa" rules="required" v-slot="{ errors }">
                            <v-text-field
                                dense
                                outlined
                                dark
                                type="text"
                                label="Empresa"
                                class="rounded-lg"
                                placeholder=""
                                color="terciary"
                                :error-messages="errors[0]"
                                v-model.trim="dataForm.company"
                                >
                            </v-text-field>
                        </ValidationProvider>
                        <ValidationProvider name="Mensaje" rules="required" v-slot="{ errors }">
                            <v-textarea
                                outlined
                                dark
                                type="text"
                                label="Mensaje"
                                class="rounded-lg"
                                placeholder=""
                                color="terciary"
                                :error-messages="errors[0]"
                                v-model.trim="dataForm.message"
                                >
                            </v-textarea>
                        </ValidationProvider>
                        <v-btn color="white" outlined small class="parrent-btn-main mt-2" type="submit">
                            <div class="text-capitalize text-btn-with-hover">
                            <span class="text-capitalize">Enviar</span>
                            </div>
                            <div class="div-btn-parrent-send">
                                <div class="div-btn terciary align-self-start"></div>
                            </div>
                        </v-btn>
                    </form>
                </ValidationObserver>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-end mb-6 mb-md-0"
                v-if="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.xsOnly">
                <div>
                    <div class="d-flex flex-column justify-start">
                        <h2 class="h6 font-weight-bold white--text">Contáctanos</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <h3 class="h6 font-weight-thin white--text mt-3">+01 234 567 890</h3>
                    <h3 class="h6 font-weight-thin white--text">Juan Valiente 3630, Vitacura, Chile</h3>
                    <h3 class="h6 font-weight-thin white--text">contacto@wingsoft.com</h3>
                    <div class="d-flex flex-column justify-start mt-12">
                        <h2 class="h6 font-weight-bold white--text">Social</h2>
                        <div class="white mt-1" style="width:115px; height:1px"></div>
                    </div>
                    <div class="d-flex flex-column justify-start mt-2 relativeindex2">
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
        </v-row>
        <div class="d-flex justify-space-between mt-10 relativeindex2">
            <div class="d-flex ">
                <img
                    alt="iconAboutUs"
                    width="20"
                    style="margin-top:2px"
                    class="mr-2 "
                    height="20"
                    src="@/assets/img/logowingsoft256.png"
                >
                <span class="white--text subtitle-2 relativeindex2">Wingsoft © 2022, Todos los derechos reservados</span>
            </div>
            <v-btn color="white" icon outlined small @click="goUp()"  class="ml-2"
                v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly" >
                <v-icon style="font-size:21px">mdi-arrow-up</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import goTo from 'vuetify/lib/services/goto'

export default {
  layout:'mainNoBGPurple',
    head () {
        return {
            title: "Wingsoft | Contactanos",
           
        }
    },
    data() {
        return {
            dataForm: {
                name: '',
                email:'',
                phone:'',
                company:'',
                message:''
            }
            
        }
    },
    methods:{
        onSubmit (value) {
            console.log(value)
        },
        goUp(){
            goTo(0, {
                duration: 200,
                easing: 'easeInQuad',
                offset: -9
            })
        },
    },
    mounted(){
    window.onwheel = e => {
      if(e.deltaY >= 0){
        // Scrolling Down with mouse
        //console.log('Scroll Down');
        
        
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
        if (this.$route.path == '/contactUs'  && this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) this.$router.push('/knowledge')
      }
    }
  }

}
</script>

<style>
    
  .parrent-btn-main:hover .text-btn-with-hover{
    color: #44006D;
    font-weight: bolder;
  }
  .parrent-btn-main:hover {
    border-color: #FFC75F;
  }
  .text-btn-with-hover{
    position: relative;
     z-index: 10;
     transition: 0.3s ease-in-out;
  }
  
  .div-btn{
    height: 100%;
    width: 0%;
    border-radius:3px !important;
    transition: 0.3s ease-in-out;
    position: absolute;
    
  }
  .parrent-btn-main:hover .div-btn{
    width: 100%;
  }
  .div-btn-parrent-send{
    width: 160%;
    height: 180%;
    border-radius:3px !important;
    position: absolute;
    z-index: 5;
  }
  .parrent-btn-main{
    height: 26px !important; 
  }

  .logowingsofttransparent{
      position: fixed;
      z-index: 1;
      bottom: -190px;
      right: -70px;

    
  }
  

  .relativeindex2{
      position: relative;
      z-index: 2;
      
  }
  

</style>