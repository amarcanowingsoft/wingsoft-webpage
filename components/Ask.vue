<template>
    <div class="d-flex justify-center  ">
        <div class="glossyCardAsk d-flex justify-center flex-column flex-md-row align-center div-all-ask py-2">
        <div class="div-ask-orange white--text px-3 py-1 mr-2 mb-3 mb-md-0">
             {{(isAsk)?'PREGUNTA':'NOTICIAS'}}
        </div>
        <div class="primary--text text-div-ask d-flex text-center justify-center"  v-if="$vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.smOnly">
            <span> {{(isAsk)?'Cualquier duda o consulta,':'Para ver todas las noticias,'}}</span>
            <div style="cursor:pointer" @click="actionText()" class="styled-go-to ml-1"><span>
                {{(isAsk)?'Escríbenos':'Haz click aquí'}}
            </span></div>
        </div>
        <div v-else class="text-center justify-center">
            <span class="primary--text"> {{(isAsk)?'Cualquier duda o consulta,':'Para ver todas las noticias,'}} 
            <span style="cursor:pointer" class="styled-go-to" @click="actionText()">{{(isAsk)?'Escríbenos':'Haz click aquí'}}</span></span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isAsk:{
            type:Boolean,
            default:true
        }
    },
    methods: {
        actionText(){
            if(this.isAsk){
                this.$router.push('/contactUs')
            }
        }
    },
}
</script>

<style>
    .div-all-ask{
        position: relative;
        z-index: 7;
    }
    .div-ask-orange{
        background-color: #E37330;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
    }
    .text-div-ask{
        font-weight: 500;
        font-size: 15px;
         position: relative;
    }
    .styled-go-to{
        background-image: linear-gradient(90deg,#44006D,#FF0055);
        background-size: 0% 2px;
        background-repeat: no-repeat;
        background-position:  0px 17px;
        transition: 200ms ease-in;
        font-weight: 700;
    }
    .styled-go-to span{
        font-weight: 700;
        position: relative;
        top: 0px;
        transition: 200ms ease-in;
    }
    .styled-go-to:hover span{
        color: #FF0055;
        top: -4px;
    }
    .styled-go-to:hover {
        background-size: 100% 2px;
    }

    .glossyCardAsk{
        
        background-color: rgba(255, 255, 255, 0.411);
        backdrop-filter: blur(5px);
        border-radius: 8px;

    }
</style>