import config from './config'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'ثورة تشرين',
    htmlAttrs: { dir: 'rtl' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // css: ['@/assets/css/glightbox.css'],

  router: {
    middleware: ['auth']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-alert-inject',
    { src: '~/plugins/vue-date-picker', mode: 'client' },
    '~/plugins/vue-alert-inject',
    { src: '~/plugins/vue-lightbox-inject', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'G-BRD0EL6DSR'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: config.baseURL
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/Admin/Login', method: 'post', propertyName: 'token' },
          logout: false,
          user: false
        }
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    },
    redirect: {
      login: '/admin/login',
      logout: '/',
      callback: '/admin/login',
      home: '/'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
}
