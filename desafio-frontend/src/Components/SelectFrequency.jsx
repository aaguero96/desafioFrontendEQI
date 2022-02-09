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
  }

  render() {
    return (
      <select>
        {
          Object.keys(this.option).map((element) => (
            <option value={ element }>
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
});
const mapDispatchToProps = (dispatch) => ({
  changeFrequency: (state) => dispatch(changeFrequencyAction(state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectFrequency);
