<template>
  <div>
    <Head :background="background">
      <template v-slot:section>
        fitness
      </template>
      <template v-slot:subsection>
        Zajęcia
      </template>
    </Head>
    <Workouts :workouts="workouts" zone="fitness" />
    <Schedule :days="days" zone="fitness" /> 
  </div>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Schedule from '~/components/fitness/Schedule'
  import Workouts from '~/components/fitness/Workouts'
  
  import fitnessWorkoutsQuery from '~/apollo/queries/fitness/workouts/fitnessWorkouts.gql'

  export default {
    components: {
      Head,
      Schedule, 
      Workouts
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: fitnessWorkoutsQuery })
        .then(({ data }) => {
          return {
            background: data.background, 
            workouts: data.workouts, 
            days: data.days
          }
        });
    },
  }
</script>
