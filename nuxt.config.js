export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hermes',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
