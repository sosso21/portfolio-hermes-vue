const title = "Hermes Dev ";
const decription =  "Développeur Front-end & Back-end. Spécialisé dans le web . Création, Optimisation et maintenance D'Applications,Sites web , Bases de données et API.Mon objectif est  l'automatisation de vos tâches tout en Boostant vos business en œuvrant à monter votre contenue aux premiers résultats des moteurs de recherches (SEO)."

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: title,
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      {name:"google-site-verification", content:"o7vE04gAoE_TPXejFD2uMlk_m3mltKl2vcrTwmE8oY4"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:decription},
      {property:"og:title", content: title },
      {property: 'og:description', content: decription  }
    ],
    link: [
      { rel:'icon', type:'image/x-icon', href:'/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/index.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve('@/pages/index.vue')
      })
    },
    scrollBehavior(to) {
      const fullPath =(to.fullPath).replace( '/', "#").toLowerCase()
      console.log('fullPath:', fullPath)
      if (fullPath) {
        return window.scrollTo({ top: document.querySelector(fullPath).offsetTop  , behavior: 'smooth' });
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' });
      
      }
  }

   
}
