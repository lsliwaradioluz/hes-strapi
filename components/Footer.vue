<template>
	<div class="footer">
    <div class="footer__tabs main">
      <div class="footer__tab">
        <h1 class="footer__tab-header red">
          Na skróty 
        </h1>
        <nuxt-link to="" tag="div" class="footer__tab-link">Zajęcia Fitness</nuxt-link>
        <nuxt-link to="" tag="div" class="footer__tab-link">Trenerzy Fitness</nuxt-link>
        <nuxt-link to="" tag="div" class="footer__tab-link">Zajęcia Cross</nuxt-link>
        <nuxt-link to="" tag="div" class="footer__tab-link">Trenerzy Cross</nuxt-link>
        <nuxt-link to="" tag="div" class="footer__tab-link">Treningi personalne</nuxt-link>
        <nuxt-link to="" tag="div" class="footer__tab-link">Kontakt</nuxt-link>
      </div>
      <div class="footer__tab" v-for="footer in footers" :key="footer.id">
        <h1 class="footer__tab-header red">
          {{ footer.name }}
        </h1>
        <span v-for="entry in footer.entries" class="footer__tab-entry">{{ entry.entry }}</span>
      </div>
    </div>
    <div class="footer__signature">
      Website made with joy by Łukasz Śliwa. Icons made by Freepik from www.flaticon.com
    </div>
	</div>
</template>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

<script>
  import footerQuery from '~/apollo/queries/footer/footers.gql'

	export default {
		apollo: {
      footers: {
        prefetch: true, 
        query: footerQuery
      }
    }
	};
</script>

<style scoped>

  .footer {
    padding-top: 1rem;
  }

  .footer__tabs {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .footer__tab {
    padding: 0.5rem 0;
  }

  .footer__tab-header {
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  .footer__tab-link {
    padding: 0.1rem 0;
  }

  .footer__tab-entry {
    display: block;
  }

  .footer__signature {
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
    border-top: 1px solid rgb(145, 145, 145);
    color: rgba(255, 255, 255, 0.411);
  }

  @media (min-width: 768px) {
    .footer__media {
      display: flex;
      justify-content: space-between;
    }

    .footer__tabs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footer__media-icons {
      border: none;
    }

    .footer__media-icon {
      padding: 0 1rem;
    }

    .footer__signature {
      border: none;
      padding-top: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .footer__media {
      display: flex;
      justify-content: space-between;
    }

    .footer__tabs {
      display: flex;
      justify-content: space-between;
    }

    .footer__media-icons {
      border: none;
    }

    .footer__media-icon {
      padding: 0 1rem;
    }

    .footer__signature {
      border: none;
      padding-top: 2rem;
    }
  }
</style>

