export const changeCurrencyStateAction= (key, newCurrencyState) => ({
  type: 'CHANGE_CURRENCY_STATE',
  newCurrencyState,
  key,
});
