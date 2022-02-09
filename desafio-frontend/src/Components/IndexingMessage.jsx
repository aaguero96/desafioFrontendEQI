import React from 'react';
import '../CSS/InputIndexing.css';
import { connect } from 'react-redux';

class IndexingMessage extends React.Component {
  constructor() {
    super();
  };

  message = () => {
    const { indexing } = this.props;
    if (indexing === 'pre') return 'Juros total no periodo';
    if (indexing === 'pos') return 'Juros acrescidos do CDI: e.g.:(1+J%).CDI';
    return 'Juros acrescidos do IPCA: e.g.:J% + CDI';
  };

  render() {
    return (
      <p>{ this.message() }</p>
    )
  }
};

const mapStateToProps = (state) => ({
  indexing: state.myReducer.indexing,
});
export default connect(mapStateToProps)(IndexingMessage);
