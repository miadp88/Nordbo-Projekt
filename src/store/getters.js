export const getCurrentStepIndex = (state) => {
        return state.questionnaire.currentIndex;
}

export const getCurrentQuestionnaireStep = (state) => {
        return state.questionnaire.steps[state.questionnaire.currentIndex];
}

export const getQuestionnaireSteps = (state) => {
        return state.questionnaire.steps;
}

export const getSteps = (state) => {
    return state.questionnaire.steps;
}

export const hasValidAnswers = (state) => {
    return state.questionnaire.steps[state.questionnaire.currentIndex].answers.find(a => a.selected) != null;
}

export const getProducts = (state) => {
    return state.products;
}
