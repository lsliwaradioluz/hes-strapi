<template>
  <div>
    <Head :background="background">
      <template v-slot:section>
          kontakt
        </template>
        <template v-slot:subsection>
        </template>
    </Head>
    <div class="contact">
      <Contact />
    </div>
  </div>
</template>

<script>
  import Head from '~/components/fitness/Head';
  import Contact from '~/components/contact/Contact';

  import contactQuery from '~/apollo/queries/contact/contactQuery.gql';

  export default {
    components: {
      Head,
      Contact,
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: contactQuery })
        .then(({ data }) => {
          return {
            background: data.background
          }
        });
    }
  }
</script>