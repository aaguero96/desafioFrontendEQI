import React from 'react';
import { connect } from 'react-redux';

class SimulationButton extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { myReducer: {
      inContribuition,
    } } = this.props;
    return (
      <div>
        <div>
          { `Contribuição Inicial: R$ ${inContribuition}` }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  myReducer: state.myReducer,
});
export default connect(mapStateToProps)(SimulationButton);
