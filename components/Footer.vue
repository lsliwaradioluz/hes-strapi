<template>
	<div class="footers">
    <div class="footers__socials row">
      <a href="https://www.facebook.com/hesgymfit/" target="_blank" class="footers__social row j-center a-center">
        <h5 class="mb0">Facebook</h5>
      </a>
      <a href="https://www.instagram.com/hesgymfit_hesbox/?hl=pl" target="_blank" class="footers__social row j-center a-center">
        <h5 class="mb0">Instagram</h5>
      </a>
    </div>
    <div class="footers__action main pt2 pb2">
      <div>
        <h5 class="t-left">Pamiętaj o tym, że</h5>
        <h3 class="mb05">Najtrudniejszy jest pierwszy krok</h3>
      </div>
      <a><button class="button--secondary">Zapisz się teraz</button></a>
      <!-- <a href="https://wod.guru/guest-registration-form/lesnica" target="_blank"><button class="button--secondary">Zapisz się teraz</button></a> -->
    </div>
    <div class="footers__container column b-black main pt3 pb3">
      <div class="footer p10" v-for="footer in footers" :key="footer.id">
        <h4 class="t-blue mb05">{{ footer.name }}</h4>
        <p class="t-gray m00" v-for="entry in footer.entries" :key="entry.id">{{ entry.entry }}</p>
      </div>
    </div>
    <div class="footers__signature main pt1 pb1 t-gray b-black">
      Designed by FXOFFICE. Coded by Łukasz Śliwa. Icons by Freepik from www.flaticon.com. 
    </div>
  </div>
</template>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

<script>
  import mainQuery from '~/apollo/queries/footer/main.gql'

	export default {
		apollo: {
      footers: {
        prefetch: true, 
        query: mainQuery
      }
    }
	};
</script>

<style lang="scss" scoped>

  .footers__social {
    width: 100%;
    padding: 1rem;
    position: relative;
    cursor: pointer;

    &:before {
      content: "";
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: all 0.3s;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                        url('~assets/images/bodypump.png');
    }
    &:hover::before {
      opacity: 1;
    }
  }

  .footers__action {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('~assets/images/bodypump.png');
  }

  .footers__signature {
    border-top: 1px solid color(gray);
  }

  @media (min-width: 1024px) {
    .footers__container {
      flex-direction: row;
      justify-content: space-between;
    }

    .footer {
      flex-basis: 18%;
    }
  }
  
</style>

