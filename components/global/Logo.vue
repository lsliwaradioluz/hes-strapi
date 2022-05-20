<template>
  <nuxt-link
    class="logo"
    to="/"
    @click.native="$emit('clicked')"
  >
    <img
      height="74"
      width="120"
      src="~/assets/images/logo.png"
      alt="hes_logo"
    >
  </nuxt-link>
</template>

<style lang="scss" scoped>
  .logo {
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
</style>