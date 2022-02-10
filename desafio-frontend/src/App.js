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
import ValidationMessage from './Components/ValidationMessage';
import {
  validationCurrencies,
  validationInteger,
  validationPercentage,
} from './Functions/functions';
import './CSS/App.css';

function App() {
  return (
    <>
      <h1>Simulador de Investimentos</h1>
      <CleanButton />
      <div className="container-principal">
        <div className="container-formulario">
          <div className="container-valores">
            <InputIncome />
            <InputIndexing />
            <div>
              <InputCurrency name={ "Aporte Inicial" }/>
              <ValidationMessage name={ "Aporte Inicial" } validationFunction={ validationCurrencies }/>
            </div>
            <div>
              <InputCurrency name={ "Aporte Mensal" }/>
              <ValidationMessage name={ "Aporte Mensal" } validationFunction={ validationCurrencies }/>
            </div>
            <div>
              <InputInteger name={ "Prazo" }/>
              <SelectPeriodicity name={ "Prazo" } />
              <ValidationMessage name={ "Prazo" } validationFunction={ validationInteger }/>
            </div> 
          </div>
          <div className="container-porcentagens">
              <div>
                <InputPercentage name={ "Rentabilidade" }/>
                <SelectFrequency name ={ "Rentabilidade" }/>
                <IndexingMessage />
                <ValidationMessage name={ "Rentabilidade" } validationFunction={ validationPercentage }/>
              </div>
              <div>
                <InputPercentage name={ "IPCA" }/>
                <SelectFrequency name ={ "IPCA" }/>
                <ValidationMessage name={ "IPCA" } validationFunction={ validationPercentage }/>
              </div>
              <div>
                <InputPercentage name={ "CDI" }/>
                <SelectFrequency name ={ "CDI" }/>
                <ValidationMessage name={ "CDI" } validationFunction={ validationPercentage }/>
              </div> 
          </div>
        </div>
        <div container-indicadores>
          <SimulationButton />
        </div>
      </div>
    </>
  );
}

export default App;
