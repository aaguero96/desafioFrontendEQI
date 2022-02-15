import React from 'react';
import '../CSS/IndexingMessage.css';
import { connect } from 'react-redux';

class IncomeMessage extends React.Component {
  constructor() {
    super();
  };

  message = () => {
    const { income } = this.props;
    if (income === 'bruto') return 'Não incluido IR';
    return 'Incluido IR';
  };

  render() {
    return (
      <p className="indexing-message">{ this.message() }</p>
    )
  }
};

const mapStateToProps = (state) => ({
  income: state.myReducer.income,
});
export default connect(mapStateToProps)(IncomeMessage);
