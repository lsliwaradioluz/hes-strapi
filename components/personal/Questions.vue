<template>
  <div class="questions main pt0">
    <div>
      <h5>Czy to na pewno dla mnie?</h5>
      <h2>Częste pytania</h2>
    </div>
    <div class="questions__container">
      <Carousel :pagination="false" :columns="[[768, 2], [1024, 3]]">
        <div class="question row a-stretch p11" v-for="question in questions" :key="question.idd">
          <div class="question__content column a-start j-center b-gray t-gray p22">
            <h5 class="t-left">{{ question.question }}</h5>
            <p>{{ question.answer }}</p>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['questions']
  }
</script>

<style lang="scss" scoped>


</style>