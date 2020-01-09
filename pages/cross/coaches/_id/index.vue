<template>
  <div>
    <Head>Cross</Head>
    <Coach :coach="coach" />
    <Coaches :coaches="coaches" zone="cross">
      <template v-slot:subheader>Szukasz kogoś innego?</template>
      <template v-slot:header>Poznaj pozostałych trenerów</template>
    </Coaches>
  </div>
</template>

<script>
  import Coach from '~/components/shared/Coach'
  import Coaches from '~/components/shared/Coaches'
  import coachQuery from '~/apollo/queries/fitness/coach.gql'

  export default {
    components: {
      Coach,
      Coaches
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: coachQuery, variables: { id: context.route.params.id } })
        .then(({ data }) => {
          // Filtrujemy pobranych trenerów, aby nie było wśród nich tego, którego szczegóły akurat wyświetlamy
          const filteredCoaches = data.coaches.filter(coach => {
            return coach.id !== context.route.params.id && coach.cross;
          });
          // Tworzymy nowy obiekt data zawierający pobrane ze Strapi dane 
          return {
            coach: data.coach,
            coaches: filteredCoaches
          }
        });
    },
  }
</script>

<style lang="scss" scoped>

</style>