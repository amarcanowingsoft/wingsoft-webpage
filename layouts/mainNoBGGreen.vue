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
      <Navbar colorNav="#319620" @openMenu="drawer=$event"/>
      <v-container fluid class="px-0 ">
        <Nuxt />
      </v-container>
    </v-main>    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components:{
    Navbar,
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
      /* background: linear-gradient(to right, rgba(85, 51, 51, 0.7) 0%, rgba(44, 4, 4, 0.7) 100%), url("@/assets/img/bg-auth.jpg"); */
      /*background: linear-gradient(to right, rgba(22, 27, 79, 0.6) 0%, rgba(30, 0, 86, 0.811) 100%), url("@/assets/img/bg-image.jpg");*/
      background-color: #319620;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
  }
  .test{
    color: rgba(0, 0, 0, 0)
  }
</style>