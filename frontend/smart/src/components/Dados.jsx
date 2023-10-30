import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Grafico from "./Grafico";
import GraficoArea from "./GraficoArea";
import axios from "axios"
import React, { useState, useEffect } from "react";

export var info = [];

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

  const getDocumento = async () => {
    try {
      const res = await axios.get("http://localhost:3000/dados");
      setDocumento(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getDocumento();
  }, [setDocumento]);
  /*const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);*/

  /*const getDocumento = async () => {
    const q = query(collection(bd, "usuarios"));
    var aux = true;

    onSnapshot(q, (QuerySnapshot) => {
      const dados = QuerySnapshot.docs.map((doc) => ({
        arquivo: doc.data(),
      }));

      info = dados[0].arquivo;
      setDocumento(info);
    });
  };
  
  useEffect(() => {
    getDocumento();
  }, [setDocumento]);*/


  return (
    <dev>
      {console.log(documento)}
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
          {/* Gráfico de Área */}

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

          {/* tabela */
          /*}
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
          {*/}
        </div>
      </div>
    </dev>
  );
}

export default Dados;
