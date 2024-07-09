import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Registro from "./componentes/Registro/Registro";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <>
      <div className="rounded">
        <div className="title">EndemiMapa</div>
        <div className="subtitle">
          Mapa interactivo de parques nacionales y fauna endémica chilena
        </div>
      </div>
      <NavBar />
      <Registro />
    </>
  );
}

export default App;
