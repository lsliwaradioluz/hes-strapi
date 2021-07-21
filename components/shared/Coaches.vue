<template>
  <div class="coaches main t-black pt0">
    <div>
      <h5 v-if="$slots.subheader">
        <slot name="subheader"></slot>
      </h5>
      <h2 v-if="$slots.header">
        <slot name="header"></slot>
      </h2>
    </div>
    <div class="coaches__container">
      <Carousel :pagination="false" :columns="[[768, 2], [1024, 3]]">
        <div class="coach p11" v-for="coach in coaches" :key="coach.id">
          <div class="coach__content">
            <div class="coach__image" :style="{ backgroundImage: `url('${coach.image && coach.image.url}')`}"></div>
            <div class="coach__description pt1">
              <h5 class="coach__name">{{ coach.name }}</h5>
              <p>{{ coach.description | cutText }}</p>
              <nuxt-link :to="`/${zone}/coaches/${coach.id}`" tag="button" class="button--secondary pl3 pr3 mt1">Więcej</nuxt-link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['coaches', 'zone'],
  }
</script>

<style lang="scss" scoped>

  .coach__image {
    width: 100%;
    padding-top: 120%;
    background-size: cover;
    background-position: center top;
  }

  .coach__name {
    font-size: 1rem;
    text-align: left;
  }
</style>
