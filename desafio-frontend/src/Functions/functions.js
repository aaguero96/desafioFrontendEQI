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
