import React from 'react';
import InputCurrency from './InputCurrency';
import InputPercentage from './InputPercentage';
import InputInteger from './InputInteger'
import InputIncome from './InputIncome';
import InputIndexing from './InputIndexing';
import SelectFrequency from './SelectFrequency';
import SelectPeriodicity from './SelectPeriodicity';
import IndexingMessage from './IndexingMessage';
import ValidationMessage from './ValidationMessage';
import {
  validationCurrencies,
  validationInteger,
  validationPercentage,
} from '../Functions/functions';
import IncomeMessage from './IncomeMessage';

class Form extends React.Component {
  constructor() {
    super();
  };

  render() {
    return ( 
      <div className="container-formulario">
        <div className="container-part1">
          <div>
            <InputIncome />
            <IncomeMessage />
          </div>
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
    )
  }
};

export default Form;
