import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Card from "./componentes/Card/Card";

function App() {
  return (
    <>
      <NavBar />
      <div className="footer">
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </div>
    </>
  );
}

export default App;
