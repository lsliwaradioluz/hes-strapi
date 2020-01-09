<template>
  <div>
    <Head>Fitness</Head>
    <Workouts :workouts="workouts" zone="fitness" />
    <Schedule :days="days" zone="fitness" />
    <Coaches :coaches="coaches" zone="fitness">
     <template v-slot:subheader>Kim jesteśmy?</template>
     <template v-slot:header>Nasi trenerzy</template>
    </Coaches>
  </div>
</template>

<script>
  import mainQuery from '~/apollo/queries/fitness/main.gql'
  
  import Workouts from '~/components/fitness/Workouts'
  import Schedule from '~/components/fitness/Schedule'
  import Coaches from '~/components/fitness/Coaches'

  export default {
    components: {
      Workouts, 
      Schedule,
      Coaches
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: mainQuery })
        .then(({ data }) => {
          const filteredWorkouts = data.workouts.filter(workout => {
            return workout.zone == context.route.name;
          });
          const filteredCoaches = data.coaches.filter(coach => {
            return coach.fitness == true;  
          });

          return {
            workouts: filteredWorkouts, 
            days: data.days,
            coaches: filteredCoaches
          }
        });
    },
  }
</script>