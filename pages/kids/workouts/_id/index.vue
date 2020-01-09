<template>
  <div>
    <Head>Kids</Head>
    <Workout :workout="workout" :days="days" />
    <Workouts :workouts="workouts" zone="kids">
      <template v-slot:subheader>Nie ta grupa?</template>
      <template v-slot:header>Sprawdź pozostałe zajęcia Kids</template>
    </Workouts>
  </div>
</template>

<script>
  import Workout from '~/components/shared/Workout'
  import Workouts from '~/components/shared/Workouts'

  import workoutQuery from '~/apollo/queries/kids/workout.gql';

  export default {
    components: {
      Workout,
      Workouts
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: workoutQuery, variables: { id: context.route.params.id } })
        .then(({ data }) => {
          // Filtrujemy pobrane workouty, aby nie było wśród nich tego, którego szczegóły akurat wyświetlamy
          const filteredWorkouts = data.workouts.filter(workout => {
            return workout.id !== context.route.params.id && workout.type == 'kids';
          });
          // Tworzymy nowy obiekt data zawierający pobrane ze Strapi dane 
          return {
            workouts: filteredWorkouts, 
            workout: data.workout, 
            days: data.days
          }
        });
    },
  }
</script>

<style scoped>

</style>