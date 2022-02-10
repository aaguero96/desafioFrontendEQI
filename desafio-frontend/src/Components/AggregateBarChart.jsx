import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale)

class AggregateBarChart extends React.Component {
  constructor() {
    super();
  };

  MonthObject = {
    0: 'jan',
    1: 'fev',
    2: 'mar',
    3: 'abr',
    4: 'mai',
    5: 'jun',
    6: 'jul',
    7: 'ago',
    8: 'set',
    9: 'out',
    10: 'nov',
    11: 'dez',
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

  labels = () => {
    const {
      deadLineInMonth,
    } = this.props;
    const now = new Date(Date.now());
    let year = now.getFullYear();
    const month = now.getMonth();
    return [...Array(deadLineInMonth + 1).keys()]
      .map((element) => {
        const newMonth = (month + element) % 12;
        if (newMonth === 0) {
          year = year + 1;
        }
        return `${this.MonthObject[newMonth]}/${year.toString().substring(2, 4)}`;
      });
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
            labels: this.labels(),
            datasets: [
              {
                backgroundColor:'#ED8E53',
                label: 'Com Aporte',
                data: this.data(montlyContribuition),
                grouped: true,
              },
              {
                backgroundColor:'#151B1E',
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
