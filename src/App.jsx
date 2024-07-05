import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";

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
    </>
  );
}

export default App;
