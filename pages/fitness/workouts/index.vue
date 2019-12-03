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
  import backgroundQuery from '~/apollo/queries/backgrounds/fitness.gql'

  export default {
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
      }, 
      background: {
        prefetch: true, 
        query: backgroundQuery
      }
    }
  }
</script>
