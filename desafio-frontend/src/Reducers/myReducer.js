const INITIAL_STATE = {
  inContribuition: '',
};

export default function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_CURRENCY_STATE':
      return {
        ...state,
        [action.key]: action.newCurrencyState,
      }
    default:
      return state;
  }
};
