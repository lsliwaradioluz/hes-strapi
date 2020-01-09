<template>
  <div class="head row j-center a-center main t-centered">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  
  .head {
    background-size: cover;
    background-position: center;
    height: 15rem;
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('~assets/images/barbell.jpg');
  }

  .head h1 {
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    .head {
      height: 25rem;
    }
  }
</style>