import React from 'react';
import { connect } from 'react-redux';

class SelectFrequency extends React.Component {
  constructor() {
    super();
  };

  options = [
    'mensal',
    'anual',
  ]

  render() {
    return (
      <select>
        {
          this.options.map((element) => (
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