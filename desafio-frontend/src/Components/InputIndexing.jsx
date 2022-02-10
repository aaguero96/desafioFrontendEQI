import React from 'react';
import { getSimulationFromAPI } from '../Functions/functions';
import '../CSS/InputIndexing.css';
import '../CSS/Selector.css';
import { changeIndexingAction } from '../Actions';
import { connect } from 'react-redux';

class InputIndexing extends React.Component {
  constructor() {
    super();
    this.state = {
      indexingList: [],
      loadingList: true,
    };
  };

  requireSimulation = async () => {
    const simulationData = await getSimulationFromAPI();
    this.setState({
      loadingList: false,
      indexingList: simulationData
        .map((element) => element.tipoIndexacao)
        .filter((element, index, arr) => arr.indexOf(element) === index),
    });
  };

  correctClass = (element) => {
    const { selectedIndexing } = this.props;
    const NON_SELECTED_CLASS = 'non-selected';
    const SELECTED_CLASS = 'selected';
    if (selectedIndexing === element) {
      return SELECTED_CLASS;
    }
    return NON_SELECTED_CLASS;
  };

  changeSelected = ({ target: { name } }) => {
    const { changeIndexing } = this.props;
    changeIndexing(name);
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
          key={ `Indexacao: ${element}` }
          type="button"
          name={ element }
          className={ `${this.correctClass(element)} selector` }
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
        <h3>Indexação</h3>
        { this.renderButtons() }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  selectedIndexing: state.myReducer.indexing,
});
const mapDispatchToProps = (dispatch) => ({
  changeIndexing: (state) => dispatch(changeIndexingAction(state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputIndexing);
