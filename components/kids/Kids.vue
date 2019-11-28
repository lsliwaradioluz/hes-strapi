<template>
  <client-only>
    <div class="kids main">
      <div class="kids__container">
        <div class="kids__title header">Przez ruch do zdrowia</div>
        <div class="kids__text">
          <p>Nasze dzieci potrzebują odpowiedniej ilości ruchu, by prawidłowo się rozwijać. Z myślą o nich przygotowaliśmy zajęcia Cross w zeskalowanej wersji, dopasowanej do potrzeb naszych pociech. Nie znajdziemy w niej dużych ciężarów. Podstawę stanowią ćwiczenia gimnastyczne i ruchy funkcjonalne - wykonywane prawidłowo pod okiem doświadczonego trenera</p>
          <p>Twoje dziecko będzie skakać, biegać i stać na rękach. Twoje dziecko będzie wiosłować na ergometrze i podciągać się na drążku. Twoje dziecko będzie sprawniejsze od rówieśników na lekcjach wychowania fizycznego. Zapoznaj się z ofertą zajęć Cross dla dzieci. Skorzystajcie z pierwszego, darmowego wejścia i sprawdźcie, czy to propozycja odpowiednia dla Was!</p>
        </div>
      </div>
      <div class="kidzones">
        <div class="kidzone" v-for="workout in filteredWorkouts" :key="workout.id">
          <div class="kidzone__image" :style="{ backgroundImage: `url('http://localhost:1337${workout.image.url}')`}"></div>
          <div class="kidzone__details">
            <div class="kidzone__details-name header">{{ workout.name }}</div>
            <div class="kidzone__details-description" :ref="`description${workout.id}`">{{ workout.description }}</div>
            <div class="kidzone__details-days">{{ workoutTimes(workout.name) }}</div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>

  export default {
    props: ['workouts', 'days', 'zone'], 
    computed: {
      filteredWorkouts() {
        return this.workouts.filter(workout => {
          return workout.type == 'kids';
        })
      },
    }, 
    methods: {
      workoutTimes(name) {
        const workoutDays = [];
        this.days.forEach(cur => {
          const workoutHours = [];
          cur[this.zone].forEach(cur => {
            if (cur.class.name == name) {
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
  }
</script>

<style scoped>

  .kids {
    color: white;
    display: flex;
    flex-direction: column;
  }
  
  .kidzone {
    margin: 2rem 0;
    background-color: #181818;
  }

  .kidzone__image {
    height: 70vw;
    width: 100%;
    background-size: cover;
  }

  .kidzone__details {
    padding: 1rem;
  }

  @media (min-width: 1024px) {

    .kids {
      align-items: center;
    }

    .kids__container {
      width: 40%;
      display: flex;
      flex-direction: column;
    }

    .kidzones {
      display: flex;
      justify-content: space-between;
      padding-top: 6rem;
    }

    .kidzone {
      width: 30%;
    }

    .kidzone__image {
      height: 40vh;
      width: auto;
    }
  }

</style>