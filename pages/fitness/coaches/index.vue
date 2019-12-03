<template>
  <client-only>
    <div>
      <Head :background="background">
        <template v-slot:section>
          fitness
        </template>
        <template v-slot:subsection>
          instruktorzy
        </template>
      </Head>
      <Coaches :coaches="coaches" zone="fitness" v-if="coaches" />
    </div>   
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import Coaches from '~/components/coaches/Coaches'

  import coachesQuery from '~/apollo/queries/coaches/coaches.gql'
  import backgroundQuery from '~/apollo/queries/backgrounds/fitness.gql'

  export default {
    components: {
      Head,
      Coaches
    }, 
    apollo: {
      coaches: {
        prefetch: true, 
        query: coachesQuery
      },
      background: {
        prefetch: true, 
        query: backgroundQuery
      }
    }
  }
</script>
