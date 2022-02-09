import InputCurrency from './Components/InputCurrency';
import InputPercentage from './Components/InputPercentage';
import InputInteger from './Components/InputInteger'
import InputIncome from './Components/InputIncome';
import InputIndexing from './Components/InputIndexing';
import CleanButton from './Components/CleanButton';
import SelectFrequency from './Components/SelectFrequency';
import SelectPeriodicity from './Components/SelectPeriodicity';
import SimulationButton from './Components/SimulationButton';
import IndexingMessage from './Components/IndexingMessage';

function App() {
  return (
    <>
      <h1>Simulador de Investimentos</h1>
      <InputIncome />
      <InputIndexing />
      <InputCurrency name={ "Aporte Inicial" }/>
      <InputCurrency name={ "Aporte Mensal" }/>
      <div>
        <InputPercentage name={ "Rentabilidade" }/>
        <SelectFrequency name ={ "Rentabilidade" }/>
        <IndexingMessage />
      </div>
      <div>
        <InputPercentage name={ "IPCA" }/>
        <SelectFrequency name ={ "IPCA" }/>
      </div>
      <div>
        <InputPercentage name={ "CDI" }/>
        <SelectFrequency name ={ "CDI" }/>
      </div>
      <div>
        <InputInteger name={ "Prazo" }/>
        <SelectPeriodicity name={ "Prazo" } />
      </div>  
      <CleanButton />
      <SimulationButton />
    </>
  );
}

export default App;
