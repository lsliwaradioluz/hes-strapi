<template>
  <div>
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer
  },
  mounted () {
    this.wakeDynoUp()
  },
  methods: {
    wakeDynoUp () {
      const endpoint = 'https://hes-backend.herokuapp.com/coaches';
      this.$axios.get(endpoint);
    }
  }
};
</script>
