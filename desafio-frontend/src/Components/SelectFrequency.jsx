import React from 'react';
import { connect } from 'react-redux';

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

// const mapStateToProps = (state) => ({
//   percentageState: state.myReducer,
// });
// const mapDispatchToProps = (dispatch) => ({
//   changePercentageState: (state) => dispatch(changePercentageStateAction(state)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(SelectFrequency);

export default SelectFrequency;