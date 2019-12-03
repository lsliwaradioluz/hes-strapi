<template>
  <div class="memberships main" ref="memberships">
    <div class="membership" v-for="membership in memberships" :key="membership.id">
      <p class="membership__title">{{ membership.name }}</p>
      <ul class="membership__details">
        <li class="membership__detail" v-for="benefit in membership.entries" :key="benefit.entry">{{ benefit.entry }}</li>
      </ul>
      <p class="membership__price">{{ membership.price }}/msc</p>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['memberships'],
    mounted() {
      this.$root.$on('scroll', () => {
        this.$refs.memberships.scrollIntoView({behavior: "smooth"});
      });
    }
  }
</script>

<style scoped>

  .memberships {
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .membership {
    text-align: center;
    color: white;
    margin: 1.5rem 0;
    padding: 1rem 1rem 2rem 1rem;
    border: 1px solid rgba(250, 250, 250, 0.3);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
  }

  .membership::before {
    content: "";
    background-color: rgba(250, 250, 250, 0.3);
    height: 180px;
    width: 1000px;
    position: absolute;
    top: -120px;
    left: -210px;
    transform: rotate(-5deg);
    z-index: 1;
  }

  .membership::after {
    content: "";
    background-color: rgba(250, 250, 250, 0.3);
    position: absolute;
    height: 180px;
    width: 1000px;
    left: -480px;
    top: -210px;
    transform: rotate(106deg);
  }

  .membership:nth-child(2) {
    border-color: rgba(167, 0, 254, 0.3);
  }

  .membership:nth-child(3) {
    border-color: rgba(214, 167, 38, 0.3);
  }

  .membership:nth-child(2)::before,
  .membership:nth-child(2)::after {
    background-color: rgba(167, 0, 254, 0.3);
  }

  .membership:nth-child(3)::before,
  .membership:nth-child(3)::after {
    background-color: rgba(214, 167, 38, 0.3);
  }

  .membership__title {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
    z-index: 2;
  }

  .membership__details {
    padding: 2rem 0;
  }

  .membership__detail {
    list-style: none;
    padding-bottom: 0.5rem;
  }

  .membership__detail::first-letter {
    text-transform: uppercase;
  }

  .membership__price {
    font-size: 3rem;
    margin: 0;
  }

  @media (min-width: 1024px) {

    .memberships {
      flex-direction: row;
      justify-content: space-between;
    }

    .membership {
      width: 33%;
    }
  }
</style>
