<template>
  <client-only>
    <div class="workouts main">
      <div class="workouts__tabs" ref="tabs" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchmove="onMouseEnter">
        <div
          is="nuxt-link"
          :to="{ name: `${zone}-workouts-id`, params: { id: workout.id }, query: { zone: zone }}"
          tag="div" 
          class="workouts__tab" 
          ref="tab"
          v-for="(workout, index) in filteredWorkouts" 
          :key="workout.id + index">
          <div class="workouts__tab-icon">
            <i :class="`flaticon-${setBackground(workout.type)}`"></i>
          </div>
          <h3 class="workouts__tab-header">
            {{ workout.name }}
          </h3>
          <p class="workouts__tab-subheader text-red" v-if="zone == 'fitness'">
            {{ workout.type }}
          </p>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>

  export default {
    props: ['workouts', 'zone'],
    data() {
      return {
        current: 0,
        dragStart: null, 
        dragEnd: null, 
        dragDistance: 0, 
        scroll: 0, 
        scrollInterval: null
      }
    },
    computed: {
      filteredWorkouts() {
        return this.workouts.filter(workout => {
          return workout.zone == this.zone.toLowerCase();
        });
      }
    },
    methods: {
      parseClassName(name) {
        const clearName = name.replace('/', '').replace(' ', '');
        return `workouts/${clearName}`;
      }, 
      setBackground(type) {
        switch(type) {
          case 'wzmacnianie':
            return 'weightlifting';
            break
          case 'cardio':
            return 'running';
            break
          case 'mental':
            return 'workout';
            break
          case 'beginners':
            return 'gym';
            break
          case 'intro':
            return 'gym-1';
            break
          case 'advanced':
            return 'gymnast';
            break
          case 'kids':
            return 'child'; 
        }
      }, 
      slideworkouts() {
        if (window.innerWidth < 768) {
          this.scrollInterval = setInterval(() => {
            this.$refs.tabs.scrollLeft += 1;
          }, 30);
        }
      },
      onMouseEnter() {
        clearInterval(this.scrollInterval);
        this.dragStart = event.clientX;
        this.$refs.tabs.addEventListener('mousemove', this.onMouseMove );
        this.scroll = this.$refs.tabs.scrollLeft;
      }, 
      onMouseMove() {
        this.dragEnd = event.clientX;
        this.dragDistance = this.dragEnd - this.dragStart;
        this.$refs.tabs.scrollLeft = this.scroll - this.dragDistance; 
      },
      onMouseLeave() {
        event.target.removeEventListener('mousemove', this.onMouseMove, false);
        this.dragStart = null;
        this.dragEnd = null;
        this.currentTranslate += this.dragDistance;
        this.scroll = this.$refs.tabs.scrollLeft;
      }
    },
    mounted() {
      this.slideworkouts();
    },
    destroyed() {
      clearInterval(this.scrollInterval);
    }
  }
</script>

<style scoped>

  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  .workouts {
    background-color: black;
    color: white;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    height: 50vh;
  }

  .workouts__tabs {
    display: flex;
    overflow-x: scroll;
    position: absolute;
    width: 94vw;
    right: 3vw;
  }

  .workouts__tab {
    padding: 1rem;
    height: 80vw;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
  }

  .workouts__tab-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
  }

  .workouts__tab:last-child {
    grid-column: 1 / -1;
  }

  .workouts__tab::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 10rem;
    background-color: white;
    left: -50%;
    bottom: -20%;
    z-index: 1;
    transform: translateY(100%) rotate(15deg);
    transition: transform 0.3s;
  }

  .workouts__tab:hover {
    color: black;
  }

  .workouts__tab:hover::after {
    transform: translateY(0) rotate(15deg);
  }

  .workouts__tab:hover .workouts__tab-subheader {
    max-height: 500px;
  }

  .workouts__tab-header {
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    z-index: 2;
  }

  .workouts__tab-subheader {
    margin: 0;
    max-height: 0;
    transition: max-height 0.3s;
    overflow: hidden;
    z-index: 3;
    text-transform: uppercase;
  }
  

  @media (min-width: 768px) {

    .workouts__tab {
      height: 15rem;
      width: 25%;
    }
  }

  @media (min-width: 1024px) {

    .workouts__tabs {
      width: 88vw;
      right: 6vw;
    }

    .workouts__tab {
      height: 20vw;
    }
  }
</style>