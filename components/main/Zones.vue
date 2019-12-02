<template>
  <client-only>
    <div class="zones">
      <div class="zone" v-for="zone in zones" :key="zone.id">
        <div class="zone__image" :style="{ backgroundImage: `url('${zone.image.url}')`}"></div>
        <div class="zone__details gray">
          <div class="zone__details-header header">
            {{ zone.header }}
          </div>
          <div class="zone__details-subheader">
            {{ zone.subheader }}
          </div>
          <nuxt-link tag="div" class="zone__details-button button" :to="`/${zone.name}`">
            {{ generateButtonCaption(zone.name) }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>

export default {
  props: ['zones'],
  methods: {
    generateButtonCaption(zone) {
      const zoneLowerCase = zone.toLowerCase();
      switch(zoneLowerCase) {
        case 'gym':
          return 'zapytaj o szczegóły';
          break
        case 'fitness': 
          return 'sprawdź grafik';
          break
        case 'cross':
          return 'Poznaj trenerów';
          break
        case 'kids':
          return 'Dowiedz się więcej';
          break
        case 'personal training':
          return 'Umów się na bezpłatny trening'
      }
    }
  }
}
  
</script>

<style scoped>

  .zones {
    color: white;
    display: flex;
    flex-direction: column;
  }

  .zone {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .zone__image {
    height: 50vw;
    width: 100%;
    background-size: cover;
    background-position: center top;
  }

  .zone__details {
    padding: 2rem;
  }

  .zone__details-subheader {
    margin: 2rem 0;
  }

  @media (min-width: 768px) {

    .main {
      padding-left: 0;
      padding-right: 0;
    }

    .zone {
      flex-direction: row;
      width: 100%;
      height: 80vh;
      overflow: hidden;
    }

    .zone:nth-child(even) {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    .zone__image {
      width: 30%;
      height: 100%;
    }

    .zone__details {
      width: 100%;
      height: 100%;
      padding: 3rem;
    }

    .zone__details-button {
      width: auto;
    }
  }

  @media (min-width: 1024px) {

    .main {
      padding-left: 0;
      padding-right: 0;
    }

    .zone {
      flex-direction: row;
      height: 60vh;
      width: 100%;
    }

    .zone:nth-child(even) {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    .zone__image {
      height: 100%;
      width: 50%;
      flex-shrink: 0;
    }

    .zone__details {
      height: 100%;
      padding: 5rem;
    }

    .zone__details-button {
      width: auto;
    }

  }
</style>
