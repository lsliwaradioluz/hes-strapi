<template>
  <client-only>
    <div>
      <Head :background="background">
        <template v-slot:section>
          cross
        </template>
        <template v-slot:subsection>
          trenerzy
        </template>
      </Head>
      <Coaches :coaches="coaches" zone="cross" v-if="coaches" />
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
        background: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
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
