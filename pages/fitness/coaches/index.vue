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

  export default {
    data() {
      return {
        background: 'http://localhost:1337/uploads/3e7a92aaf85141acb5717342b7b1ac19.png'
      }
    },
    components: {
      Head,
      Coaches
    }, 
    apollo: {
      coaches: {
        prefetch: true, 
        query: coachesQuery
      }
    }
  }
</script>
