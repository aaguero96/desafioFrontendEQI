import React from 'react';
import { getSimulationFromAPI } from '../Functions/functions';
import '../CSS/InputIncome.css';

class InputIncome extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeList: [],
      loadingList: true,
      selectedIncome: 'bruto',
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
    console.log(name);
    this.setState({
      selectedIncome: name,
    });
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

export default InputIncome;