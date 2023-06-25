<template>
 <div v-if="this.currentStepIndex < 6">
    <h2>{{currentStep.question}}</h2>
    <div v-for="answer in currentStep.answers" :key="answer.answer">
      <input type="radio" name="answer" v-on:change="setSelectedAnswer(answer)" :value="answer.value" :checked="answer.selected" /> {{ answer.answer}}
    </div>
    <div>
      <button class="m-2" v-on:click="prev()">Tilbage</button>
      <button class="m-2" v-on:click="next()">Næste</button>
      <router-link to="/about" class="btn btn-primary">Resultat</router-link>
    </div>
</div>
<div v-else>
  <recommendedProducts />

</div>
</template>
  
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
      name: 'question-naire',
        
      computed: {
          
          ...mapGetters({ currentStepIndex:"getCurrentStepIndex", currentQuestionnaireStep: "getCurrentQuestionnaireStep", steps:"getSteps", hasValidAnswers:"hasValidAnswers" }),

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
        ...mapActions({
          clearStepSelections: "clearStepSelections",
          prevStep: "prevStep",
          nextStep : "nextStep"
            }),

            prev()
            {
               this.prevStep();
            },

            next()
            {
              if(this.hasValidAnswer)
              {
              this.nextStep();
            }
            },


        setSelectedAnswer(answer)
        {
          this.clearStepSelections(this.currentStepIndex);
          answer.selected = true;
        }
      }
    }
</script>