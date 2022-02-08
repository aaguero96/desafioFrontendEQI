import React from 'react';
import { getSimulationFromAPI } from '../Functions/functions';
import '../CSS/InputIndexing.css';
import { INITIAL_INDEXING } from '../Reducers/myReducer';
import { changeIndexingAction } from '../Actions';
import { connect } from 'react-redux';

class InputIndexing extends React.Component {
  constructor() {
    super();
    this.state = {
      indexingList: [],
      loadingList: true,
      selectedIndexing: INITIAL_INDEXING,
    };
  };

  requireSimulation = async () => {
    const simulationData = await getSimulationFromAPI();
    this.setState({
      loadingList: false,
      indexingList: simulationData
        .map((element) => element.tipoRendimento)
        .filter((element, index, arr) => arr.indexOf(element) === index),
    });
  };

  correctClass = (element) => {
    const { selectedIndexing } = this.state;
    const NON_SELECTED_CLASS = 'non-selected';
    const SELECTED_CLASS = 'selected';
    if (selectedIndexing === element) {
      return SELECTED_CLASS;
    }
    return NON_SELECTED_CLASS;
  };

  changeSelected = ({ target: { name } }) => {
    this.setState({
      selectedIndexing: name,
    });
    this.props.changeIndexing(name);
  };

  renderButtons = () => {
    const { indexingList, loadingList } = this.state;
    if (loadingList) {
      return (
        <span>Loading ...</span>
      )
    }
    return (
      indexingList.map((element) => (
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
  changeIndexing: (state) => dispatch(changeIndexingAction(state)),
});
export default connect(null, mapDispatchToProps)(InputIndexing);