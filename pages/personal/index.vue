<template>
  <client-only>
    <div>
      <Head :background="background">
        <template v-slot:section>
          Treningi
        </template>
        <template v-slot:subsection>
          Personalne
        </template>
      </Head>
      <PersonalTraining :coaches="coaches" v-if="coaches" />
    </div>
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import PersonalTraining from '~/components/personal/PersonalTraining'

  import coachesQuery from '~/apollo/queries/personals/coaches.gql'
  
  export default {
    components: {
      Head,
      PersonalTraining,
    },
    data() {
      return {
        background: 'http://localhost:1337/uploads/242500bade134965b3b9591be06b36a1.jpg'
      }
    }, 
    apollo: {
      coaches: {
        prefetch: true, 
        query: coachesQuery
      }
    }
  }
</script>

<style scoped>

</style>