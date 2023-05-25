export const clearStepSelections = ({ commit }, index) => {
    commit('CLEAR_STEPSELECTIONS', index);
  }

export const nextStep = ({ commit }) => {
  commit('NEXT_STEP');
}

export const prevStep = ({ commit }) => {
  commit('PREV_STEP');
}