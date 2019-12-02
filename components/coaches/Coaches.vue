<template>
  <client-only>
    <div class="coaches main">
      <div class="coaches__title header">Nasi trenerzy</div>
      <div class="coaches__container">
        <div class="coach gray" v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.image.url }}
        <div class="coach__image" :style="{ backgroundImage: `url('http://localhost:1337${coach.image.url}')`}"></div>
        <div class="coach__details">
          <div class="coach__details-name">{{ coach.name }}</div>
          <div class="coach__details-workouts">
            <span v-for="(workout, index) in coach.workouts" :key="index">{{ workout.name }} </span>
          </div>
          <font-awesome-icon class="icon" icon="angle-double-down" @click="toggleDescription(coach.id)" :ref="`toggleButton${coach.id}`" />
          <div class="coach__details-description" :ref="`description${coach.id}`">{{ coach.description }}</div>
        </div>
      </div>
      </div>
    </div>
  </client-only>
</template>

<script>

  export default {
    props: ['coaches', 'zone'],
    data() {
      return {
        
      }
    },
    computed: {
      filteredCoaches() {
        const filteredCoaches = this.coaches.filter(element => {
          return element[this.zone] == true;
        });
        return _.shuffle(filteredCoaches);
      }
    },
    methods: {
      toggleDescription(id) {
        this.$refs[`toggleButton${id}`][0].classList.toggle('rotated');
        this.$refs[`description${id}`][0].classList.toggle('toggled');
      }
    }
  }
</script>

<style scoped>

  .coaches__container {
    display: flex;
    flex-direction: column;
  }

  .coach {
    margin: 1rem 0;
    box-shadow: 1px 1px 1px black;
  }

  .coach__image {
    height: 70vw;
    width: 100%;
    background-size: cover;
  }

  .coach__details {
    padding: 1rem;
  }

  .coach__details-name {
    text-align: left;
    text-transform: capitalize;
    font-size: 1.7rem;
    font-weight: 300;
  }

  .coach__details-workouts {
    color: #C20114;
    text-transform: uppercase;
  }

  .icon {
    margin-top: 0.5rem;
    transition: transform 0.5s;
    height: 1.5rem;
    cursor: pointer;
  }

  .coach__details-description {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s;
  }

  .toggled {
    max-height: 500px;
  }

  .rotated {
    transform: rotate(180deg);
  }

  @media (min-width: 768px) {
    .coaches__container {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .coach {
      width: 46%;
      margin-bottom: 3rem;
    }

    .coach__image {
      height: 40vh;
    }

    .coach__details {
      padding: 1.5rem;
    }
  } 

  @media (min-width: 1024px) {
    .coach {
      width: 30%;
    }
  }
</style>