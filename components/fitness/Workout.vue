<template>
  <client-only>
    <div class="workout">
      <div class="workout__background" :style="{ backgroundImage: `url('${workout.image.url}')` }"></div>
      <div class="workout__details main">
        <div class="workout__details-header">{{ workout.name }}</div>
        <div class="workout__details-subheader red">
          {{ subheader }}
        </div>
        <div class="workout__details-days red" v-if="zone == 'fitness'">
          <span v-for="(time, index) in workoutTimes">{{ time.name | shortDayName }}<span v-for="hour in time.time"> {{ hour }}</span>&nbsp;</span>
        </div>     
        <div class="workout__details-description">{{ workout.description }}</div>
        <div class="workout__details-buttons">
          <a class="button" name="min30" href="https://wod.guru/guest-registration-form/lesnica" target="_blank">Zapisz się</a>
          <nuxt-link :to="`/${zone}/workouts`" tag="button" class="button">Wróć</nuxt-link>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  props: ['workout', 'days'],
  data() {
    return {
      zone: this.$route.query.zone
    }
  },
  computed: {
    subheader() {
      return this.zone == 'cross' ? this.workoutTime : `${this.workout.type} / ${this.workoutTime}`;
    },
    workoutTime() {
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
  }, 
  filters: {
    shortDayName(value) {
      switch(value) {
        case 'Poniedziałek':
          return 'pon'
          break;
        case 'Wtorek':
          return 'wt'
          break;
        case 'Środa':
          return 'śr'
          break;
        case 'Czwartek':
          return 'czw'
          break;
        case 'Piątek':
          return 'pt'
          break;
        case 'Sobota':
          return 'sob'
          break;
        case 'Niedziela': 
          return 'nd'
      }
    }
  }
};
</script>

<style scoped>

  .workout {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
  }

  .workout__background {
    height: 30vh;
    width: 100%;
    background-size: cover;
  }

  .workout__details {
    background-color: black;
    text-align: center;
  }

  .workout__details-header {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .workout__details-subheader {
    padding-top: 1rem;
    text-transform: uppercase;
  }

  .workout__details-days {
    text-transform: uppercase;
  }

  .workout__details-days > span {
    white-space: nowrap;
    display: inline-block;
  }

  .workout__details-description {
    padding: 2rem 0;
    text-align: justify;
  }

  .workout__details-buttons {
    display: flex;
    flex-direction: column;
  }

  .workout__details-buttons .button {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .workout {
      flex-direction: row;
    }

    .workout__background {
      min-height: 100vh;
      width: 40%;
      background-size: cover;
      background-position: center;
    }

    .workout__details {
      width: 60%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }

    .workout__details-header,
    .workout__details-subheader,
    .workout__details-description,
    .workout__details-days,
    .workout__details-buttons {
      width: 100%;
    }

    .workout__details-subheader,
    .workout__details-days {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0;
    }

    .workout__details-description {
      padding: 1rem 0 3rem 0;
      font-size: 1.2rem;
    }

    .workout__details-buttons {
      flex-direction: row;
      justify-content: space-between;
    }

    .workout__details-buttons .button {
      width: 49%;
    }
  }
</style>