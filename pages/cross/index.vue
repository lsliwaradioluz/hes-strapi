<template>
  <div>
    <Head>Cross</Head>
    <Workouts :workouts="workouts" zone="cross" />
    <Schedule :days="days" zone="cross" />
    <Coaches :coaches="coaches" zone="cross">
     <template v-slot:subheader>Kim jesteśmy?</template>
     <template v-slot:header>Nasi trenerzy</template>
    </Coaches>
  </div>
</template>

<script>
  import mainQuery from '~/apollo/queries/cross/main.gql'
  
  import Workouts from '~/components/shared/Workouts'
  import Schedule from '~/components/shared/Schedule'
  import Coaches from '~/components/shared/Coaches'

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
            return coach.cross == true;  
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