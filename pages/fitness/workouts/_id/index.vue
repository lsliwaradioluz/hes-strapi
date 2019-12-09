<template>
  <div>
    <Workout :workout="workout" :days="days" />
  </div>
</template>

<script>
  import Workout from '~/components/fitness/Workout'

  import fitnessWorkoutQuery from '~/apollo/queries/fitness/workouts/fitnessWorkout.gql';

  export default {
    layout: 'detailPage',
    components: {
      Workout
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: fitnessWorkoutQuery, variables: { id: context.route.params.id } })
        .then(({ data }) => {
          return {
            workout: data.workout, 
            days: data.days
          }
        });
    },
  }
</script>

<style scoped>

</style>