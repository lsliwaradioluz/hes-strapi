<template>
  <client-only>
    <div>
      <Workout :workout="workout" :days="days" zone="cross" v-if="workout && days" />
    </div>
  </client-only>
</template>

<script>
  import Workout from '~/components/fitness/Workout'
  import workoutQuery from '~/apollo/queries/workouts/workout.gql'
  import daysQuery from '~/apollo/queries/days.gql'

  export default {
    layout: 'detailPage',
    components: {
      Workout
    },
    apollo: {
      workout: {
        prefetch: true, 
        query: workoutQuery,
        variables() {
          return { id: this.$route.params.id }
        }
      }, 
      days: {
        prefetch: true, 
        query: daysQuery
      }
    }
  }
</script>

<style scoped>

</style>