<template>
  <div>
    <Head>Kontakt</Head>
    <Contact :footers="footers" />
  </div>
</template>

<script>
  import Contact from '~/components/contact/Contact.vue'
  import mainQuery from '~/apollo/queries/contact/main.gql'

  export default {
    components: {
      Contact,
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: mainQuery })
        .then(({ data }) => {
          const filteredFooters = data.footers.filter(footer => {
            return footer.name == 'Recepcja' || footer.name == 'Menadżer';
          });
          return {
            footers: filteredFooters
          }
        });
    },
  }
</script>