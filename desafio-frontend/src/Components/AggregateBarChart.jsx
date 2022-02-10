import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale)

class AggregateBarChart extends React.Component {
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
      deadLineInMonth,
      montlyContribuition,
    } = this.props;
    return ( 
      <div>
        <Bar
          width="600px"
          height="300%"
          data={ {
            labels: [...Array(deadLineInMonth + 1).keys()],
            datasets: [
              {
                backgroundColor:'blue',
                label: 'Com Aporte',
                data: this.data(montlyContribuition),
                grouped: true,
              },
              {
                backgroundColor:'red',
                label: 'Sem Aporte',
                data: this.data(0),
                grouped: true,
              },
            ]
          } }
          options={ {
            plugins: {
              title: {
                display: true,
                text: `Simulação de investimento com e sem aporte mensal de R$ ${parseFloat(montlyContribuition).toFixed(2)}.`,
              },
            },
            responsive: true,
          } }
        />
      </div>
    )
  }
};

export default AggregateBarChart;
