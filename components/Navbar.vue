<template>
    <v-app-bar
      class="px-0"
      dark
      :color="colorNav"
      :clipped-left="true"
      fixed
      elevation="0"
      app
      style="height:62px"
    >
      <v-row justify="center">
        <v-col cols="12" sm="12" md="3" class="d-flex justify-space-between justify-md-center px-6">
          <nuxt-link to="/" class="d-flex align-center justify-center ml-0 ml-lg-3">
            <img
                class="wingsoft-logo-navbar"
                alt="Logo"
                height="28"
                src="@/assets/img/wingsoftLogo.png"
            >
          </nuxt-link>
          <v-btn color="white" class="" icon @click.stop="openMenu" v-if="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.xsOnly">
              <svg class="mr-1" width="28" height="20" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="17" width="17" height="4" fill="white"/>
                <rect x="8" y="20" width="26" height="4" fill="white"/>
                <rect y="10" width="34" height="4" fill="white"/>
              </svg>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center" v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly" >
          <div v-for="(item, index) in items" :key="index" class="parent" @click="$router.push(item.to)" style="cursor:pointer">
            <a class="px-3 px13 white--text styled-a-animation" 
              :class="($route.path===item.to) ? 'font-weight-bold' : ''">
              {{item.title}}
            </a>
            <div  :class='(noGreenA) ? "styled-div-animation-text-primary" : "styled-div-animation-text"' v-if="$route.path!=item.to"></div>
          </div>
        </v-col>
        <v-col sm="6" cols="3" md="3" class="d-flex justify-center align-center" v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly">
          <v-btn color="white" outlined x-small class="parrent-btn-main">
            <div class="text-capitalize text-btn-with-hover">
              <span class="text-capitalize">Trabaja 
                <span  class="text-lowercase">con nosotros</span></span>
            </div>
            <div class="div-btn-parrent">
                <div class="div-btn terciary align-self-start"></div>
            </div>
          </v-btn>
        </v-col>
      </v-row>
      
    </v-app-bar>
</template>


<script>


export default {
  props:{
    colorNav:{
      type:String,
      default:'rgba(0, 0, 0, 0)'
    },
    noGreenA:{
      type:Boolean,
      default:false
    }
  },
  data(){    
    return {
       items: [
        {
          title: 'Home',
          to:`/`,
        },
        {
          title: 'Nosotros',
          to:`/aboutUs`,
        },
        {
          title: 'Partners',
          to:`/partners`,
        },
        {
          title: 'Servicios',
          to:`/services`,
        },
        {
          title: 'Knowledge',
          to:`/knowledge`,
        },
        {
          title: 'Contactanos',
          to:`/contactUs`,
        },
      ]
    }
  },
  methods:{
    openMenu() {
      this.$emit('openMenu', true)
    },
  }
}
</script>

<style >
  .styled-div-animation-text{
    width: 0%;
    margin-left: 7.5%;
    position: relative;
    background-color: #319620;
    height: 4px;
    margin-top: -12.5px;
    z-index: 1;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  .styled-div-animation-text-primary{
    width: 0%;
    margin-left: 7.5%;
    position: relative;
    background-color: #44006D;
    height: 4px;
    margin-top: -12.5px;
    z-index: 1;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  .styled-a-animation{
     position: relative;
     z-index: 2;
     transition: 0.3s ease-in-out !important;
  }

  .parent:hover .styled-div-animation-text{
    width: 85%;
    opacity: 1;
  }
  .parent:hover .styled-div-animation-text-primary{
    width: 85%;
    opacity: 1;
  }

  .parent:hover .styled-a-animation{
    font-weight: bold;
    font-size: 13px;
  }



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
  .div-btn-parrent{
    width: 115%;
    height: 200%;
    border-radius:3px !important;
    position: absolute;
    z-index: 5;
  }
  .parrent-btn-main{
    height: 26px !important; 
  }
</style>