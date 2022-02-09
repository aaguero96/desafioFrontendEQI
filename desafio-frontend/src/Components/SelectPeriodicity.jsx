import React from 'react';
import { connect } from 'react-redux';

class SelectPeriodicity extends React.Component {
  constructor() {
    super();
  };

  option = {
    'meses': 1,
    'anos': 12,
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
// export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriodicity);

export default SelectPeriodicity;