<template>
  <div class="landing main row a-center j-start">
    <picture class="landing__image">
      <source media="(max-width:500px)" :srcset="image_mobile">
      <img :src="image_desktop">
    </picture>
    <transition name="fade" mode="out-in">
      <div class="landing__content column a-start j-center" :key="current">
        <h1>{{ currentInfo.header }}</h1>
        <p>{{ currentInfo.subheader }}</p>
        <a :href="currentInfo.link" target="_blank" v-if="currentInfo.link"><button class="button--primary mt1">Szczegóły</button></a>
      </div>
    </transition>
    <div class="landing__dots p11 row j-center">
      <div 
        class="landing__dot"
        :class="{'active': current == n-1 }" 
        v-for="n in infos.length" 
        :key="n"
        @click="switchInfo(n)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['infos'],
    data() {
      return {
        current: 0, 
        interval: null
      }
    }, 
    computed: {
      currentInfo() {
        return this.infos[this.current];
      },
      image_mobile() {
        return this.currentInfo.image_mobile?.url
      },
      image_desktop() {
        return this.currentInfo.image_desktop?.url
      },
    },
    methods: {
      switchInfo(index) {
        clearInterval(this.interval);
        index ? this.current = index - 1 : this.current ++;
        if (this.current == this.infos.length) {
          this.current = 0;
        }
      }
    }, 
    mounted() {
      this.interval = setInterval(() => {
        this.switchInfo();
      }, 10000);
    },
    destroyed() {
      clearInterval(this.interval);
    }
  };
</script>

<style lang="scss" scoped>

  .landing {
    height: 100vh;
    position: relative;

    &__image img {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
  }

  .landing__content p {
    width: 90%;
  }

  .landing__dots {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    .landing__dot {
      height: 10px;
      width: 10px;
      background-color: white;
      border-radius: 50%;
      margin: 0 0.3rem;
      cursor: pointer;
    }

    .active {
      background-color: color(darkblue);
    }
  }

  @media (min-width: 1024px) {
    .landing__content {
      width: 70%;

      p {
        font-size: 1rem;
      }
    }
  }

</style>