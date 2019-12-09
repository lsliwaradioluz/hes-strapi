<template>
  <div>
    <Workout :workout="workout" :days="days" zone="cross" />
  </div>
</template>

<script>
  import Workout from '~/components/fitness/Workout'
  import crossWorkoutQuery from '~/apollo/queries/cross/workouts/crossWorkout.gql';

  export default {
    layout: 'detailPage',
    components: {
      Workout
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: crossWorkoutQuery, variables: { id: context.route.params.id } })
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