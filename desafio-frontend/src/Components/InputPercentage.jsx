import React from 'react';
import { changePercentageStateAction } from '../Actions';
import { connect } from 'react-redux';

const nameToKey = {
  'Aporte Inicial': 'inContribuition',
  'Aporte Mensal': 'mensalContribuition',
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
        <input
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