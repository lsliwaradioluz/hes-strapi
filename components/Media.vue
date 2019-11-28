<template>
  <client-only>
    <div class="media">
      <div class="media__social main">
        <div class="media__social-header">Obserwuj nas w mediach społecznościowych</div>
        <div class="media__social-icons">
          <a class="media__social-icon" href="https://www.facebook.com/hesgymfit/" target="_blank"> 
            <font-awesome-icon class="icon" :icon="[ 'fab', 'facebook-square' ]" />
            hesgym
          </a>
          <a class="media__social-icon" href="https://www.instagram.com/hesgymfit_hesbox/" target="_blank">
            <font-awesome-icon class="icon" :icon="[ 'fab', 'instagram' ]" />
            hesgym/hesbox
          </a>
          <a class="media__social-icon" href="https://www.facebook.com/hesboxlesnica/" target="_blank">
            <font-awesome-icon class="icon" :icon="[ 'fab', 'facebook-square' ]" />
            hesbox
          </a>
        </div>
      </div>
      <div class="media__form main">
        <div class="media__form-header">Masz do nas pytanie?</div>
        <div class="media__form-button button">Napisz teraz</div>
      </div>
    </div>
  </client-only>
</template>

<style scoped>

  .media {
    background-color: #C20114;
    text-align: center;
  }

  .media__social {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .media__social-header {
    padding: 1rem 0;
   }

  .media__social-icons {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .media__social-icon {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
  }

  .media__form {
    background-color: black;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .media__form-header {
    padding: 1rem 0;
    text-align: center;
  }

  @media (min-width: 1024px) {
    
    .media__form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .media__social {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-between;
    }

    .media__social-header {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }

    .media__social-icons {
      border: none;
    }

    .media__social-icon {
      margin: 0 1rem;
    }

    .media__form {
      border-bottom: 1px solid white;
    }

    .media__form-header {
      font-size: 1.5rem;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .media__form-button {
      width: 30%;
    }
  }

</style>
