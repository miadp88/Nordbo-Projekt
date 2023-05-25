export const CLEAR_STEPSELECTIONS = (state, index) => {
    var stateStep = state.questionnaire.steps[index];
    for(var i=0;i<stateStep.answers.length;i++)
    {
      stateStep.answers[i].selected = false
    }
  }

  export const PREV_STEP = (state) => {
    if(state.questionnaire.currentIndex > 0)
    {
        state.questionnaire.currentIndex--
    }
  }

  export const NEXT_STEP = (state) => {
    if(state.questionnaire.currentIndex < state.questionnaire.steps.length-1)
    {
        state.questionnaire.currentIndex++
    }
  }