import { ReactApexChart, ApexChart } from "react-apexcharts";
import Chart from "react-apexcharts";
import { Component } from "react";
import { info } from "./Dados.jsx";
/*
// obter dados por comodo
function obterValoresDeConsumoPorComodo(comodo) {
  return dados_consumo
    .filter((dados) => dados.comodo === comodo)
    .map((dados) => dados.consumo);
}

// Obtendo os valores de consumo para cada cômodo e combinando-os em um único array
const valoresSala = obterValoresDeConsumoPorComodo('sala');
const valoresQuarto = obterValoresDeConsumoPorComodo('quarto');
const valoresCozinha = obterValoresDeConsumoPorComodo('cozinha');*/

// obter series
function obterSeries(vetorDeMapas) {
  var series = [];
  vetorDeMapas.forEach((mapa) => {
    const comodo = mapa.comodo;
    
    if (!comodosUnicos.has(comodo)) {
      comodosUnicos.add(comodo);
      
      const dadosComodo = vetorDeMapas
        .filter((dados) => dados.comodo === comodo)
        .map((dados) => dados.gasto);
  
      series.push({
        name: comodo,
        data: dadosComodo,
      });
    }
  });
  console.log(series)
  return (series)
}
class GraficoArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: obterSeries(info),
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          //type: "time",
          categories: info.map((mapa) => mapa.data_hora),
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        {}
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default GraficoArea;
