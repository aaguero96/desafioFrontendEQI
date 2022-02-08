const INITIAL_STATE = {
  inContribuition: '',
  mensalContribuition: '',
  profitability: '',
  ipca: '',
  cdi: '',
  deadlines: '',
};

export default function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_CURRENCY_STATE':
      return {
        ...state,
        [action.key]: action.newCurrencyState,
      }
    case 'CHANGE_PERCENTAGE_STATE':
      return {
        ...state,
        [action.key]: action.newPercentageState,
      }
    case 'CHANGE_INTEGER_STATE':
      return {
        ...state,
        [action.key]: action.newIntegerState,
      }
    default:
      return state;
  }
};
