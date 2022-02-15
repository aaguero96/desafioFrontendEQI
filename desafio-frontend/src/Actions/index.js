export const changeCurrencyStateAction = (key, newCurrencyState) => ({
  type: 'CHANGE_CURRENCY_STATE',
  newCurrencyState,
  key,
});

export const changePercentageStateAction = (key, newPercentageState) => ({
  type: 'CHANGE_PERCENTAGE_STATE',
  newPercentageState,
  key,
});

export const changeIntegerStateAction = (key, newIntegerState) => ({
  type: 'CHANGE_INTEGER_STATE',
  newIntegerState,
  key,
});

export const changeIncomeAction = (newIncome) => ({
  type: 'CHANGE_INCOME',
  newIncome,
});

export const changeIndexingAction = (newIndexing) => ({
  type: 'CHANGE_INDEXING',
  newIndexing,
});

export const cleanStatesAction = () => ({
  type: 'CLEAN_STATES',
});

export const changeFrequencyAction = (key, newFrequency) => ({
  type: 'CHANGE_FREQUENCY',
  newFrequency,
  key,
});

export const changePeriodicityAction = (key, newPeriodicity) => ({
  type: 'CHANGE_PERIODICITY',
  newPeriodicity,
  key,
});

export const toInitialValues = (initialValues) => ({
  type: 'INITIAL_VALUES',
  ...initialValues,
});
