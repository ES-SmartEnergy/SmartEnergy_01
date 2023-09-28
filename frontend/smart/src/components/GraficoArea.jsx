import { ReactApexChart, ApexChart } from "react-apexcharts";
import Chart from 'react-apexcharts'
import { Component } from "react";
import {dados_consumo, horasDoDia} from "./Dados.jsx"
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

class GraficoArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sala",
          data: dados_consumo
          .filter((dados) => dados.comodo === 'sala')
          .map((dados) => dados.consumo),
        },
        {
          name: "Quarto",
          data: dados_consumo
          .filter((dados) => dados.comodo === 'quarto')
          .map((dados) => dados.consumo),
        },
        {
          name: "Cozinha",
          data: dados_consumo
          .filter((dados) => dados.comodo === 'cozinha')
          .map((dados) => dados.consumo),
        },
        /*{
          name: "Consumo Total",
          data: dados_consumo
          .filter((dados) => dados.comodo === 'sala')
          .map((dados) => dados.consumo) + 
          dados_consumo
          .filter((dados) => dados.comodo === 'quarto')
          .map((dados) => dados.consumo) + 
          dados_consumo
          .filter((dados) => dados.comodo === 'cozinha')
          .map((dados) => dados.consumo),
        },*/
      ],
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
          categories: horasDoDia,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
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
