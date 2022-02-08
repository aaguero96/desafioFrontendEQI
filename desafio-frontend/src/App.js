import InputCurrency from './Components/InputCurrency';
import InputPercentage from './Components/InputPercentage';
import InputInteger from './Components/InputInteger'

function App() {
  return (
    <>
      <h1>Simulador de Investimentos</h1>
      <InputCurrency name={ "Aporte Inicial" }/>
      <InputCurrency name={ "Aporte Mensal" }/>
      <InputPercentage name={ "Rentabilidade" }/>
      <InputPercentage name={ "IPCA (ao ano)" }/>
      <InputPercentage name={ "CDI (ao ano)" }/>
      <InputInteger name={ "Prazo (em meses)" }/>
    </>
  );
}

export default App;
