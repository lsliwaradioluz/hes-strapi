<template>
  <div>
    <Header />
    <nuxt />
    <Media />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Media from "~/components/Media.vue"
import Footer from "~/components/Footer";

export default {
  components: {
    Header, 
    Media,
    Footer
  }
};
</script>  

<style>
  
</style>