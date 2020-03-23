<template>
  <div class="coach main t-lightblack">
    <h2>{{ coach.name }}</h2>
    <div class="coach__container p11 column">
      <div class="coach__details b-gray p22">
        <h5 class="t-left">Zajęcia</h5>
        <p class="m00" v-for="workout in coach.workouts" :key="workout.id">{{ workout.name }}</p>
      </div> 
      <div class="coach__image m20" :style="{ 'background-image': `url('${coach.image.url}')`}"></div>  
      <div class="coach__description b-gray p22 ">
        <h5 class="t-left">Poznaj mnie bliżej</h5>
        <p>{{ coach.description }}</p>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  props: ['coach']
}
</script>

<style lang="scss" scoped>

  .coach__image {
    width: 100%;
    padding-top: 120%;
    background-size: cover;
    background-position: top;
  }

  @media (min-width: 1024px) {

    .coach__image  {
      padding: 0;
      margin: 0;
    }

    .coach__container {
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;

      div {
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>