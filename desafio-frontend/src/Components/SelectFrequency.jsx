import React from 'react';
import { connect } from 'react-redux';
import { changeFrequencyAction } from '../Actions';

class SelectFrequency extends React.Component {
  constructor() {
    super();
  };

  option = {
    'mensal': 1,
    'anual': 12,
  };

  nameToKey = {
    'Rentabilidade': 'profitabilityFreq',
    'IPCA': 'ipcaFreq',
    'CDI': 'cdiFreq',
  };

  disableButton = () => {
    const { indexing, name } = this.props;
    if (indexing === 'pre' && name === 'Rentabilidade') {
      return true;
    }
    return false;
  };

  render() {
    const { frequency, name, changeFrequency } = this.props;
    const selectedElement = frequency[this.nameToKey[name]];
    return (
      <select
        disabled={ this.disableButton() }
        value={ selectedElement }
        onChange={ ({ target: { value } }) => changeFrequency(this.nameToKey[name], value) }
      >
        {
          Object.keys(this.option).map((element) => (
            <option key={ `${name}-${element}` } value={ element }>
              { element }
            </option>
          ))
        }
      </select>
    )
  }
};

const mapStateToProps = (state) => ({
  frequency: state.myReducer,
  indexing: state.myReducer.indexing,
});
const mapDispatchToProps = (dispatch) => ({
  changeFrequency: (key, state) => dispatch(changeFrequencyAction(key, state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectFrequency);
