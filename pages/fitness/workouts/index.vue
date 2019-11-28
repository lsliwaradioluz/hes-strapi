<template>
  <client-only>
    <div>
      <Head :background="background">
        <template v-slot:section>
          fitness
        </template>
        <template v-slot:subsection>
          Zajęcia
        </template>
      </Head>
      <Workouts :workouts="workouts" zone="fitness" v-if="workouts" />
      <Schedule :days="days" zone="fitness" v-if="days" /> 
    </div>   
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Schedule from '~/components/fitness/Schedule'
  import Workouts from '~/components/fitness/Workouts'  

  import workoutsQuery from '~/apollo/queries/workouts/workouts.gql'
  import daysQuery from '~/apollo/queries/days.gql'

  export default {
    data() {
      return {
        background: 'http://localhost:1337/uploads/3e7a92aaf85141acb5717342b7b1ac19.png'
      }
    },
    components: {
      Head,
      Schedule, 
      Workouts
    }, 
    apollo: {
      workouts: {
        prefetch: true, 
        query: workoutsQuery
      }, 
      days: {
        prefetch: true, 
        query: daysQuery
      }
    }
  }
</script>
