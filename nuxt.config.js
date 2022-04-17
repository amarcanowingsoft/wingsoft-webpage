import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,

  head: {
    //titleTemplate: '%s - Wingsoft',
    title: 'Wingsoft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Empresa de desarrollo de Aplicaciones web y móviles con más de 10 años de experiencia.' },
      { name: 'keywords', content: 'Desarrollo de aplicaciones moviles, agencia de marketing digital, Desarrollo de aplicaciones moviles, agencia de marketing digital, Desarrollo de aplicaciones moviles, agencia de marketing digital, Desarrollo de aplicaciones moviles, agencia de marketing digital, Desarrollo de aplicaciones moviles, agencia de marketing digital.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:true },
      { href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed&display=swap', rel:"stylesheet",  },
    ]
  },

  //config for the nuxt auth module
  
  /*router: {
    middleware: ['auth']
  },*/

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss',, // use this scss archive to set global css to the project
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    credentials: false,
  },
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vee-validate.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    /*'vue-sweetalert2/nuxt',*/
    /*'@nuxtjs/auth-next'*/
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/sass/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#44006D',
          accent: colors.grey.darken3,
          secondary: '#003596',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#FF2A2A',
          success: '#28A745',
          graytext:'#898989',
          grayBG:'#F4F4F4',
          terciary:'#FFC75F',
          graytext2:'FFFFFF'
        }
      }
    }
  },

  auth: {
    // plugins: ['~/plugins/auth.js' ],
    strategies: {
      local: {
          // scheme: 'refresh',
          scheme: 'local',
          user: {
            property: ''
          },
          endpoints: {
              login: {
                  url: `/auth/login`,
                  method: 'post',
                  propertyName: 'data.accessToken',
              },
              refreshToken: {
                  property: 'data.accessToken',
                  method: 'get',
                  url: '/auth/refresh',
                  tokenRequired: true,
              },
              user: {
                  url: `/auth/profile`,
                  method: 'get',
                  propertyName: 'data.user',
                  autoFetch: true
              },
              forgotPassword: {
                  url: `/auth/forgotPassword`,
                  method: 'post',
                  propertyName: 'data.token',
              },
              logout: {
                  url: `auth/logout`,
                  method: 'post',
                  propertyName: 'data'
              },
          },
          token: {
            property: 'data.accessToken',
            global: true,
            // required: true,
            // type: 'Bearer'
          },
          // tokenType: 'Bearer',
          // tokenName: 'Authorization',
      }
    }
  },
  redirect: {
      login: '/login',
      logout: '/',
      user: '/',
      home: false,
  },
  cookie: {
      prefix: 'auth.',
      options: {
          path: '/login',
          expires: 1
      }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    //analyze: true,
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    refresh_interval: process.env.JWT_EXPIRES || 540000,
  }
}
