import React from 'react';
import { connect } from 'react-redux';
import {
  validationCurrencies,
  validationInteger,
  validationPercentage,
} from '../Functions/functions';

class SimulationButton extends React.Component {
  constructor() {
    super();
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
    return (
      <>
        <div>
          { `Contribuição Inicial: R$ ${inContribuition}` }
        </div>
        <div>
          { `Aporte Mensal: R$ ${mensalContribuition}` }
        </div>
        <div>
          { `Rentabilidade ${profitabilityFreq}: ${profitability} %` }
        </div>
        <div>
          { `IPCA ${ipcaFreq}: ${ipca} %` }
        </div>
        <div>
          { `CDI ${cdiFreq}: ${cdi} %` }
        </div>
      </>
    )
  }

  render() {
    return (
      <div>
        {
          this.validationFill() ? (
            this.showParameters()
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
export default connect(mapStateToProps)(SimulationButton);
