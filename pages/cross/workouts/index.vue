<template>
  <client-only>
    <div>
      <Head :background="background">
        <template v-slot:section>
          cross
        </template>
        <template v-slot:subsection>
          Zajęcia
        </template>
      </Head>
      <Workouts :workouts="workouts" zone="cross" v-if="workouts" />
      <Schedule :days="days" zone="cross" v-if="days" /> 
    </div>   
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Schedule from '~/components/fitness/Schedule'
  import Workouts from '~/components/fitness/Workouts'  

  import daysQuery from '~/apollo/queries/days.gql'
  import workoutsQuery from '~/apollo/queries/workouts/workouts.gql'

  export default {
    data() {
      return {
        background: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
      }
    },
    components: {
      Head,
      Schedule, 
      Workouts
    },
    apollo: {
      days: {
        prefetch: true, 
        query: daysQuery
      },
      workouts: {
        prefetch: true, 
        query: workoutsQuery
      }
    }
  }
</script>
