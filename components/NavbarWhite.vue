<template>
    <v-app-bar
      class="px-0"
      dark
      color="white"
      :clipped-left="true"
      fixed
      elevation="0"
      app
      style="height:62px"
    >
      <v-row justify="center">
        <v-col cols="12" sm="12" md="3" class="d-flex justify-center">
          <nuxt-link to="/" class="d-flex align-center justify-center ml-0 ml-lg-3">
            <img
                class="wingsoft-logo-navbar"
                alt="Logo"
                height="28"
                src="@/assets/img/wingsoftLogoPurple.png"
            >
          </nuxt-link>
          
           <v-app-bar-nav-icon class="d-md-none primary--text mr-2" style="margin-left:-20px" @click.stop="openMenu"/>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center" 
        v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly" >
          <div v-for="(item, index) in items" :key="index" class="parent" @click="$router.push(item.to)" style="cursor:pointer">
            <a class="px-3 px13 primary--text styled-a-animation" 
              
              :class="($route.path===item.to) ? 'font-weight-bold' : ''">
              {{item.title}}
            </a>
            <div class="styled-div-animation-text-white" v-if="$route.path!=item.to"></div>
          </div>
        </v-col>
        <v-col sm="6" cols="3" md="3" class="d-flex justify-center align-center" v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly">
          <v-btn color="primary" outlined x-small class="parrent-btn">
            <div class="text-capitalize text-btn-with-hover">
              <span class="text-capitalize">Trabaja 
                <span  class="text-lowercase">con nosotros</span></span>
            </div>
            <div class="div-btn-parrent">
                <div class="div-btn primary align-self-start"></div>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
</template>


<script>


export default {
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
  .styled-div-animation-text-white{
    width: 0%;
    margin-left: 7.5%;
    position: relative;
    background-color: #FFC75F;
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

  .parent:hover .styled-div-animation-text-white{
    width: 85%;
    opacity: 1;
  }
  .parent:hover .styled-a-animation{
    font-weight: bold;
    font-size: 13px;
  }

  
  .parrent-btn:hover .text-btn-with-hover{
    color: white;
    font-weight: bolder;
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
  .parrent-btn:hover .div-btn{
    width: 100%;
  }
  .div-btn-parrent{
    width: 115%;
    height: 200%;
    border-radius:3px !important;
    position: absolute;
    z-index: 5;
  }
  .parrent-btn{
    height: 26px !important; 
  }
  
</style>