<template>
  <div 
    class="carousel" 
    v-on="isActive && active && length > 1 ? { 
      touchstart: onTouchStart, 
      touchmove: onTouchMove, 
      touchend: onTouchEnd, 
      mousedown: onTouchStart, 
      mousemove: onTouchMove, 
      mouseup: onTouchEnd 
    } : {}">
    <div class="carousel-navdots" v-if="isActive" v-show="pagination && length > 1">
      <div 
        class="carousel-navdot"
        :class="`navdot--${navdotsSettings.shape}`"
        :style="{ backgroundColor: n == currentPage + 1 ? navdotsSettings.activeColor : 'gray' }"
        v-for="n in numberOfPages" 
        v-show="numberOfPages > 1"
        :key="n"
        ref="navdot"
        @click="scrollWithNavdots(n)"></div>
    </div>
    <div 
      class="carousel-wrapper a-stretch"
      :class="{ 'inactive': !isActive }"
      :style="{ transform: `translateX(${translate}px)` }"
      ref="wrapper">
        <slot></slot>
    </div>
    <transition name="fade-arrows">
      <div v-show="indicate && length > 1 && !moveStart">
        <div class="carousel__indicator-left">‹</div>
        <div class="carousel__indicator-right">›</div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: Boolean, 
        default: () => true
      },
      activeOnViewport: { 
        type: Array,
        default: () => [[1, true]]
      },
      columns: { 
        type: Array,
        default: () => [[1, 1]]
      }, 
      pagination: {
        type: Boolean, 
        default: () => true
      }, 
      sensitivity: {
        type: Number, 
        default: () => 40
      }, 
      startFromPage: {
        type: Number, 
        default: () => 0
      }, 
      autoplay: {
        type: Boolean, 
        default: () => true
      }, 
      autoplaySpeed: {
        type: Number, 
        default: () => 4
      },
      navdotsSettings: {
        type: Object, 
        default() { 
          return {
            activeColor: "#05AA19", 
            shape: "round"
          }
        }
      },
      indicate: {
        type: Boolean, 
        default: () => false,
      }
    },
    data() {
      return {
        currentPage: this.startFromPage,
        numberOfColumns: 1,
        moveStart: null, 
        move: null, 
        currentTranslate: 0,
        length: this.$slots.default.length,
        viewportColumnsMatched: null, 
        isActive: null, 
        mousedown: false,
        elementWidth: 0, 
        autoplayInterval: null, 
        animateTimeout: null,
      }
    },
    computed: {
      maxScrollLeft() {
        return this.currentPage == 0;
      },
      maxScrollRight() {
        const lastElementVisible = this.currentPage + this.numberOfColumns;
        return lastElementVisible >= this.length;
      },
      numberOfPages() {
        if (this.length >= this.numberOfColumns) {
          return this.length - this.numberOfColumns + 1;
        } else {
          return 0;
        }
      },
      sortedColumns() {
        return this.columns.sort((a, b) => {
          return a[0] - b[0];
        });
      }, 
      sortedActive() {
        return this.activeOnViewport.sort((a, b) => {
          return a[0] - b[0];
        })
      },
      translate() {
        return -this.elementWidth * this.currentPage
      }
    },
    watch: {
      currentPage(value) {
        this.animateCarousel();
        this.$emit('change-page', value);
      }, 
      startFromPage(value) {
        this.currentPage = value;
      },
    },
    methods: {
      animateCarousel() {
        this.$refs.wrapper.classList.add('scrolling');
        this.animateTimeout = setTimeout(() => {
          this.$refs.wrapper.classList.remove('scrolling');
        }, 500);
      },
      scrollWithNavdots(index) {
        this.currentPage = index - 1;
        this.currentTranslate = parseFloat(this.$refs.wrapper.style.transform.slice(11, -3));
      },
      onTouchStart() {
        clearInterval(this.autoplayInterval);
        if (this.revealCarousel) this.revealCarousel = false;
        
        if (event.type == 'touchstart') {
          this.moveStart = event.touches[0].screenX
        } else {
          this.moveStart = event.screenX;
          this.mousedown = true;
        }
      },
      onTouchMove() {
        let translate;

        if (event.type == 'touchmove') {
          this.move = event.touches[0].screenX - this.moveStart;
        } else if (event.type == 'mousemove' && this.mousedown == true) {
          this.move = event.screenX - this.moveStart
        }

        if (this.move < 0 && this.maxScrollRight || this.move > 0 && this.maxScrollLeft) {
          translate = this.translate + this.move*0.2;
        } else {
          translate = this.translate + this.move*0.5;
        }
        this.$refs.wrapper.style.transform = `translateX(${translate}px)`;
      }, 
      onTouchEnd() {
        if (Math.abs(this.move) > this.sensitivity) {
          if (this.move > 0 && !this.maxScrollLeft) {
            this.currentPage--
          } else if (this.move < 0 && !this.maxScrollRight) {
            this.currentPage++
          } else {
            this.animateCarousel();
          }
        } else if (Math.abs(this.move) < this.sensitivity && Math.abs(this.move) > 1) {
          this.animateCarousel();
        }

        this.$refs.wrapper.style.transform = `translateX(${this.translate}px)`;
        this.mousedown = false;
        this.moveStart = null;
        this.move = null;
      },
      setColumns() {
        this.viewportColumnsMatched = false;
        this.sortedColumns.forEach(cur => {
          if (window.matchMedia(`(min-width: ${cur[0]}px)`).matches) {
            this.viewportColumnsMatched = true;
            this.numberOfColumns = cur[1];
            this.$refs.wrapper.childNodes.forEach(cur => {
              cur.style.width = `${100/this.numberOfColumns}%`;
            });
          }
        });

        if (!this.viewportColumnsMatched) { 
          this.numberOfColumns = 1;
          this.$refs.wrapper.childNodes.forEach(cur => {
            cur.style.width = '100%';
          });
        }
        setTimeout(() => {
          this.elementWidth = this.$slots.default[0].elm.offsetWidth;
        });
      },
      setActive() {
        this.sortedActive.forEach(cur => {
          if (window.matchMedia(`(min-width: ${cur[0]}px)`).matches) {
            this.isActive = cur[1];
          }
        });
      }, 
      runCarousel() {
        if (this.autoplay) {
          this.autoplayInterval = setInterval(() => {
            this.currentPage++ 
            if (this.currentPage == this.numberOfPages) this.currentPage = 0;
          }, this.autoplaySpeed * 1000);
        }
      }, 
    },
    mounted() {
      this.setColumns();
      this.setActive();
      this.runCarousel();
      window.addEventListener('resize', () => {
        this.setColumns();
        this.setActive();
      });
    },
    destroyed() {
      clearInterval(this.autoplayInterval);
      clearTimeout(this.animateTimeout);
    }
  }
</script>

<style scoped>

  .carousel {
    overflow-x: hidden;
    overflow-y: initial;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    position: relative;
  }

  .carousel-navdots {
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem;
  }

  .carousel-navdot {
    transition: all 0.5s;
    cursor: pointer;
  }

  .navdot--round {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 0 5px;
  }

  .navdot--square {
    height: 10px;
    width: 10px;
    margin: 0 5px;
  }

  .navdot--flat {
    height: 1px;
    width: 15px;
    margin: 0 1px;
  }

  .carousel-wrapper {
    display: flex;
    align-items: stretch;
    cursor: grab;
    z-index: 10;
  }

  .carousel-wrapper:active {
    cursor: grabbing;
  }

  .carousel-wrapper > div, 
  .carousel-wrapper > p,
  .carousel-wrapper > span, 
  .carousel-wrapper > ul {
    width: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .scrolling {
    transition: transform 0.5s;
  }

  .inactive {
    flex-direction: column;
  }

  .carousel__indicator-left,
  .carousel__indicator-right {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1rem;
    text-align: center;
    opacity: 0.2;
    font-size: 2rem;
  }

  .carousel__indicator-right {
    left: initial;
    right: 0;
  }

  @media (min-width: 1024px) {
    .inactive {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  .fade-arrows-enter-active {
    animation: fade-arrows 0.5s reverse;
  }

  .fade-arrows-leave-active {
    animation: fade-arrows 0.3s;
  }

  @keyframes fade-arrows {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
</style>