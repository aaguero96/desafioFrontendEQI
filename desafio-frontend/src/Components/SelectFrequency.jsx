import React from 'react';
import { changePercentageStateAction } from '../Actions';
import { connect } from 'react-redux';

class SelectFrequency extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name, changePercentageState, percentageState } = this.props;
    return (
      
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