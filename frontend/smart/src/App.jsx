import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import Home from "./components/Home";
import Dados from "./components/Dados";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav variant="underline">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dados">Dados</Nav.Link>
            </Nav.Item>
          </Nav>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dados" element={<Dados />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
