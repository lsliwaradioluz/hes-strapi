<template>
  <div class="kids main pb0">
    <div class="kids__header">
      <h5>Skacz, rzucaj, biegaj</h5>
      <h2>Cross nie tylko dla dorosłych</h2>
    </div>
    <div class="kids__container column a-center p11 t-centered t-lightblack">
      <p>{{ zone.subheader }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['zone']
}
</script>

<style lang="scss" scoped>

  @media (min-width: 768px) {
    .kids__container,
    .kids__header {
      width: 50%;
      margin: 0 auto;
    }
  }
</style>