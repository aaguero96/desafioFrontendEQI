const INITIAL_STATE = {
  inContribuition: '',
};

export default function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_INCONTRIBUITION':
      return {
        ...state,
        inContribuition: action.newInContribuition,
      }
    default:
      return state;
  }
};
