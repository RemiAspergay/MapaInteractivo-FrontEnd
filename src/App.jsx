import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Registro from "./componentes/Registro/Registro";

function App() {
  return (
    <>
      <NavBar />
      <Registro />
      <div className="footer">
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </div>
    </>
  );
}

export default App;
