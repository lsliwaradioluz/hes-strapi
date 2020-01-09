<template>
  <div class="schedule main">
    <div>
      <h5><slot name="subheader">Zaplanuj swój tydzień</slot></h5>
      <h2><slot name="header">Grafik zajęć</slot></h2>
    </div>
    <div class="schedule__buttons" @click="filterWorkouts">
      <button class="button--secondary" :class="{ 'button-active': filter == ''}" name="">wszystkie</button>
      <button class="button--secondary" :class="{ 'button-active': filter == filtername}" :name="filtername" v-for="(filtername, index) in workoutFilters" :key="index" @click="filterWorkouts">{{ filtername | reverseName }}</button>
    </div>
    <div class="schedule__container">
      <table>
        <thead class="b-blue">
          <tr>
            <th></th>
            <th v-for="day in days" :key="day.id">{{ day.name }}</th>
          </tr>
        </thead>
        <tbody is="transition-group" name="flip-list">
          <tr v-for="(hour, index) in hours" :key="index">
            <td>{{ hour[0]}}:{{ hour[1] | addZero }} </td>
            <td class="b-black" v-for="(day, index) in days" :key="index">
              <p
                class="m00"
                :class="{ 't-yellow': workout.type == 'kids' && kids }"
                v-for="(workout, index) in getWorkoutsByDay(index, hour[0], hour[1])" 
                :key="index">{{ workout.name }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      days: Array, 
      zone: String, 
      kids: Boolean
    },
    data() {
      return {
        filter: ''
      }
    }, 
    computed: {
      hours() {
        const allHours = [];
        this.days.forEach(cur => {
          cur[this.zone].forEach(cur => {
            if (cur.class.type == this.filter || cur.class.time == this.filter || this.filter == '') {
              allHours.push([cur.hours, cur.minutes]);
            }
          });
        });

        const uniqueHours = _.uniqBy(allHours, function(item) { 
          return JSON.stringify(item); 
        });
        const sortedHours = uniqueHours.sort((a, b) => {
          return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
        });

        return sortedHours;
      }, 
      workoutFilters() {
        const workoutFilters = [];
        this.days.forEach(cur => {
          cur[this.zone].forEach(cur => {
            this.zone == 'fitness' ? workoutFilters.push(cur.class.type, cur.class.time) : workoutFilters.push(cur.class.type);
          });
        });
        return _.union(workoutFilters);
      }
    },
    methods: {
      getWorkoutsByDay(index, hours, minutes) {
        let workouts = [];
        this.days[index][this.zone].forEach(cur => {
          if (cur.hours == hours && cur.minutes == minutes) {
              workouts.push(cur.class);
            }
        });
        const filteredWorkouts = workouts.filter(workout => {
          return workout.type == this.filter || workout.time == this.filter || this.filter == '';
        })
        return filteredWorkouts;        
      }, 
      filterWorkouts() {
        if (event.target.classList.contains('button--secondary')) {
          this.filter = event.target.getAttribute('name');
        }
      }
    },
    filters: {
      addZero(value) {
        return value == 0 ? '00' : value;
      }, 
      reverseName(value) {
        const number = value.slice(3);
        const min = value.slice(0, 3);
        return min == 'min' ? number + min : min + number;
      } 
    }
  }
</script>

<style lang="scss" scoped>

  .schedule__buttons {
    display: none;
  }

  .schedule__container {
    overflow-x: scroll;
    overflow-y: hidden;
  }

  table {
    width: 100%;
    border-spacing: 2px 2px;
  }

  thead {
    th {
      padding: 0.5rem;
    }
  }

  td {
    padding: 1rem;
    text-align: center;
  }

  tbody tr td:first-child,
  thead tr th:first-child {
    background-color: color(darkblue);
    position: sticky;
    left: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 5.5%;
  }

  @media (min-width: 1024px) {

    .schedule__container {
      overflow: hidden;
    }
    
    .schedule__buttons {
      display: flex;
      margin: 3rem 0;
      justify-content: flex-end;
    }

    .schedule__buttons button {
      padding: 0.5rem;
      width: auto;
      margin-left: 0.5rem;
    }

    .button-active {
      background-color: white;
      color: color(darkblue);

      &::after {
        background-color: color(darkblue);
      }
    }
  }
</style>