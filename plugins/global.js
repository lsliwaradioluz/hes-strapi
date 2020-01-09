import Vue from 'vue'
import Head from '~/components/global/Head.vue'
import Carousel from '~/components/global/Carousel.vue'

// Components 

Vue.component('Head', Head);
Vue.component('Carousel', Carousel);

// Filters 

Vue.filter('cutText', (value) => {
  if (value.length > 100) {
    let slicedValue = value.slice(0, 100);
    slicedValue += '...';
    return slicedValue;
  }
});
