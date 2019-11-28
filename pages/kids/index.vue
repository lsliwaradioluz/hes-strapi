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
  
  export default {
    components: {
      Head,
      Kids,
    }, 
    data() {
      return {
        background: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
      }
    }, 
    apollo: {
      workouts: {
        prefetch: true, 
        query: workoutsQuery
      }, 
      days: {
        prefetch: true, 
        query: daysQuery
      }
    }
  }
</script>