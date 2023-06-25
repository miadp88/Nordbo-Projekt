<template>
  
  <!-- til debug-->
  <img v-bind:src="this.currentQuestionnaireStep.imageUrl">
 
</template>
  
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
      name: 'question-image',
        
      computed: {
          
          ...mapGetters({ currentStepIndex:"getCurrentStepIndex", currentQuestionnaireStep: "getCurrentQuestionnaireStep", steps:"getStep", hasValidAnswers:"hasValidAnswers" }),

          currentStep()
          {
              return this.currentQuestionnaireStep;
          },

          hasValidAnswer()
          {
            return this.hasValidAnswers
          }
      },

      methods:{
       
      }
    }
</script>