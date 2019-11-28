<template>
  <client-only>
    <nav id="header" :class="{ 'is-triggered': scroll }">
      <div class="header__icons">
        <transition name="rotate" mode="out-in">
          <font-awesome-icon class="icon hamburger" :key="icon" :icon="icon" @click.stop="toggleNav" />
        </transition>
        <nuxt-link to="/" tag="div" class="header__icons-logo">
          <img class="logo" src="http://hesgym.pl/logo.png">
        </nuxt-link>
      </div>
      <transition name="slide">
        <ul class="header__navigation black" v-if="navbarToggled">
          <div class="header__navigation-link" @click.self="toggleSubnav">
            Fitness
            <ul class="header__navigation-subheader" @click="toggleNav">
              <nuxt-link to="/fitness/workouts" tag="li" class="header__navigation-subheader__link">Zajęcia</nuxt-link>
              <nuxt-link to="/fitness/coaches" tag="li" class="header__navigation-subheader__link">Instruktorzy</nuxt-link>
            </ul>
          </div>
          <div class="header__navigation-link" @click.self="toggleSubnav">
            Cross
            <ul class="header__navigation-subheader" @click="toggleNav">
              <nuxt-link to="/cross/workouts" tag="li" class="header__navigation-subheader__link">Zajęcia</nuxt-link>
              <nuxt-link to="/cross/coaches" tag="li" class="header__navigation-subheader__link">Trenerzy</nuxt-link>
            </ul>
          </div>
          <nuxt-link to="/kids" tag="li" class="header__navigation-link" @click.native="toggleNav">Kids</nuxt-link>
          <nuxt-link to="/personal" tag="li" class="header__navigation-link" @click.native="toggleNav">Treningi personalne</nuxt-link>
          <a href="https://akvit-aneta-komendera.business.site/" target="_blank" class="header__navigation-link">Dietetyk</a>
          <nuxt-link to="/contact" tag="li" class="header__navigation-link" @click.native="toggleNav">Kontakt</nuxt-link>
        </ul>
      </transition>
	  </nav>
  </client-only>
</template>

<script>

  export default {
    data() {
      return {
        navbarToggled: false,
        scroll: false
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
    mounted() {
      window.addEventListener('scroll', () => {
        window.scrollY > 0 ? this.scroll = true : this.scroll = false;
      })
    }
  };
</script>  

<style scoped>

  #header {
    position: fixed;
    padding: 1rem 10vw;
    top: 0;
    z-index: 150;
    width: 100%;
    transition: all 0.3s;
  }

  .header__icons {
    display: flex;
    justify-content: space-between; 
    align-items: center;
  }

  .header__icons-logo {
    background-image: url('http://localhost:1337/uploads/9a8c8bf9e3e84a489089f705ea9d95c6.png');
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    right: 10vw;
    padding-top: 1rem;
    height: 40vh;
  }

  .hamburger,
  .logo {
    z-index: 100;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo {
    height: 4rem;
  }

  .cross {
    z-index: 0;
  }

  .header__navigation {
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

  .header__navigation-link {
    list-style: none;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .header__navigation-subheader {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s;
    padding: 0;
    margin: 0;
  }

  .header__navigation-subheader__link {
    font-size: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) {

    .header__navigation-link {
      width: 40%;
    }

    .header__icons-logo {
      right: 10vw;
    }
  }

  @media (min-width: 1024px) {

    #header {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  .toggled {
    max-height: 500px;
  }

  .is-triggered {
    background-color: black;
  }
  
</style>