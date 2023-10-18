import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Grafico from "./Grafico";
import GraficoArea from "./GraficoArea";
import { collection, query, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore"
import { bd } from "../firebase.jsx"
import React, { useState, useEffect } from 'react';



// Array
function gerarConsumoAleatorio() {
  return (Math.random() * (10 - 3) + 3).toFixed(2);
}

// Horas do dia
export const horasDoDia = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

// Cômodos
const comodos = ["sala", "quarto", "cozinha"];

// Objeto dados_consumo com todas as chaves
export const dados_consumo = [];

// faz as linhas da tabela
function renderRows(array) {
  return array.map((d) => {
    return (
      <tr key={d.id}>
        <td>{d.hora}</td>
        <td>{d.comodo}</td>
        <td>{d.consumo}</td>
      </tr>
    );
  });
}

function Dados() {

  const [nomes, setNomes] = useState([])

  useEffect(() => {
    const q = query(collection(bd, "usuarios"))
    onSnapshot(q, (QuerySnapshot) => {
      setNomes(QuerySnapshot.docs.map(doc => ({
        nomes: doc.data()
      })))
    })
  }, [])

  // Preenchendo o array com dados aleatórios
  let id = 1;
  for (let hora of horasDoDia) {
    for (let comodo of comodos) {
      const consumo = gerarConsumoAleatorio();
      dados_consumo.push({ id, hora, comodo, consumo: parseFloat(consumo) });
      id++;
    }
  }

  return (
    /*<dev>
      <div
        style={{
          // paddingLeft: "200px",
          // paddingRight: "200px",
          paddingTop: "50px",
        }}
      >
        <div
          className="container bg-white rounded "
          style={{
            paddingTop: "50px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          {/* Gráfico de Área *//*}

    <h2 style={{ textAlign: "center" }}>
      GRÁFICO DE CONSUMO DE ELETRICIDADE
    </h2>

    <div
      style={{
        // paddingLeft: "200px",
        // paddingRight: "200px",
        paddingBottom: "50px",
      }}
    >
      <GraficoArea />
    </div>

    {/* tabela *//*}
    <h2 style={{ textAlign: "center" }}>
      TABELA DE CONSUMO DE ELETRICIDADE
    </h2>
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Horas</th>
          <th>Cômodo</th>
          <th>Consumo (kwh)</th>
        </tr>
      </thead>
      <tbody>{renderRows(dados_consumo)}</tbody>
    </Table>
  </div>
</div>
</dev>
*/
    console.log(nomes)
  );
}

export default Dados;
