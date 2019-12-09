<template>
  <div>
    <Head :background="background">
      <template v-slot:section>
        Strefa
      </template>
      <template v-slot:subsection>
        Kids
      </template>
    </Head>
    <Kids :workouts="workouts" :days="days" zone="cross" />
  </div>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Kids from '~/components/kids/Kids'

  import kidsQuery from '~/apollo/queries/kids/kids.gql'
  
  export default {
    components: {
      Head,
      Kids,
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: kidsQuery })
        .then(({ data }) => {
          return {
            background: data.background, 
            days: data.days, 
            workouts: data.workouts
          }
        });
    },
  }
</script>