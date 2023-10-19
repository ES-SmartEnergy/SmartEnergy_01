import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Grafico from "./Grafico";
import GraficoArea from "./GraficoArea";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { bd } from "../firebase.jsx";
import React, { useState, useEffect } from "react";

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

// Objeto dados_consumo com todas as chaves
export const dados_consumo = [];

// faz as linhas da tabela
/*function renderRows(array) {
  return array.map((d) => {
    return (
      <tr>
        <td>{d.data_hora.hora}</td>
        <td>{d.comodo}</td>
        <td>{d.gasto}</td>
      </tr>
    );
  });
}*/

function renderRows(array) {
  const rows = [];

  for (let i = 0; i < array.length; i++) {
    const d = array[i];
    rows.push(
      <tr key={i}>
        <td>{d.data_hora.hora}</td>
        <td>{d.comodo}</td>
        <td>{d.gasto}</td>
      </tr>
    );
  }

  return rows;
}

function extrairDataEHora(data_hora) {
  // Converte os segundos e nanossegundos em milissegundos
  const milissegundos =
    data_hora.seconds * 1000 + data_hora.nanoseconds / 1000000;

  // Cria um objeto Date com os milissegundos
  const dia = new Date(milissegundos);

  // Formata a data e hora em um formato legível
  return { data: dia.toLocaleDateString(), hora: dia.toLocaleTimeString() };
}

function Dados() {
  const [documento, setDocumento] = useState([]);

  useEffect(() => {
    const q = query(collection(bd, "usuarios"));
    onSnapshot(q, (QuerySnapshot) => {
      const dados = QuerySnapshot.docs.map((doc) => ({
        arquivo: doc.data(),
      }));
      for (const item of dados[0].arquivo.consumo) {
        item.data_hora = extrairDataEHora(item.data_hora);
      }
      setDocumento(dados[0].arquivo);
    });
  }, []);

  return (
    <dev>
      {console.log(documento.consumo) }
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
          {/* Gráfico de Área */ }

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

          {/* tabela */ }
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
            <tbody>{renderRows(documento.consumo)}</tbody>
          </Table>
        </div>
      </div>

    </dev>
  );
}

export default Dados;
