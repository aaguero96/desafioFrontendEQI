import React from 'react';
import { changeCurrencyStateAction } from '../Actions';
import { connect } from 'react-redux';

const nameToKey = {
  'Aporte Inicial': 'inContribuition',
  'Aporte Mensal': 'mensalContribuition',
};

class InputCurrency extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name, changeCurrencyState, currencyState } = this.props;
    return (
      <label htmlFor={ name }>
        <h3>{ name }</h3>
        <input
          value={ currencyState[nameToKey[name]] }
          onChange={ ({ target: { value } }) => changeCurrencyState(nameToKey[name], value) }
          type="text"
          name={ name }
          id={ name }
        />
      </label>
    )
  }
};

const mapStateToProps = (state) => ({
  currencyState: state.myReducer,
});
const mapDispatchToProps = (dispatch) => ({
  changeCurrencyState: (key, state) => dispatch(changeCurrencyStateAction(key, state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputCurrency);
