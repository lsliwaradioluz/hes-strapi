<template>
  <div class="contact" ref="contact">
    <div class="contact__form main">
      <div class="contact__form-header header">
        Napisz do nas
      </div>
      <div class="contact__form-subheader">
        Chciałbyś o coś zapytać, zwrócić na coś uwagę lub zaproponować współpracę? Poniższy formularz jest właśnie dla Ciebie! Wyślij nam wiadomość, a my odpiszemy tak szybko, jak tylko możliwe. Nie zapomnij podać swojego adresu e-mail.
      </div>
      <form class="contact__form-fields">
        <input class="contact__form-field" placeholder="Twój adres email" v-model="form.from" type="email" required ref="email">
        <input class="contact__form-field" placeholder="Temat" v-model="form.subject" type="text" required>
        <textarea class="contact__form-field" placeholder="Treść" rows="6" v-model="form.text" required></textarea>
        <button ref="formbutton" :disabled="form.loading" type="submit" class="button" @click.prevent="sendForm">Wyślij</button>
      </form>
    </div>
      <div class="contact__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.112577060113!2d16.87465851572352!3d51.14327507957689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f955069f92b9f%3A0xc386a12c02ebbc71!2sWielkopolska%2072%2C%2054-027%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1574528914938!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
  </div>
</template>

<script>	
	import Strapi from 'strapi-sdk-javascript';
	const strapi = new Strapi('https://hes-backend.herokuapp.com');

	export default {
		data() {
			return {
        form: {
          from: '',
          subject: '',
          text: '', 
          loading: false
        }
			}
    },
    computed: {
      currentYear() {
				return new Date().getFullYear();
      }
    },
		methods: {
			sendForm() {
        this.form.loading = true;
				strapi.request("POST", "/email", {
          data: {
            to: 'lukasz.mateusz.sliwa@gmail.com',
            from: this.form.from,
            subject: this.form.subject,
            text: this.form.text,
          }
        })
        .then(res => {
          this.form.loading = false;
          this.$refs.formbutton.innerText = 'Wysłano!';
          setTimeout(() => {
            this.$refs.formbutton.innerText = 'Wyślij';
            this.form.from = '';
            this.form.subject = '';
            this.form.text = '';
          }, 3000);
        })
        .catch(err => console.log(err));
			}
    }, 
    mounted() {
      if (this.$route.params.focusForm == true) {
        this.$refs.email.focus();
        setTimeout(() => {
          this.$refs.contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },);
      }
    }
	};
</script>

<style scoped>

  .contact__form-fields {
    width: 100%;
    padding-top: 0.5rem;
  }

  .contact__form-field {
    display: block;
    width: 100%;
    background-color: rgba(250,250,250,0.3);
    border: none;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
    color: white;
    font-family: inherit;
    transition: all 0.3s;
    resize: none; 
  }

  .contact__form-field:focus {
    outline: 1px solid white;
  }

  .contact__form-signature {
	  text-align: center;
	  width: 100%;
    font-weight: 400;
	}

	.contact__form-signature span {
		display: block;
  }

  .contact__map {
    padding: 2rem;
  }

  .contact__map {
    overflow: hidden;
    padding-bottom: 60%;
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

  @media (min-width: 1024px) {

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .contact__form {
      width: 40%;
      padding-left: 0;
      padding-right: 0;
    }

    .contact__map {
      padding-bottom: 30%;
    }
  }
</style>

