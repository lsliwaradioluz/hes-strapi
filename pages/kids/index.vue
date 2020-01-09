<template>
  <div>
    <Head>Kids</Head>
    <Kids :zone="zone" />
    <Workouts :workouts="workouts" zone="kids" />
    <Schedule :days="days" zone="cross" kids>
      <template v-slot:subheader>Wypatruj żółtego!</template>
      <template v-slot:header>Grafik zajęć</template>
    </Schedule>
  </div>
</template>

<script>
  import mainQuery from '~/apollo/queries/kids/main.gql'
  
  import Kids from '~/components/kids/Kids'
  import Workouts from '~/components/shared/Workouts'
  import Schedule from '~/components/shared/Schedule'

  export default {
    components: {
      Kids,
      Workouts, 
      Schedule,
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: mainQuery })
        .then(({ data }) => {
          const filteredWorkouts = data.workouts.filter(workout => {
            return workout.type == 'kids';
          });
          const kidzone = data.zones.filter(zone => {
            return zone.name == 'kids';
          });

          return {
            workouts: filteredWorkouts,
            days: data.days, 
            zone: kidzone[0]
          }
        });
    },
  }
</script>