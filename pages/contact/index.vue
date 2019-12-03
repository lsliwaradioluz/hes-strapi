<template>
  <client-only>
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
  </client-only>
</template>

<script>
  import Head from '~/components/fitness/Head';
  import Contact from '~/components/contact/Contact';

  import backgroundQuery from '~/apollo/queries/backgrounds/fitness.gql';

  export default {
    components: {
      Head,
      Contact,
    },
    apollo: {
      background: {
        prefetch: true, 
        query: backgroundQuery
      }
    }
  }
</script>