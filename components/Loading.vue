<template>
  <transition name="slide-hor">
    <div v-if="loading" class="loading-page">
      <div class="loading-circle"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      setTimeout(() => {
        this.loading = false
      }, 500);
      
    }
  }
}
</script>

<style scoped>
  .loading-page {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-circle {
    border: 16px solid gray;
    border-radius: 50%;
    border-top: 16px solid #C20114;
    height: 120px;
    width: 120px;
    animation: spin 0.5s linear infinite;
  }
</style>
