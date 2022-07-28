<template>
  <div class="info" ref="info">
    <div v-for="n in infos.length" class="info__indicator" :key="n" :class="{ 'indicator-active': n == current + 1 }" @click="switchInfo(n)"></div>
    <font-awesome-icon class="icon info__close" icon="times" @click="showInfo" />
    <transition name="fade" mode="out-in">
      <div class="info__tab" :key="current">
        <h1 class="info__tab-header">{{ currentInfo.header }}</h1>
        <p class="info__tab-subheader">{{ currentInfo.subheader }}</p>
        <a class="button" v-if="currentInfo.link" :href="currentInfo.link" target="_blank">Dowiedz się więcej</a>
      </div>
    </transition>
    <div class="info__tag" @click="showInfo">
      <span class="info__tag-text">Aktualności</span>
      <font-awesome-icon class="icon" icon="angle-double-down" ref="icon" />
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
      }
    },
    methods: {
      showInfo() {
        if (this.$refs.info.style.transform == "translateX(100%)" || this.$refs.info.style.transform == "") {
          this.$refs.info.style.transform = "translateX(0)";
          this.$refs.icon.style.transform = "rotate(-90deg)";
        } else {
          this.$refs.info.style.transform = "translateX(100%)";
          this.$refs.icon.style.transform = "rotate(90deg)";
        }
      },
      switchInfo(n) {
        this.current = n - 1;
        clearInterval(this.interval);
      }
    },
    mounted() {
      this.interval = setInterval(() => {
        this.current++
        if (this.current == this.infos.length) this.current = 0;
      }, 5000);
    }, 
    destroyed() {
      clearInterval(this.interval);
    }
  }
</script>

<style scoped>

  .info {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    z-index: 999;
    background-color: black;
    color: white;
    padding: 2rem;
    transform: translateX(100%);
    transition: all 0.3s;
  }

  .info__indicator {
    height: 15px;
    width: 15px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .info__close {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .indicator-active {
    background-color: #92140c;
  }

  .info__tab-header {
    margin-top: 0.5rem;
  }

  .info__tab-subheader {
    margin-bottom: 2rem;
  }

  .info__tag {
    position: absolute;
    font-size: 1rem;
    line-height: 1rem;
    left: -3rem;
    bottom: 0;
    width: 3rem;
    padding: 1rem;
    background-color: black;
    writing-mode: vertical-rl;
    cursor: pointer;
    border-top-left-radius: 5px;
  }

  .info__tag-text {
    display: none;
  }
  
  .icon {
    height: 1rem;
    transform: rotate(90deg);
    transition: transform 0.3s;
  }

  @media (min-width: 768px) {
    .info {
      height: 100vh;
      width: 20%;
      padding-top: 4rem;
    }

    .info__close {
      display: none;
    }

    .info__tag-text {
      display: inline;
    }
  }
</style>