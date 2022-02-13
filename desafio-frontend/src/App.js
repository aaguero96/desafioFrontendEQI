import InputCurrency from './Components/InputCurrency';
import InputPercentage from './Components/InputPercentage';
import InputInteger from './Components/InputInteger'
import InputIncome from './Components/InputIncome';
import InputIndexing from './Components/InputIndexing';
import CleanButton from './Components/CleanButton';
import SelectFrequency from './Components/SelectFrequency';
import SelectPeriodicity from './Components/SelectPeriodicity';
import Simulation from './Components/Simulation';
import IndexingMessage from './Components/IndexingMessage';
import ValidationMessage from './Components/ValidationMessage';
import {
  validationCurrencies,
  validationInteger,
  validationPercentage,
} from './Functions/functions';
import './CSS/App.css';
import { logoURL } from './Images/logo.js';

function App() {
  return (
    <>
      <div className="header">
        <h1>Simulador de Investimentos</h1>
        <img className="logo" src={ logoURL }/>
      </div>
      <hr className="barra-divisoria"/>
      <CleanButton />
      <div className="container-principal">
        <div className="container-formulario">
          <div className="container-part1">
            <InputIncome />
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
          <div className="container-part2">
            <div>
                <InputIndexing />
                <IndexingMessage />
            </div>
            <div>
              <InputPercentage name={ "Rentabilidade" }/>
              <SelectFrequency name ={ "Rentabilidade" }/>
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
        <div className="container-indicadores">
        <Simulation />
        </div>
      </div>
    </>
  );
}

export default App;
