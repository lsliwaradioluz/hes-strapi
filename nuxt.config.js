import webpack from 'webpack'

export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hesgym',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/fonts.css',
    '~/assets/styles/layout.scss',
    '~/assets/styles/elements.scss',
    '~/assets/styles/animations.css',
    '~/assets/styles/general.scss',
    '~/assets/styles/colors.scss',
    '~/assets/icons/footernavbar/font/flaticon.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    ['@nuxtjs/style-resources']
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NODE_ENV == 'development' ? 'http://localhost:1337/graphql' : 'https://hes-backend.herokuapp.com/graphql'
      }
    }
  },
  styleResources: {
    scss: [
      '~/assets/styles/general.scss',
      '~/assets/styles/elements.scss',
      '~/assets/styles/colors.scss',
      '~/assets/styles/layout.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    extend (config, ctx) {
    }
  }
}
