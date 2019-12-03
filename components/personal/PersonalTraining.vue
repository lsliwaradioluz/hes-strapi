<template>
  <client-only>
    <div class="personal-training">
      <div class="personal-training__mission main">
        <div class="personal-training__mission-title header">Żeby kogoś zapalić, sam musisz płonąć</div>
        <div class="personal-training__mission-text">HES Team to Trenerzy z pasją, wiedzą, zaangażowaniem oraz poczuciem humoru. Wyznajemy proste i jednocześnie skuteczne zasady i wartości zarówno w swerze prywatnej jak i biznesowej. Naszym zadaniem jest nie tylko zbudowanie estetycznej sylwetki, czy poprawa wyników. Jesteśmy zdania, że sport pozwala rozwijać nam skrzydła w życiu codziennym. Dzięki niemu jesteśmy mniej zdenerwowani, spędzamy z samym sobą trochę czasu mogąc przemyśleć prywatne kwestie.Lepiej śpimy, motywujemy się do zdrowszego odżywiania. Stajemy się lepsi dla samych siebie przez co osiągamy znacznie więcej. Filozofia naszego treningu oparta jest na wiedzy i szkoleniach z zakresu różnych szkół i metod treningowych. To sprawia, że rozwiajmy wszechstronnie naszych podopiecznych oraz niwelujemy poziom występienia u nich kontuzji sportowych.</div>
      </div>
      <div class="personal-training__pillars main">
        <div class="personal-training__pillars-title header">Filary sukcesu</div>
        <div class="personal-training__pillars-container">
          <div class="personal-training__pillar">
            <div class="personal-training__pillar-title">Skuteczność</div>
            <div class="personal-training__pillar-text">Początek przygody z treningiem jest ekscytujący, ale i niezwykle wymagający, choćby ze względów technicznych. Trener personalny pokaże jak ćwiczyć efektywnie i jakich błędów należy unikać, aby twój początek nie skończył się kontuzją.</div>
          </div>
          <div class="personal-training__pillar">
            <div class="personal-training__pillar-title">Motywacja</div>
            <div class="personal-training__pillar-text">Masz już karnet do klubu fitness, ale brakuje Ci systematyczności? Jeśli zdecydujesz się na treningi personalne w naszym centrum, możesz zapomnieć o nieregularnych ćwiczeniach i braku diety. Nasi trenerzy angażują się w 100% i tego samego wymagają od swoich podopiecznych. Twój trener - Twój sukces!</div>
          </div>
          <div class="personal-training__pillar">
            <div class="personal-training__pillar-title">Wiedza</div>
            <div class="personal-training__pillar-text">Dobry trener nie skupia się na ilości treningów, lecz na ich jakości. Nie tylko nauczy Cię efektywnie ćwiczyć, ale także podzieli się wiedzą z anatomii i fizjologii, żebyś miał pełną kontrolę nad swoim ciałem.</div>
          </div>
          <div class="personal-training__pillar">
            <div class="personal-training__pillar-title">Indywidualizm</div>
            <div class="personal-training__pillar-text">Każdy trening jest skrojony tylko na Twoją miarę! Podczas tworzenia planu treningowego uwzględnimy Twoje cele, możliwości i predyspozycje.</div>
          </div>
        </div>
      </div>
      <div class="personal-training__coaches">
        <Coaches zone="personal" :coaches="coaches" />
      </div>
      <div class="personal-training__questions gray main">
        <div class="personal-training__questions-title subtitle">
          Często zadawane pytania
        </div>
        <div class="personal-training__question" v-for="question in questions" :key="question.id">
          <div class="personal-training__question-icon">
            <font-awesome-icon icon="question" class="icon" />
          </div>
          <div class="personal-training__question-description">
            <p class="text red">{{ question.question }}</p>
            <p class="text">{{ question.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
  import Coaches from '~/components/coaches/Coaches'

  export default {
    props: ['coaches', 'questions'], 
    components: {
      Coaches,
    }
  }
</script>

<style scoped>

  .personal-training {
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 100%;
  }

  .title::before {
    display: none;
  }

  .personal-training__pillars {
    padding-top: 3rem;
  }

  .personal-training__pillar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    text-align: center;
  }

  .personal-training__pillar-title {
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 500;
  }

  .personal-training__coaches-title {
    margin: 0 1rem;
  }

  .personal-training__questions-title {
    margin-bottom: 2rem;
  }

  .personal-training__question {
    padding: 1rem 0;
    display: flex;
  }

  .personal-training__question-icon {
    margin-right: 1rem;
  }

  @media (min-width: 768px) {

    .personal-training__pillar-text {
      width: 50%;
    }

    .personal-training__coaches-title {
      margin-left: 10vw;
    }
  }

  @media (min-width: 1024px) {
    
    .personal-training {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-areas: "q q q m m m m m m m"
                           "q q q p p p p p p p"
                           "c c c c c c c c c c";
    }

    .personal-training__mission {
      grid-area: m;
    }

    .personal-training__pillars {
      grid-area: p;
      padding-top: 0;
      padding-bottom: 0;
    }

    .personal-training__pillars-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .personal-training__pillar {
      width: 46%;
      text-align: left;
      align-items: flex-start;
    }

    .personal-training__pillar-text {
      width: 100%;
    }

    .personal-training__coaches {
      grid-area: c;
    }

    .personal-training__questions {
      grid-area: q;
      padding: 2rem;
      margin-top: -5%;
    }
  }


</style>