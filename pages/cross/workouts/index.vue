<template>
  <div>
    <Head :background="background">
      <template v-slot:section>
        cross
      </template>
      <template v-slot:subsection>
        Zajęcia
      </template>
    </Head>
    <Workouts :workouts="workouts" zone="cross" />
    <Schedule :days="days" zone="cross" /> 
  </div>   
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Schedule from '~/components/fitness/Schedule'
  import Workouts from '~/components/fitness/Workouts'  

  import crossWorkoutsQuery from '~/apollo/queries/cross/workouts/crossWorkouts.gql'

  export default {
    components: {
      Head,
      Schedule, 
      Workouts
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: crossWorkoutsQuery })
        .then(({ data }) => {
          return {
            background: data.background, 
            workouts: data.workouts, 
            days: data.days
          }
        });
    }
  }
</script>
