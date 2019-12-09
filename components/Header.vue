<template>
  <nav class="navigation">
    <div class="navigation__icons">
      <transition name="rotate" mode="out-in">
        <font-awesome-icon class="icon hamburger" :key="icon" :icon="icon" @click.stop="toggleNav" />
      </transition>
      <nuxt-link to="/" tag="div" class="navigation__icons-logo" :style="{ backgroundImage: `url('${background.image.url}')` }">
        <img class="logo" src="http://hesgym.pl/logo.png">
      </nuxt-link>
    </div>
    <transition name="slide">
      <ul class="navigation__navigation black" v-if="navbarToggled">
        <div class="navigation__navigation-link" @click.self="toggleSubnav">
          Fitness
          <ul class="navigation__navigation-subnavigation" @click="toggleNav">
            <nuxt-link to="/fitness/workouts" tag="li" class="navigation__navigation-subnavigation__link">Zajęcia</nuxt-link>
            <nuxt-link to="/fitness/coaches" tag="li" class="navigation__navigation-subnavigation__link">Instruktorzy</nuxt-link>
          </ul>
        </div>
        <div class="navigation__navigation-link" @click.self="toggleSubnav">
          Cross
          <ul class="navigation__navigation-subnavigation" @click="toggleNav">
            <nuxt-link to="/cross/workouts" tag="li" class="navigation__navigation-subnavigation__link">Zajęcia</nuxt-link>
            <nuxt-link to="/cross/coaches" tag="li" class="navigation__navigation-subnavigation__link">Trenerzy</nuxt-link>
          </ul>
        </div>
        <nuxt-link to="/kids" tag="li" class="navigation__navigation-link" @click.native="toggleNav">Kids</nuxt-link>
        <nuxt-link to="/personal" tag="li" class="navigation__navigation-link" @click.native="toggleNav">Treningi personalne</nuxt-link>
        <a href="https://akvit-aneta-komendera.business.site/" target="_blank" class="navigation__navigation-link">Dietetyk</a>
        <nuxt-link to="/contact" tag="li" class="navigation__navigation-link" @click.native="toggleNav">Kontakt</nuxt-link>
      </ul>
    </transition>
  </nav>
</template>

<script>
  import logoQuery from '~/apollo/queries/logo/logo.gql'

  export default {
    data() {
      return {
        navbarToggled: false
      }
    },
    computed: {
      icon() {
        return this.navbarToggled ? 'times' : 'bars';
      }
    },
    methods: {
			toggleNav() {
        this.navbarToggled = !this.navbarToggled;
      }, 
      toggleSubnav() {
        event.target.children[0].classList.toggle('toggled');
      }
    },
    apollo: {
      background: {
        prefetch: true, 
        query: logoQuery
      }
    },
    // mounted() {
    //   window.addEventListener('scroll', () => {
    //     window.scrollY > 0 ? this.scroll = true : this.scroll = false;
    //   })
    // }
  };
</script>  

<style scoped>

  .navigation {
    position: fixed;
    padding: 1rem 10vw;
    top: 0;
    z-index: 150;
    width: 100%;
    transition: all 0.3s;
  }

  .navigation__icons {
    display: flex;
    justify-content: space-between; 
    align-items: center;
  }

  .navigation__icons-logo {
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    right: 10vw;
    padding-top: 1rem;
    height: 10rem;
  }

  .hamburger,
  .logo {
    z-index: 100;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo {
    height: 2rem;
  }

  .navigation__navigation {
    height: 100vh;
    width: 100%;
    padding: 0 3vw;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .navigation__navigation-link {
    list-style: none;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .navigation__navigation-subnavigation {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s;
    padding: 0;
    margin: 0;
  }

  .navigation__navigation-subnavigation__link {
    font-size: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) {

    .navigation__navigation-link {
      width: 40%;
    }

    .navigation__icons-logo {
      right: 10vw;
    }
  }

  @media (min-width: 1024px) {

    .navigation {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .logo {
      height: 4rem;
    }
  }

  .toggled {
    max-height: 500px;
  }
  
</style>