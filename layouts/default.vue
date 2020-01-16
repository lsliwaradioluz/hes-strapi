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
  }
};
</script>  

<style>
  html, body {
    margin: 0;
    font-family: 'Exo 2', sans-serif;
    overflow-x: hidden;
    color: #FDFFFC;
    font-weight: 400;
    line-height: 1.6;
  }
</style>