import React from 'react';
import { changePercentageStateAction } from '../Actions';
import { connect } from 'react-redux';
import '../CSS/Input.css';

const nameToKey = {
  'Rentabilidade': 'profitability',
  'IPCA': 'ipca',
  'CDI': 'cdi',
};

class InputPercentage extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name, changePercentageState, percentageState } = this.props;
    return (
      <label htmlFor={ name }>
        <h3>{ name }</h3>
        <span>%</span>
        <input
          className="input"
          value={ percentageState[nameToKey[name]] }
          onChange={ ({ target: { value } }) => changePercentageState(nameToKey[name], value) }
          type="text" 
          name={ name }
          id={ name }
        />
      </label>
    )
  }
};

const mapStateToProps = (state) => ({
  percentageState: state.myReducer,
});
const mapDispatchToProps = (dispatch) => ({
  changePercentageState: (key, state) => dispatch(changePercentageStateAction(key, state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputPercentage);
