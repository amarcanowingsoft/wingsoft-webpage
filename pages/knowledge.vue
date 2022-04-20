<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="9"  lg="6" class="mt-6 mt-md-0 " >
         <h1 class="h3 primary--text light-bolder text-center">
            Knowledge
        </h1>

        <p class="subtitle-2 graytext--text text-center font-weight-normal mt-4 mb-0" >
            Ofrecemos servicios respaldados por nuestra experiencia en estrategia, uso de modernas tecnologías, análisis, marketing y diseño.
        </p>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center pt-0 pb-0 px-0" >
      <div class="d-flex justify-center align-center flex-wrap" style="width:1300px">
         <div class="cardKnowledge mx-3 my-3" v-for="(item, i) in ($vuetify.breakpoint.mdOnly) ? 4 : 6" :key="i">
             <img 
                  :src="require(`@/assets/img/knowledge.jpg`)"
              >
              <div class="gradient-div d-flex align-end">
                <div class="div-btns-img px-2 d-flex justify-space-between" style="width:100%; height:35px">
                  <div class="d-flex">
                     <span class="white--text caption mr-1">
                      <v-icon small color="white">
                        mdi-heart
                      </v-icon>
                      100k
                    </span>
                    <span class="white--text caption mr-1">
                      <v-icon small color="white">
                        mdi-eye
                      </v-icon>
                      100k
                    </span>
                    <span class="white--text caption">
                      <v-icon small color="white">
                        mdi-comment-multiple
                      </v-icon>
                      100k
                    </span>
                  </div>
                  <div class="d-flex">
                    <span class="white--text caption mr-1">
                      <v-icon small color="white">
                        mdi-share-variant
                      </v-icon>
                    </span>
                    <span class="white--text caption">
                      <v-icon small color="white">
                        mdi-bookmark
                      </v-icon>
                    </span>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="">
        <Ask :isAsk="false" />
    </v-col>  
    <div class="d-flex justify-center orbits-knowledge">
          <div class="orbit-purple d-flex justify-center align-center">
              <div class="orbit-purple-inner d-flex justify-center align-center">
                  <div class="purple">
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
        title: "Wingsoft | Knowledge",
       
      }
  },
  mounted(){
    window.onwheel = e => {
      if(e.deltaY >= 0){
        // Scrolling Down with mouse
        //console.log('Scroll Down');
        if (this.$route.path == '/knowledge'  && this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) this.$router.push('/contactUs')
        
      } else {
        // Scrolling Up with mouse
        //console.log('Scroll Up');
        if (this.$route.path == '/knowledge'  && this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.mdOnly) this.$router.push('/services')
      }
    }
  }
}
</script>

<style>
  .cardKnowledge{
      width: 372px;
      height: 209px;
      border-radius:  6px;
  }
  .cardKnowledge img{
      width: 372px;
      height: 209px;
      position: relative;
      z-index: 1;
      border-radius: 6px;
    }

    .gradient-div{
      width: 372px;
      height: 209px;
      position: relative;
      top: -215px;
      border-radius:  6px;
      z-index: 2;
      background-image: linear-gradient(#43006d00,#000000);
      background-position:  0px 40px;
      opacity: 0;
      transition: 200ms ease-in;
    }

    .gradient-div:hover{
      opacity: 1;
    }

     @media screen  and (max-width: 400px){
      .cardKnowledge{
        width: 290px;
        height: 180px;
      }
      .cardKnowledge img{
        width: 290px;
        height: 180px;
      }
      .gradient-div{
        width: 290px;
        height: 180px;
        top: -194px;
      }
      
    }

    .div-btns-img  i{
      cursor: pointer;
      color: white !important;
      transition: 200ms ease-in;
    }
    .div-btns-img  span{
      cursor: pointer;
    }

    .div-btns-img  span:hover i{
      color: #FF0055 !important;
      margin-top: -15px;
    }
    

    .orbits-knowledge{
        position: fixed;
        width: 750px;
        height: 750px;
        bottom: -420px;
        right: -130px
    }

    .orbit-purple{
        /* full responsive, solo tienes que modificar el width, height (deben ser iguales), el margin right y el top, no tocar el rotate y el rotatex*/ 
        transform: rotate(35deg) rotateX(65deg) ;
        width: 600px; 
        height: 600px; 
        border-radius: 50% !important;
        border-width: 1px !important;
        position: absolute;
        margin-right: 0px; /*-760px;*/
        margin-top:0px; /*-390px;*/
        z-index: 60;
        left: 160px;
    }
    .orbit-purple-inner{
        width: 95%;
        height: 95%;
        border: 1px solid #44006D !important;
        border-radius: 50% !important;
        border-width: 1px !important;
        animation: animation-orbit 5s linear  forwards infinite  
    }
    .purple{
        top: 0px;
        margin-top: -8%; /*25px*/
        position: absolute;
        width: 8%; /*31px;*/
        height: 18.2%;/*71px; */
        border-radius: 50% !important;
        background-color: #9A00FA;
        animation: animation-planet 5s linear  forwards infinite  
    }

    

</style>