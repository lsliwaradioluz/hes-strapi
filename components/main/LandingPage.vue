<template>
  <div class="landing">
    <video class="landing__video" autoplay muted loop>
      <source src="http://localhost:1337/uploads/2a037e871e8a4ca28301db598bac9417.mp4" type="video/mp4">
    </video>
    <div class="landing__headers main">
       <div class="landing__header title">
        stać cię na więcej niż myślisz
      </div>
      <div class="landing__cta button">
        Wybierz swoją strefę
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  
  .landing {
    height: 120vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .landing__video {
    height: 120vh;
    z-index: 0;
  }
  .landing::after {
    content: "";
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    z-index: 1;
  }

  .landing__headers {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
  }

  .landing__header {
    width: 100%;
  }

  .landing__cta {
    border: none;
    background-color: #92140C;
  }

  .landing__cta:hover {
    background-color: rgb(121, 17, 10);
    color: white;
  }

  .title::before,
  .title::after {
    display: none;
  } 

  @media (min-width: 768px) {

    .landing__headers {
      align-items: flex-start;
    }

    .landing__header {
      font-size: 4rem;
      width: 55vw;
      text-align: left;
      line-height: 5rem;
    }

    .landing__cta {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    .landing__headers {
      align-items: flex-start;
    }

    .landing__header {
      font-size: 6.25rem;
      text-align: left;
      line-height: 7rem;
    }
    
  }
</style>