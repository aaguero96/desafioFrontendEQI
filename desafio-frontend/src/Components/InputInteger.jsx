import React from 'react';
import { changeIntegerStateAction } from '../Actions';
import { connect } from 'react-redux';

const nameToKey = {
  'Prazo': 'deadlines',
};

class InputInteger extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name, changeIntegerState, integerState } = this.props;
    return (
      <label htmlFor={ name }>
        <h3>{ name }</h3>
        <input
          value={ integerState[nameToKey[name]] }
          onChange={ ({ target: { value } }) => changeIntegerState(nameToKey[name], value) }
          type="text" 
          name={ name }
          id={ name }
        />
      </label>
    )
  }
};

const mapStateToProps = (state) => ({
  integerState: state.myReducer,
});
const mapDispatchToProps = (dispatch) => ({
  changeIntegerState: (key, state) => dispatch(changeIntegerStateAction(key, state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputInteger);
