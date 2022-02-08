import React from 'react';
import { cleanStatesAction } from '../Actions';
import { connect } from 'react-redux';

class CleanButton extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { cleanStates } = this.props;
    return (
      <button
        type="button"
        onClick={ cleanStates }
      >
        Limpar Campos
      </button>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  cleanStates: () => dispatch(cleanStatesAction()),
});
export default connect(null, mapDispatchToProps)(CleanButton);
