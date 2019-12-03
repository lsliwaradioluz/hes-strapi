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
      <PersonalTraining :coaches="coaches" :questions="questions" v-if="coaches && questions" />
    </div>
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head'
  import PersonalTraining from '~/components/personal/PersonalTraining'

  import coachesQuery from '~/apollo/queries/coaches/coaches.gql'
  import questionsQuery from '~/apollo/queries/personals/questions.gql'
  import backgroundQuery from '~/apollo/queries/backgrounds/personal.gql'
  
  export default {
    components: {
      Head,
      PersonalTraining,
    },
    apollo: {
      coaches: {
        prefetch: true, 
        query: coachesQuery
      }, 
      questions: {
        prefetch: true, 
        query: questionsQuery
      }, 
      background: {
        prefetch: true, 
        query: backgroundQuery
      }
    }
  }
</script>

<style scoped>

</style>