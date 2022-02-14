import React from 'react';
import { connect } from 'react-redux';
import {
  validationCurrencies,
  validationInteger,
  validationPercentage,
} from '../Functions/functions';
import AggregateBarChart from './AggregateBarChart';
import '../CSS/BarChart.css';
import Indicators from './Indicators';

class Simulation extends React.Component {
  constructor() {
    super();
  };

  frequencyObject = {
    'mensal': 1,
    'anual': 12,
  };

  periodicityObject = {
    'meses': 1,
    'anos':12,
  };

  interestRateByMonth = () => {
    const { myReducer: {
      indexing,
      profitability,
      profitabilityFreq,
      cdi,
      cdiFreq,
      ipca,
      ipcaFreq,
    } } = this.props;
    const profiabilityByMonth = Math.pow(1 + profitability/100, 1/this.frequencyObject[profitabilityFreq]) - 1;
    const cdiByYear = Math.pow(1 + cdi/100, 12/this.frequencyObject[cdiFreq]) - 1;
    const ipcaByYear = Math.pow(1 + ipca/100, 12/this.frequencyObject[ipcaFreq]) - 1;
    const profiabilityByYear = Math.pow(1 + profiabilityByMonth, 12) - 1;
    if (indexing === 'pre') {
      return profiabilityByMonth;
    }
    if (indexing === 'pos') {
      const newProfiabilityByYear = cdiByYear * (1 + profitability/100);
      return Math.pow(1 + newProfiabilityByYear, 1/12) - 1;
    }
    if (indexing === 'ipca') {
      const newProfiabilityByYear = ipcaByYear + profiabilityByYear;
      return Math.pow(1 + newProfiabilityByYear, 1/12) - 1;
    }
  };

  validationFill = () => {
    const { myReducer: {
      inContribuition,
      mensalContribuition,
      profitability,
      ipca,
      cdi,
      deadlines,
    } } = this.props;
    let validation = validationCurrencies(inContribuition);
    validation &&= validationCurrencies(mensalContribuition);
    validation &&= validationPercentage(profitability);
    validation &&= validationPercentage(ipca);
    validation &&= validationPercentage(cdi);
    validation &&= validationInteger(deadlines);
    return validation;
  };

  showParameters = () => {
    const { myReducer: {
      inContribuition,
      mensalContribuition,
      profitability,
      profitabilityFreq,
      ipca,
      ipcaFreq,
      cdi,
      cdiFreq,
    } } = this.props;
    const rateByMonth = this.interestRateByMonth();
    const rateByYear = Math.pow(1 + rateByMonth, 12) - 1;
    return (
      <div className="parametros">
        <div>
          { `Juros Real Mensal: ${(rateByMonth*100).toFixed(2)} %` }
        </div>
        <div>
          { `Juros Real Anual: ${(rateByYear*100).toFixed(2)} %` }
        </div>
      </div>
    )
  }

  deadlineInMonth = () => {
    const { myReducer: {
      deadlines,
      deadLinePeriodicity,
    } } = this.props;
    return deadlines * this.periodicityObject[deadLinePeriodicity];
  }

  render() {
    const { myReducer: {
      inContribuition,
      mensalContribuition,
    } } = this.props;
    return (
      <div>
        {
          this.validationFill() ? (
            <div>
              { this.showParameters() }
                <Indicators
                    interestRateByMonth={ this.interestRateByMonth() }
                    deadLineInMonth={ this.deadlineInMonth() }
                    inContribuition={ inContribuition }
                    montlyContribuition={ mensalContribuition }
                  />
              <div className="bar-chart">
                <AggregateBarChart
                  interestRateByMonth={ this.interestRateByMonth() }
                  deadLineInMonth={ this.deadlineInMonth() }
                  inContribuition={ inContribuition }
                  montlyContribuition={ mensalContribuition }
                />
              </div>
            </div>
          ) : (
            <span>Preencha os campos ao lado</span>
          )
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  myReducer: state.myReducer,
});
export default connect(mapStateToProps)(Simulation);
