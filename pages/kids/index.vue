<template>
  <client-only>
    <div>
      <Head :background="background">
        <template v-slot:section>
          Strefa
        </template>
        <template v-slot:subsection>
          Kids
        </template>
      </Head>
      <Kids :workouts="workouts" :days="days" zone="cross" v-if="workouts && days" />
    </div>
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Kids from '~/components/kids/Kids'

  import workoutsQuery from '~/apollo/queries/workouts/workouts.gql'
  import daysQuery from '~/apollo/queries/days.gql'
  import backgroundQuery from '~/apollo/queries/backgrounds/kids.gql'
  
  export default {
    components: {
      Head,
      Kids,
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