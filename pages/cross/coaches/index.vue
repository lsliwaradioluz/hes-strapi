<template>
  <div>
    <Head :background="background">
      <template v-slot:section>
        cross
      </template>
      <template v-slot:subsection>
        trenerzy
      </template>
    </Head>
    <Coaches :coaches="coaches" zone="cross" />
  </div>  
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Coaches from '~/components/coaches/Coaches'

  import crossCoachesQuery from '~/apollo/queries/cross/coaches/crossCoaches.gql'

  export default {
    components: {
      Head,
      Coaches
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: crossCoachesQuery })
        .then(({ data }) => {
          return {
            background: data.background, 
            coaches: data.coaches
          }
        });
    },
  }
</script>
