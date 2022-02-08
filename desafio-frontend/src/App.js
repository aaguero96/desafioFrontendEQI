import InputCurrency from './Components/InputCurrency';
import InputPercentage from './Components/InputPercentage';
import InputInteger from './Components/InputInteger'
import InputIncome from './Components/InputIncome';
import InputIndexing from './Components/InputIndexing';
import CleanButton from './Components/CleanButton';

function App() {
  return (
    <>
      <h1>Simulador de Investimentos</h1>
      <InputIncome />
      <InputIndexing />
      <InputCurrency name={ "Aporte Inicial" }/>
      <InputCurrency name={ "Aporte Mensal" }/>
      <InputPercentage name={ "Rentabilidade" }/>
      <InputPercentage name={ "IPCA (ao ano)" }/>
      <InputPercentage name={ "CDI (ao ano)" }/>
      <InputInteger name={ "Prazo (em meses)" }/>
      <CleanButton />
    </>
  );
}

export default App;
