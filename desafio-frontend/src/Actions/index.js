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
