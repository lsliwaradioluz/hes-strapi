<template>
  <div class="abouts main">
    <div>
      <h5>O nas</h5>
      <h2>Mamy licencję na zdrowie</h2>
    </div>
    <div class="abouts__container column">
      <div class="about p11 column a-center t-lightblack t-centered" v-for="facility in facilities" :key="facility.id">
        <div class="about__image mb2" :style="{ backgroundImage: `url('${facility.image.url}')`}"></div>
        <h4 class="t-blue mb05">{{ facility.header }}</h4>
        <p>{{ facility.subheader }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['facilities'],
}
</script>

<style lang="scss" scoped>

  .about {
    max-width: 340px;
  }

  .about__image {
    width: 70%;
    padding-top: 70%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
    .abouts__container {
      flex-direction: row;
      justify-content: space-between;
    }

    .about {
      flex-basis: 33%;
      flex-shrink: 0;
    }
  }
</style>
