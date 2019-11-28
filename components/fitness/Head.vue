<template>
  <client-only>
    <div class="head main background-animate" :style="{ backgroundImage: backgroundImage }">
      <div class="head__title title">
        <span><slot name="section"></slot></span>
        <span><slot name="subsection"></slot></span>
      </div>
    </div>
  </client-only>
</template>

<script>
  export default {
    props: ['background'],
    computed: {
      backgroundImage() {
        if (this.background) {
          return `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${this.background}')`
        } else {
          return 
        }
        
      }
    }
  }
</script>

<style scoped>

  .head {
    height: 40vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: block;
  }

  @media (min-width: 768px) {
    
    .head {
      height: 60vh;
    }
  }
  
</style>