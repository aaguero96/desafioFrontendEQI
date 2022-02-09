import React from 'react';
import '../CSS/InputIndexing.css';
import { connect } from 'react-redux';

class ValidationMessage extends React.Component {
  constructor() {
    super();
  };

  nameToKey = {
    'Aporte Inicial':'inContribuition',
    'Aporte Mensal':'mensalContribuition',
    'Rentabilidade':'profitability',
    'IPCA':'ipca',
    'CDI':'cdi',
    'Prazo':'deadlines',
  };

  message = () => {
    const { validationFunction, name, myReducer } = this.props;
    const value = myReducer[this.nameToKey[name]];
    const validation = validationFunction(value);
    if (!validation) return `O valor de ${name} deve ser um número valido`;
  };

  render() {
    return (
      <p>{ this.message() }</p>
    )
  }
};

const mapStateToProps = (state) => ({
  myReducer: state.myReducer,
});
export default connect(mapStateToProps)(ValidationMessage);