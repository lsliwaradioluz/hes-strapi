<template>
  <div class="contact main">
    <div class="contact__header">
      <h5>Masz sprawę?</h5>
      <h2>Daj nam znać!</h2>
      <p class="t-lightblack t-centered p11 pt0">Zadzwoń już dziś i zapytaj o atrakcyjne rabaty! Nasz zespół odpowie na wszystkie Twoje pytania i dopasuje ofertę do Twoich potrzeb. Jesteś u nas po raz pierwszy? Nasi konsultanci opowiedzą o zajęciach i zapoznają Cię z naszymi trenerami.</p>
    </div>
    <div class="contact__container p11 column">
      <div class="contact__details b-black p22 t-centered">
        <h3>Napisz lub zadzwoń</h3>
        <div class="pb1" v-for="footer in footers" :key="footer.id">
          <h5>{{ footer.name }}</h5>
          <p class="m00" v-for="entry in footer.entries" :key="entry.id">{{ entry.entry }}</p>
        </div>
      </div>
      <div class="contact__map m20">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.439006352793!2d16.878863876282146!3d51.14364724563507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f955069fee439%3A0xce59025c1425f3db!2sHes%20Gym%26Fitness!5e0!3m2!1spl!2spl!4v1578494069146!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
      <div class="contact__form b-gray p22">
        <h3 class="t-centered t-black">Skorzystaj z formularza</h3>
        <form>
          <input placeholder="Twój adres email" v-model="form.from" type="email" required ref="email" :disabled="loading" spellcheck="false">
          <input placeholder="Temat" v-model="form.subject" type="text" required :disabled="loading" spellcheck="false">
          <textarea placeholder="Treść" rows="6" v-model="form.text" required :disabled="loading" spellcheck="false"></textarea>
          <button :disabled="loading" type="submit" class="button--secondary pl0 pr0" @click.prevent="sendForm">{{ buttonText }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['footers'],
    data() {
      return {
        form: {
          to: 'hesgym@gmail.com',
          from: 'lsliwaradioluz@gmail.com',
          subject: 'Subject',
          text: 'Text'
        },
        loading: false,
        buttonText: 'Wyślij'
      }
    },
    methods: {
      sendForm() {
        this.loading = true;
        const endpoint = process.env.NODE_ENV == 'development' ? 'http://localhost:1337/email' : 'https://hes-backend.herokuapp.com/email';
        this.$axios.$post(endpoint, {
          to: 'hesgym@gmail.com',
          from: 'hesgym@gmail.com',
          subject: `Nowa wiadomość z formularza kontaktowego hesgym-fit: ${this.form.subject}`,
          html: `
            <h4>Wysłano z adresu:</h4>
            <p>${this.form.from}</p>
            <h4>Temat:</h4>
            <p>${this.form.subject}</p>
            <h4>Treść:</h4>
            <p>${this.form.text}</p>
          `
        })
          .then(res => {
            this.buttonText = 'Wysłano!';
            setTimeout(() => {
              this.loading = false;
              this.buttonText = 'Wyślij';
              this.form.from = '';
              this.form.subject = '';
              this.form.text = '';
            }, 2000);
          })
          .catch(err => {
            this.buttonText = 'Błąd!';
            setTimeout(() => {
              this.loading = false;
              this.buttonText = 'Wyślij';
              this.form.from = '';
              this.form.subject = '';
              this.form.text = '';
            }, 2000);
          });
      }
    },
  }
</script>

<style lang="scss" scoped>

  .contact__map {
    overflow: hidden;
    padding: 2rem;
    padding-bottom: 100%;
    position:relative;
    width: 100%;
  }

  .contact__map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .contact__form {

    input,
    textarea {
      background-color: transparent;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid color(blue);
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      resize: none;
      font-family: inherit;
    }
    button {
      width: 100%;
    }
  }

@media (min-width: 1024px) {
  .contact__header {
    width: 50%;
    margin: 0 auto;
  }

  .contact__container {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    div {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .contact__map {
      padding-bottom: 30%;
      margin: 0;
    }

  }
}
</style>

