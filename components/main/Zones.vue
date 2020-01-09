<template>
  <div class="zones column pt1 pb1">
    <div class="zone row a-stretch p11" v-for="zone in zones" :key="zone.id">
      <div class="zone__content p22">
        <h5 class="t-left">{{ zone.name }}</h5>
        <h3>{{ zone.header }}</h3>
        <p class="t-gray mb15">{{ zone.subheader }}</p>
        <nuxt-link :to="generateButtonLink(zone.name)" tag="button" class="button--secondary">Więcej</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['zones'],
  methods: {
    generateButtonLink(zone) {
      const zoneLowerCase = zone.toLowerCase();
      switch(zoneLowerCase) {
        case 'gym':
          return 'contact';
          break
        case 'fitness': 
          return 'fitness';
          break
        case 'cross':
          return 'cross/coaches';
          break
        case 'kids':
          return 'kids';
          break
        case 'personal training':
          return 'personal'
      }
    }
  }
}
  
</script>

<style lang="scss" scoped>

  .zones {
    background-position: center;
    background-image: linear-gradient(rgba(22,21,21, 0.85), rgba(22,21,21, 0.85)), 
                      url('~assets/images/zones.jpg');
  }

  .zone__content {
    border: 2px solid color(gold);
  }

  @media (min-width: 1024px) {
    .zones {
      flex-direction: row;
      flex-wrap: wrap;
      background-size: cover;
    }

    .zone {
      flex-basis: calc(100% / 3);
    }
  }
  
</style>
