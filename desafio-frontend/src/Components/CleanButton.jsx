import React from 'react';

class CleanButton extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name, changePercentageState, percentageState } = this.props;
    return (
      <button
        type="button"
      >
        Limpar Campos
      </button>
    )
  }
};

export default CleanButton;
