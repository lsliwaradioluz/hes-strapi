<template>
  <nav class="navigation main pt1 pb1" :class="{ 'navigation--triggered': scroll }">
    <div class="navigation__icons row j-between a-center">
      <div class="navigation__logo logo">
        <nuxt-link to="/" tag="li" @click.native="toggleNav" class="logo">HES<span class="t-blue logo">Gym</span></nuxt-link>
      </div>
      <div class="navigation__bars column j-between a-end" @click="toggleNav" ref="bars">
        <span class="navigation__bar"></span>
        <span class="navigation__bar"></span>
        <span class="navigation__bar"></span>
      </div>
      <ul class="navigation__links main column a-start f-start" ref="navigation" @click="toggleNav">
        <nuxt-link to="/fitness" tag="li">Fitness</nuxt-link>
        <nuxt-link to="/cross" tag="li">Cross</nuxt-link>
        <nuxt-link to="/kids" tag="li">Kids</nuxt-link>
        <nuxt-link to="/personal" tag="li">Treningi personalne</nuxt-link>
        <a href="https://akvit-aneta-komendera.business.site/" target="_blank">Dietetyk</a>
        <nuxt-link to="/contact" tag="li">Kontakt</nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        scroll: 0
      }
    },
    methods: {
      toggleNav() {
        const target = event.target;
        const navigation = this.$refs.navigation;
        const bars = this.$refs.bars.children;

        if (!target.classList.contains('navigation__links')) {
          if (target.classList.contains('logo')) {
            navigation.classList.remove('navigation__links--toggled');
            bars[0].classList.remove('rotated');
            bars[1].classList.remove('hidden');
            bars[2].classList.remove('rotated-reverse');
          } else {
            navigation.classList.toggle('navigation__links--toggled');
            bars[0].classList.toggle('rotated');
            bars[1].classList.toggle('hidden');
            bars[2].classList.toggle('rotated-reverse');
          }
        } 
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        this.scroll = window.scrollY;
      });
    }
  };
</script>  

<style lang="scss" scoped>
  
  .navigation {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    transition: all 0.3s;

    .logo {
      cursor: pointer;
    }
  }

  .navigation__bars {
    height: 24px;
    z-index: 1000;
    cursor: pointer;

    .navigation__bar {
      width: 40px;
      height: 1.5px;
      background-color: white;
      transition: all 0.3s;
      transform-origin: 0 0;

      &:nth-child(2) {
        width: 35px;
      }
      &:nth-child(3) {
        width: 30px;
      }
    }
  }

  .navigation__links {
    height: 100vh;
    width: 100%;
    padding-top: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: color(black);
    font-size: 1.5rem;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
    li,
    a {
      margin-bottom: 0.5rem;
      color: color(blue);
      cursor: pointer;
    }
  }

  .navigation__links--toggled {
    transform: translateX(0);
  }

  .hidden {
    opacity: 0;
  }

  .rotated {
    transform: rotate(34deg);
  }

  .rotated-reverse {
    transform: rotate(-34deg);
    width: 40px !important;
  }

  @media (min-width: 1024px) {

    .navigation {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .navigation__bars {
      display: none;
    }

    .navigation__links {
      transform: translateX(0);
      background-color: initial;
      position: static;
      height: auto;
      flex-direction: row;
      font-size: 13px;
      text-transform: uppercase;
      padding: 0;
      align-items: center;
      justify-content: flex-end;
      
      li, a {
        margin: 0 1rem;
        position: relative;
      }

      li::before,
      a::before {
        content: "";
        width: 0;
        height: 1px;
        position: absolute;
        top: -6px;
        background-color: white;
        transition: all 0.3s;
      }

      li:hover,
      a:hover {
        color: white;
        &::before {
          width: 100%;
        }
      }
    }
  }

  .navigation--triggered {
    background-color: color(black);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
</style>