<template>
  <client-only>
    <div class="facilities main">
      <div class="facility" v-for="facility in facilities" :key="facility.id">
        <div class="facility__image" :style="{ backgroundImage: `url('${facility.image.url}')` }"></div>
        <div class="facility__header title">{{ facility.header }}</div>
        <div class="facility__subheader">{{ facility.subheader }}</div>
      </div>
    </div>
  </client-only>
</template>

<script>


export default {
  props: ['facilities']
}
  
</script>

<style scoped>

  .facilities {
    color: white;
  }

  .facility {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
  }

  .facility__image {
    height: 50vw;
    width: 50vw;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
  }

  .facility__header {
    font-size: 1.5rem;
    font-weight: 400; 
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .title::before {
    display: none;
  }

  .facility__subheader {
    text-align: center;
  }

  @media (min-width: 768px) {
    
    .facilities {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .facility {
      height: 100%;
      margin-bottom: 2rem;
    }

    .facility__image {
      height: 20vw;
      width: 20vw;
    }

    .facility__subheader {
      width: 40%;
    }
  }

  @media (min-width: 1024px) {
    
    .facilities {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .facility {
      width: 25%;
      height: 100%;
    }

    .facility__image {
      height: 10vw;
      width: 10vw;
    }

    .facility__subheader {
      width: 100%;
    }
  }
</style>