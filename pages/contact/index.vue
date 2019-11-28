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

  export default {
    components: {
      Head,
      Contact,
    },
    data() {
      return {
        background: 'http://localhost:1337/uploads/3e7a92aaf85141acb5717342b7b1ac19.png'
      }
    }
  }
</script>