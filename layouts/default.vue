<template>
  <div>
    <Header />
    <nuxt />
    <Media />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Media from "~/components/Media.vue"
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header, 
    Media,
    Footer
  }
};
</script>  

<style>
  @import url('https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap');
    
html, body {
  font-family: 'Oswald', sans-serif;
}
</style>