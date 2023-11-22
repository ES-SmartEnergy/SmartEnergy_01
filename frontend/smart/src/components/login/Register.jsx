import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("batata@cenoura.com");
  const [senha, setSenha] = useState("macaverde");
  const [nome, setNome] = useState("Lucas");
  const navigate = useNavigate();

  const registrar = (uid) => {
    axios
      .post("http://localhost:3000/criardocumeto", {
        nome,
        uid,
      })
      .then((response) => {
        alert("Tudo certo, você já pode se logar!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Falha: ", error);
        // Lógica adicional em caso de erro
      });
  };

  function handleSignIn(e) {
    e.preventDefault();

    console.log(email, senha, nome);

    // Enviar dados usando axios.post
    axios
      .post("http://localhost:3000/registrar", {
        email,
        senha,
        nome,
      })
      .then((response) => {
        console.log("Sucesso:", response);
        registrar(response.data);
      })
      .catch((error) => {
        console.log(error);
        // Lógica adicional em caso de erro
      });
  }

  function handleBack(e) {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            textAlign: "center",
          }}
          className="container"
        >
          <header
            style={{
              fontSize: "50px",
              color: "blue",
              paddingBottom: "15%",
            }}
            className="header"
          >
            <span>Cadastro</span>
          </header>

          <form>
            <div
              style={{
                marginBottom: "30px",
              }}
              className="inputContainer"
            >
              <label htmlFor="text">Nome</label>
              <br></br>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="text"
                name="nome"
                id="nome"
                placeholder="Joaquinaldo"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div
              style={{
                marginBottom: "30px",
              }}
              className="inputContainer"
            >
              <label htmlFor="email">E-mail</label>
              <br></br>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="text"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div
              style={{
                marginBottom: "30px",
              }}
              className="inputContainer"
            >
              <label htmlFor="password">Senha</label>
              <br></br>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="password"
                name="password"
                id="password"
                placeholder="senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              style={{
                margin: "10px",
                backgroundColor: "olive",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              className="button"
              onClick={handleBack}
            >
              Voltar
            </button>

            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              className="button"
              onClick={handleSignIn}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
