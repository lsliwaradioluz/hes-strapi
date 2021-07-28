import webpack from 'webpack'
import axios from 'axios'

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
  generate: {
    async routes () {
      // Generate static routes for workouts
      const workouts = await axios.get('https://hes-backend.herokuapp.com/workouts');
      const workoutsRoutes = workouts.data.map(workout => {
        const zone = workout.zone === 'fitness' ? 'fitness' : workout.type === 'kids' ? 'kids' : 'cross'
        return { route: `/${zone}/workouts/${workout.id}` }
      });

      // Generate static routes for fitness, cross and personal coaches
      const coaches = await axios.get('https://hes-backend.herokuapp.com/coaches');
      const coachesRoutes = coaches.data.reduce((routes, coach) => {
        routes.push({ route: `/${coach.fitness ? 'fitness' : 'cross'}/coaches/${coach.id}` })
        if (coach.personal) routes.push({ route: `/personal/coaches/${coach.id}` })
        return routes
      }, [])

      return [
        ...workoutsRoutes,
        ...coachesRoutes
      ]
    }
  },
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
        httpEndpoint: 'https://hes-backend.herokuapp.com/graphql'
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
