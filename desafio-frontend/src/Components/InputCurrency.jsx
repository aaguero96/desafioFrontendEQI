import React from 'react';
import { changeCurrencyStateAction } from '../Actions';
import { connect } from 'react-redux';

const nameToKey = {
  'Aporte Inicial': 'inContribuition',
};

class InputCurrency extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name, changeCurrencyState } = this.props;
    return (
      <label htmlFor={ name }>
        <h3>{ name }</h3>
        <input
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
  inContribuition: state.myReducer.inContribuition,
});
const mapDispatchToProps = (dispatch) => ({
  changeCurrencyState: (key, state) => dispatch(changeCurrencyStateAction(key, state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputCurrency);
