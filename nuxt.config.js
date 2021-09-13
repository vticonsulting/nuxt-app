import fetch from 'node-fetch'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/hancock', '~/assets/css/sidebar-menu'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-placeholders', '~/plugins/vuejs-smart-table'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    '@nuxtjs/composition-api/module',

    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://oruga.io/documentation/#nuxt
    // '@oruga-ui/oruga/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxt/http',

    // https://bootstrap-vue.org/docs#getting-started-with-nuxtjs
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // https://bootstrap-vue.org/docs#using-custom-bootstrap-scss
  bootstrapVue: {
    icons: true,
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    interval: 2000,
    async routes() {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((d) => d.slice(0, 20))
      const routes = posts.map((post) => `/posts/${post.id}`)

      return ['/'].concat(routes)
    },
    exclude: ['/posts/23'],
  },
}
