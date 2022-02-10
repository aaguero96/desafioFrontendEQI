import React from 'react';
import { connect } from 'react-redux';
import { changePeriodicityAction } from '../Actions';
import '../CSS/DropDown.css';

class SelectPeriodicity extends React.Component {
  constructor() {
    super();
  };

  option = [
    'meses',
    'anos',
  ];

  nameToKey = {
    'Prazo': 'deadLinePeriodicity',
  }

  render() {
    const { periodicity, name, changePeriodicity } = this.props;
    const selectedElement = periodicity[this.nameToKey[name]];
    return (
      <select
        className="dropdown"
        value={ selectedElement }
        onChange={ ({ target: { value } }) => changePeriodicity(this.nameToKey[name], value) }
      >
        {
          this.option.map((element) => (
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
