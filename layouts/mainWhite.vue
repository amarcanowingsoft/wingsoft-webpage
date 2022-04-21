<template>
  <v-app dark style="background-color:#44006D;">
    <v-main class="bg-auth--img">
      <v-navigation-drawer
        dark
        color="primary"
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        :disable-resize-watcher="true"
        :disable-route-watcher="true"
        app
      >
        <Navigation />      
      </v-navigation-drawer>    
      <NavbarWhite @openMenu="drawer=$event"/>
      <v-container fluid class="px-md-12 px-sm-8 px-xs-4 px-2 padding-container-1900" style="padding:0%;">
        <Nuxt />
      </v-container>
    </v-main>    
  </v-app>
</template>

<script>
import NavbarWhite from "@/components/NavbarWhite.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components:{
    NavbarWhite,
    Navigation
  },
  //middleware: 'guest',
  data () {
    return {
      clipped: true,
      drawer: false,
      miniVariant: false,
    }
  },
  watch:{
        '$vuetify.breakpoint.lgOnly': function (value) {
            if(value) this.drawer = false;
        },
        '$vuetify.breakpoint.xlOnly': function (value) {
            if(value) this.drawer = false;
        },
        '$vuetify.breakpoint.mdOnly': function (value) {
            if(value) this.drawer = false;
        },
  }
}
</script>

<style scoped>
  .bg-auth--img{
      padding-top: 10rem;
      padding-bottom: calc(10rem - 4.5rem);
      background-color: white;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-size: cover;
  }
  @media screen and (min-width: 1900px)   {
    .padding-container-1900{
     padding:4% !important;
    }
  }
</style>