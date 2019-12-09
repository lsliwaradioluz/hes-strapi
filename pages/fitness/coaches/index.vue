<template>
  <div>
    <Head :background="background">
      <template v-slot:section>
        fitness
      </template>
      <template v-slot:subsection>
        instruktorzy
      </template>
    </Head>
    <Coaches :coaches="coaches" zone="fitness" />
  </div>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Coaches from '~/components/coaches/Coaches'

  import fitnessCoachesQuery from '~/apollo/queries/fitness/coaches/fitnessCoaches.gql'

  export default {
    components: {
      Head,
      Coaches
    }, 
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: fitnessCoachesQuery })
        .then(({ data }) => {
          return {
            background: data.background, 
            coaches: data.coaches
          }
        });
    },
  }
</script>
