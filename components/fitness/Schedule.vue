<template>
  <client-only>
    <div class="schedule main">
      <div class="schedule__buttons" @click="filterWorkouts">
        <button class="button button-active" name="">wszystkie</button>
        <button v-for="filter in workoutFilters" class="button" :name="filter">{{ filter | reverseName }}</button>
      </div>
      <div class="schedule__table-container">
        <table class="schedule__table">
          <thead class="schedule__table-headers">
            <tr>
              <th class="empty-header"></th>
              <th class="schedule__table-header" v-for="day in days" :key="day.id">{{ day.name }}</th>
            </tr>
          </thead>
            <tbody class="schedule__table-body" is="transition-group" name="flip-list">
              <tr 
                class="schedule__table-body__row"
                v-for="hour in hours" 
                :key="`${hour[0]}${hour[1]}`">
                <td class="schedule__table-body__row-data">{{ hour[0]}}:{{ hour[1] | addZero }} </td>
                <td class="schedule__table-body__row-data" v-for="(cls, index) in iterateOverClasses(hour[0], hour[1])" :key="`cls${index}`">
                  <span 
                    v-for="(c, index) in cls" 
                    :key="`c${index}`" 
                    v-show="c.type == filter || c.time == filter || filter == ''">{{ c.name }}</span>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  </client-only>
</template>

<script>

  export default {
    props: ['days', 'zone'],
    data() {
      return {
        filter: ''
      }
    }, 
    computed: {
      hours() {
        const fetchedClasses = [];
        if (this.days.length > 0) {
          this.days.forEach(cur => {
            const fetchedHours = [];
            cur[this.zone].forEach(cur => {
              if (cur.class.type == this.filter || cur.class.time == this.filter || this.filter == '') {
                fetchedHours.push([cur.hours, cur.minutes]);
              }
            });
            fetchedClasses.push(...fetchedHours);
          });
        }

        const uniqueHours = _.union(fetchedClasses);
        const sortedHours = uniqueHours.sort((a, b) => {
          if (a[0] !== b[0]) {
            return a[0] - b[0];            
          } else {
            return a[1] - b[1];
          }
        });

        return sortedHours;
      }, 
      workoutFilters() {
        let workoutFilters = [];
        this.days.forEach(cur => {
          const filters = [];
          cur[this.zone].forEach(cur => {
            this.zone == 'Fitness' ? filters.push(cur.class.type, cur.class.time) : filters.push(cur.class.type);
          })
          workoutFilters.push(...filters);
        });
        return _.union(workoutFilters);
      }
    },
    methods: {
      iterateOverClasses(hours, minutes) {
        let names = [];
        let eachDayClasses = []
        this.days.forEach(cur => {
          eachDayClasses.push(cur[this.zone]);
        }); 
        
        eachDayClasses.forEach(cur => {
          const fetchedNames = [];
          cur.forEach(cur => {
            if (cur.hours == hours && cur.minutes == minutes) {
              fetchedNames.push(cur.class);
            }
          });
          names.push(fetchedNames);
        }); 
        return names;        
      }, 
      filterWorkouts() {
        if (event.target.classList.contains('button')) {
          const attribute = event.target.getAttribute('name');
          this.filter = attribute;
          for (let item of event.target.parentElement.children) {
            item.classList.remove('button-active');
          }
          event.target.classList.toggle('button-active');
        }
      }
    },
    filters: {
      addZero(value) {
        return value == 0 ? '00' : value;
      }, 
      reverseName(value) {
        if (value == 'min30') {
          return '30min'
        } else if (value == 'min60') {
          return '60min'
        } else {
          return value
        }
      } 
    }
  }
</script>

<style scoped>

  .schedule {
    background-color: black;
    color: white;
    padding-bottom: 6rem;
  }

  .schedule__buttons {
    display: none;
  }

  .schedule__table-container {
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .schedule__table {
    width: 100%;
    border-spacing: 2px 0;
  }

  .schedule__table-header {
    text-transform: uppercase;
    padding: 5px 0;
  }

  .schedule__table-body {
    text-transform: capitalize;
  }

  .schedule__table-body__row-data,
  .schedule__table-header {
    text-align: center;
    padding: 0.5rem;
    height: 3rem;
    transition: background-color 0.3s;
    width: 13.5%;
  }

   .schedule__table-body__row:nth-child(odd) {
    background-color: #323232;
  }

  .schedule__table-body__row:nth-child(even) {
    background-color: black;
  }

  .schedule__table-body__row-data:first-child,
  .empty-header {
    position: sticky;
    left: 0;
    background-color: inherit;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 5.5%;
  }

  .empty-header {
    background-color: black;
  }

  .schedule__table-body__row-data span {
    display: block;
  }

  @media (min-width: 1024px) {
    
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

  }
</style>