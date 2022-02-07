import React from 'react';
// import { connect } from 'react-redux';

class InputCurrency extends React.Component {
  constructor() {
    super();
  };
  render() {
    const { name } = this.props;
    return (
      <label htmlFor={ name }>
        <h3>{ name }</h3>
        <input
          type="text"
          name={ name }
          id={ name }
        />
      </label>
    )
  }
};

// const mapStateToProps = (state) => ({});
// const mapDispatchToProps = (dispatch) => ({})
// export default connect(mapStateToProps, mapDispatchToProps)(InputCurrency);

export default InputCurrency;
