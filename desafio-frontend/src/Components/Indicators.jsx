import React from 'react';
import '../CSS/Indicators.css';

class Indicators extends React.Component {
  constructor() {
    super();
  };

  data = (montlyContribuition) => {
    const {
      interestRateByMonth,
      deadLineInMonth,
      inContribuition,
    } = this.props;
    const data = [parseFloat(inContribuition)];
    let valor = data[0];
    let juros = 0;
    let adicionado = 0;
    for (let i = 1; i <= deadLineInMonth; i += 1) {
      juros = valor * interestRateByMonth;
      adicionado = parseFloat(montlyContribuition);
      valor = valor + juros + adicionado;
      data.push(valor);
    };
    return data;
  };

  render() {
    const {
      montlyContribuition,
      inContribuition,
      deadLineInMonth,
    } = this.props;
    const dataWithMensalContribuition = this.data(montlyContribuition);
    const grossFinalValue = dataWithMensalContribuition[dataWithMensalContribuition.length - 1];
    const investedTotalValue = parseFloat(inContribuition) + montlyContribuition * deadLineInMonth;
    const valueOfIR = (grossFinalValue - parseFloat(inContribuition)) * 0.2;
    const netFinalValue = grossFinalValue - valueOfIR;
    const totalGain = netFinalValue - inContribuition;
    return ( 
      <div className="indicadores">
        <div className="indicadores-cards">
          <h4>Valor final bruto</h4>
          <p>{ `R$ ${grossFinalValue.toFixed(2)}` }</p>
        </div>
        <div className="indicadores-cards">
          <h4>Valor total investido</h4>
          <p>{ `R$ ${investedTotalValue.toFixed(2)}` }</p>
        </div>
        <div className="indicadores-cards"> 
          <h4>Aliquota IR</h4>
          <p>{ `${20} %` }</p>
        </div>
        <div className="indicadores-cards">
          <h4>Valor pago IR</h4>
          <p>{ `R$ ${valueOfIR.toFixed(2)}` }</p>
        </div>
        <div className="indicadores-cards">
          <h4>Valor final liquido</h4>
          <p>{ `R$ ${netFinalValue.toFixed(2)}` }</p>
        </div>
        <div className="indicadores-cards">
          <h4>Ganho liquido</h4>
          <p>{ `R$ ${totalGain.toFixed(2)}` }</p>
        </div>
      </div>
    )
  }
};

export default Indicators;
