<template>
  <div class="memberships main">
    <div>
      <h5>Członkostwo</h5>
      <h2>Wybierz swoją strefę</h2>
    </div>
    <div class="memberships__container column p11">
      <div class="membership column a-center mb2 p33 pr2 pl2 b-gray" :class="{ 'membership--blue': membership.name == 'Cross' }" v-for="membership in memberships" :key="membership.id">
        <h5 class="mb0">{{ membership.name }}</h5>
        <h5 class="t-black mb0">Cena za miesiąc</h5>
        <h1 class="t-centered t-black m20">{{ membership.price }}zł</h1>
        <p class="t-gray t-centered mt0">{{ membership.description }}</p>
        <nuxt-link to="/contact" tag="button" class="button--secondary mt2" :class="{ 'button--white': membership.name == 'Cross' }">Wybierz</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['memberships'],
  }
</script>

<style lang="scss" scoped>

  .membership--blue {
    background-color: color(darkblue);

    h5, h1 {
      color: white;
    }

    p {
      color: color(blue);
    }
  }

  @media (min-width: 1024px) {
    .memberships__container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .membership {
      flex-basis: 30%;

      button {
        padding-right: 3rem;
        padding-left: 3rem;
      }
    }
  }

</style>
