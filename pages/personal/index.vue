<template>
  <div>
    <Head>personal training</Head>
    <Personal />
    <Coaches :coaches="coaches" zone="personal" />
    <Questions :questions="questions" />
  </div>
</template>

<script>
import Personal from "~/components/personal/Personal"
import Questions from "~/components/personal/Questions"
import Coaches from '~/components/shared/Coaches'
import mainQuery from "~/apollo/queries/personal/main.gql"

export default {
  components: {
    Personal,
    Coaches,
    Questions
  },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery })
      .then(({ data }) => {
        const filteredCoaches = data.coaches.filter(coach => {
          return coach.personal;
        });
        const shuffledCoaches = _.shuffle(filteredCoaches);
        const shuffledQuestions = _.shuffle(data.questions);

        return {
          coaches: shuffledCoaches,
          questions: shuffledQuestions
        }
      });
  },
};
</script>