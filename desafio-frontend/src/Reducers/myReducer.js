export const INITIAL_STATE = {
  inContribuition: '',
  mensalContribuition: '',
  profitability: '',
  ipca: '',
  cdi: '',
  deadlines: '',
  income: 'bruto',
  indexing: 'pre',
  profitabilityFreq: 'anual',
  ipcaFreq: 'anual',
  cdiFreq: 'anual',
  deadLinePeriodicity: 'meses',
};

export function myReducer(state = INITIAL_STATE, action) {
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
    case 'CHANGE_INCOME':
      return {
        ...state,
        income: action.newIncome,
      }
    case 'CHANGE_INDEXING':
      return {
        ...state,
        indexing: action.newIndexing,
      }
    case 'CLEAN_STATES':
      return INITIAL_STATE;
    case 'CHANGE_FREQUENCY':
      return {
        ...state,
        [action.key]: action.newFrequency,
      };
    case 'CHANGE_PERIODICITY':
      return {
        ...state,
        [action.key]: action.newPeriodicity,
      };
    case 'INITIAL_VALUES':
      return {
        ...state,
        inContribuition: action.inContribuition,
        mensalContribuition: action.mensalContribuition,
        profitability: action.profitability,
        ipca: action.ipca,
        cdi: action.cdi,
        deadlines: action.deadlines,
      }
    default:
      return state;
  }
};
