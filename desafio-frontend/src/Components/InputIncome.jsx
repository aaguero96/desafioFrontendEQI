import React from 'react';
import { getSimulationFromAPI } from '../Functions/functions';
import '../CSS/InputIncome.css';
import { INITIAL_STATE } from '../Reducers/myReducer';
import { changeIncomeAction } from '../Actions';
import { connect } from 'react-redux';

class InputIncome extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeList: [],
      loadingList: true,
      selectedIncome: INITIAL_STATE.income,
    };
  };

  requireSimulation = async () => {
    const simulationData = await getSimulationFromAPI();
    this.setState({
      loadingList: false,
      incomeList: simulationData
        .map((element) => element.tipoRendimento)
        .filter((element, index, arr) => arr.indexOf(element) === index),
    });
  };

  correctClass = (element) => {
    const { selectedIncome } = this.state;
    const NON_SELECTED_CLASS = 'non-selected';
    const SELECTED_CLASS = 'selected';
    if (selectedIncome === element) {
      return SELECTED_CLASS;
    }
    return NON_SELECTED_CLASS;
  };

  changeSelected = ({ target: { name } }) => {
    this.setState({
      selectedIncome: name,
    });
    this.props.changeIncome(name);
  };

  renderButtons = () => {
    const { incomeList, loadingList } = this.state;
    if (loadingList) {
      return (
        <span>Loading ...</span>
      )
    }
    return (
      incomeList.map((element) => (
        <button
          key={ `Rendimento: ${element}` }
          type="button"
          name={ element }
          className={ this.correctClass(element) }
          onClick={ this.changeSelected }
        >
          {element}
        </button>
      ))
    )
  };

  componentDidMount() {
    this.requireSimulation();
  }

  render() {
    return (
      <div>
        <h3>Rendimento</h3>
        { this.renderButtons() }
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeIncome: (state) => dispatch(changeIncomeAction(state)),
});
export default connect(null, mapDispatchToProps)(InputIncome);
