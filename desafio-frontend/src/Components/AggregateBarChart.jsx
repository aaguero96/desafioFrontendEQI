import React from 'react';
import { connect } from 'react-redux';

class AggregateBarChart extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
    )
  }
};

const mapStateToProps = (state) => ({
  myReducer: state.myReducer,
});
export default connect(mapStateToProps)(AggregateBarChart);
