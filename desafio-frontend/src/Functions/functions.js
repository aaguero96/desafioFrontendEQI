// Requisitions
const URL_BASE = 'http://localhost:3000/';
const myHeader = new Headers();
myHeader.append('Accept', 'application/json'); // Adições no Header
const createRequest = (url) => new Request(url, {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
});

// // Requsition Simiulations
export async function getSimulationFromAPI() {
  const URL = `${URL_BASE}simulacoes`;
  let data = await fetch(createRequest(URL));
  data = await data.json();
  return data;
};

// Validation for currencies
export const validationCurrencies = (value) => {
  const number = parseFloat(value);
  const validation = typeof(number) === 'number' && number >= 0;
  return validation;
};

// Validation for percentage
export const validationPercentage = (value) => {
  const number = parseFloat(value);
  const validation = typeof(number) === 'number' && number >= 0;
  return validation;
};

// Validation for integer
export const validationInteger = (value) => {
  const number = parseInt(value);
  const validation = typeof(number) === 'number' && Number.isInteger(number) && number >= 0;
  return validation;
};
