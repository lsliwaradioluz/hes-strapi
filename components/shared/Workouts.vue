<template>
  <div class="workouts main pb0 t-black">
    <div>
      <h5 v-if="$slots.subheader">
        <slot name="subheader"></slot>
      </h5>
      <h2 v-if="$slots.header">
        <slot name="header"></slot>
      </h2>
    </div>
    <div class="workouts__container">
      <Carousel :pagination="false" :columns="[[768, 2], [1024, 3]]">
        <div class="workout p01 row a-stretch" v-for="workout in workouts" :key="workout.id">
          <div class="workout__content column a-start j-center b-black t-gray p22">
            <h5 class="t-left">{{ workout.type }}</h5>
            <h3>{{ workout.name }}</h3>
            <p>{{ workout.description | cutText }}</p>
            <nuxt-link :to="`/${zone}/workouts/${workout.id}`" tag="button" class="button--secondary pl3 pr3 mt15">Więcej</nuxt-link>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['workouts', 'zone'],
  }
</script>

<style lang="scss" scoped>
</style>