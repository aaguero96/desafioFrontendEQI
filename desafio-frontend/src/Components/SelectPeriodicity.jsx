import React from 'react';
import { connect } from 'react-redux';
import { changePeriodicityAction } from '../Actions';

class SelectPeriodicity extends React.Component {
  constructor() {
    super();
  };

  option = {
    'meses': 1,
    'anos': 12,
  };

  nameToKey = {
    'Prazo': 'deadLinePeriodicity',
  }

  render() {
    const { periodicity, name, changePeriodicity } = this.props;
    const selectedElement = periodicity[this.nameToKey[name]];
    return (
      <select
        value={ selectedElement }
        onChange={ ({ target: { value } }) => changePeriodicity(this.nameToKey[name], value) }
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
  periodicity: state.myReducer,
});
const mapDispatchToProps = (dispatch) => ({
  changePeriodicity: (key, state) => dispatch(changePeriodicityAction(key, state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriodicity);
