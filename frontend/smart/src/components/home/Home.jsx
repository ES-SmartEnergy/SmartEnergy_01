import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import { uid } from "../login/Login";

function Home() {
  const [documento, setDocumento] = useState([]);
  //const [] // continuar daq

  const getDocumento = async () => {
    axios
      .post("http://localhost:3000/dados", {
        uid,
      })
      .then((response) => {
        console.log("Sucesso:", response);
        setDocumento(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDocumento();
  }, [setDocumento]);

  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: "10px",
        }}
      >
        {documento.length == 0 ? (
          <div>
            {" "}
            <p>Aguardando</p>
          </div>
        ) : (
          <div>
            <div
              className="container bg-white rounded "
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "50px",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <h1>Olá {documento.nome}, espero que você esteja legal!</h1>

              <h2 style={{ textAlign: "center" }}>
                GRÁFICO DA MÉDIA DE CONSUMO DE ELETRICIDADE
              </h2>

              <div
                style={{
                  // paddingLeft: "200px",
                  // paddingRight: "200px",
                  paddingBottom: "50px",
                }}
              >
                <GraficoArea documento={documento} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
