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
          :key="workout.id + index"
          :style="{ backgroundImage: `url('${setBackground(workout.type)}')` }">
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
            return 'http://localhost:1337/uploads/e098659306534604b994715a735be7e2.svg';
            break
          case 'cardio':
            return 'http://localhost:1337/uploads/53fb6729922a45179e940d116f22e4cc.svg';
            break
          case 'mental':
            return 'http://localhost:1337/uploads/170ee6bf6ba64c90946e9a9a27ac40a9.svg';
            break
          case 'beginners':
            return 'http://localhost:1337/uploads/5a586b682122452b99833b104de07818.svg';
            break
          case 'intro':
            return 'http://localhost:1337/uploads/43c49cafe8dc420d9c93804c43855107.svg';
            break
          case 'advanced':
            return 'http://localhost:1337/uploads/6b4b9c7508c442e384bae89b6c44f49a.svg';
            break
          case 'kids':
            return 'http://localhost:1337/uploads/8433532643dc4893954221f40cbad770.svg'; 
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
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: center center;
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