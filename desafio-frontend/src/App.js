import React from 'react';
import CleanButton from './Components/CleanButton';
import Simulation from './Components/Simulation';
import Form from './Components/Form';
import './CSS/App.css';
import { logoURL } from './Images/logo.js';
import { connect } from 'react-redux';
import { toInitialValues } from './Actions';
import { getIndicatorsFromAPI, getSimulationFromAPI } from './Functions/functions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  };

  requireSimulation = async () => {
    const indicatorsData = await getIndicatorsFromAPI();
    const simulationData = await getSimulationFromAPI();
    const valor0 = simulationData[0].graficoValores.comAporte[0];
    const valor1 = simulationData[0].graficoValores.comAporte[1];
    const diff = valor1 - valor0;
    const diffLength = diff.toFixed(0).toString().length;
    const decimalAproximation = 10 ** (diffLength - 1);
    const action = {
      inContribuition: simulationData[0].valorTotalInvestido,
      mensalContribuition: Math.round(diff/decimalAproximation) * decimalAproximation,
      profitability: 10,
      ipca: indicatorsData.find(({ nome }) => nome === 'ipca').valor,
      cdi: indicatorsData.find(({ nome }) => nome === 'cdi').valor,
      deadlines: Object.keys(simulationData[0].graficoValores.comAporte).length - 1,
    };
    const { toInitialValues } = this.props;
    toInitialValues(action);
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.requireSimulation();
  }

  render () {
    const { loading } = this.state;
    return (
      loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="header">
            <h1>Simulador de Investimentos</h1>
            <img className="logo" src={ logoURL }/>
          </div>
          <hr className="barra-divisoria"/>
          <CleanButton />
          <div className="container-principal">
            <Form />
            <div className="container-indicadores">
            <Simulation />
            </div>
          </div>
        </>
      )
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toInitialValues: (state) => dispatch(toInitialValues(state)),
});
export default connect(null, mapDispatchToProps)(App);
