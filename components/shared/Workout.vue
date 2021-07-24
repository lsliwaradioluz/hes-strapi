<template>
  <div class="workout main pb0 t-lightblack">
    <h2>{{ workout.name }}</h2>
    <div class="workout__container p11 column">
      <div class="workout__details b-gray p22">
        <h5>Typ</h5>
        <p>{{ workout.type }}</p>
        <h5>Czas trwania</h5>
        <p>{{ workoutDuration }}</p>
        <div v-if="zone == 'fitness'">
          <h5>Kiedy?</h5>
          <p v-for="time in workoutTimes" :key="time.id">
            {{ time.name }}
            <span v-for="hour in time.time" :key="hour.id"> {{ hour }}</span>
          </p>
        </div>
        <h5>Trenerzy</h5>
        <p v-for="coach in workout.coaches" :key="coach.id">{{ coach.name }}</p>
      </div>
      <div class="workout__image m20" :style="{ 'background-image': `url('${workout.image && workout.image.url}')`}"></div>
      <div class="workout__description b-gray p22 ">
        <h5>Co to takiego?</h5>
        <p>{{ workout.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['workout', 'days'],
  computed: {
    zone() {
      let zone = this.$route.name.split('-');
      return zone[0];
    },
    workoutDuration() {
      if (this.workout.time == 'min60') {
        return '60 minut'
      } else if (this.workout.time == 'min30') {
        return '30 minut'
      } else if (this.workout.time == 'min45') {
        return '45 minut'
      }
    },
    workoutTimes() {
      const workoutDays = [];
      this.days.forEach(cur => {
        const workoutHours = [];
        cur[this.zone].forEach(cur => {
          if (cur.class.name == this.workout.name) {
            let minutes;
            cur.minutes == 0 ? minutes = '00' : minutes = cur.minutes;
            workoutHours.push(`${cur.hours}:${minutes}`);
          }
        });
        if (workoutHours.length > 0) workoutDays.push({ name: cur.name, time: workoutHours })
      });
      return workoutDays;
    },
  }
};
</script>

<style lang="scss" scoped>

  .workout__container {
    p {
      margin: 0;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    h5 {
      text-align: left;
      margin: 0.5rem 0 0 0;
      &:first-child {
        margin: 0;
      }
    }
  }

  .workout__image {
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 1024px) {

    .workout__image  {
      padding: 0;
      margin: 0;
    }

    .workout__container {
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
