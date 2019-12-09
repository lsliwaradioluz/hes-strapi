<template>
  <div>
    <Head :background="background">
      <template v-slot:section>Treningi</template>
      <template v-slot:subsection>Personalne</template>
    </Head>
    <PersonalTraining :coaches="coaches" :questions="questions" />
  </div>
</template>

<script>
import Head from "~/components/fitness/Head";
import PersonalTraining from "~/components/personal/PersonalTraining"

import personalQuery from "~/apollo/queries/personal/personal.gql"

export default {
  components: {
    Head,
    PersonalTraining
  },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: personalQuery })
      .then(({ data }) => {
        return {
          background: data.background, 
          coaches: data.coaches, 
          questions: data.questions
        }
      });
  },
};
</script>