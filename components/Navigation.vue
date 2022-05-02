<template>
    <div class="pb-4 pt-4">
        <div class="mb-3">
            <nuxt-link to="/" class="d-flex align-center justify-center ml-0 ml-lg-3">
                <img
                    class="wingsoft-logo-navbar"
                    alt="Logo"
                    height="28"
                    src="@/assets/img/wingsoftLogo.png"
                >
            </nuxt-link>
        </div>

        <div class="d-flex flex-column justify-center align-center">
            <div v-for="(item, index) in items" :key="index" class="parent my-2" @click="$router.push(item.to)" style="cursor:pointer">
                <a class="px-3 px13 white--text styled-a-animation" 
                    :class="($route.path===item.to) ? 'font-weight-bold' : ''">
                    {{item.title}}
                </a>
                <div class="styled-div-animation-text " v-if="$route.path!=item.to"></div>
            </div>
        </div>

        <div class="d-flex justify-center align-center mt-6" >
          <v-btn color="white" outlined x-small class="parrent-btn-main">
            <div class="text-capitalize text-btn-with-hover">
              <span class="text-capitalize">Trabaja 
                <span  class="text-lowercase">con nosotros</span></span>
            </div>
            <div class="div-btn-parrent">
                <div class="div-btn terciary align-self-start"></div>
            </div>
          </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data () {
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

    methods: {
        closeMenu() {
            this.$emit('closeMenu', false)
        },
    }
}
</script>

<style>
 
</style>