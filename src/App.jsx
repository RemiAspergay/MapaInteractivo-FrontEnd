import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Card from "./componentes/Card/Card";

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
      <Card 
        user="Jerome Bell"
        title="Constructive and destructive ways"
        time="2 horas 40 minutos"
        />
    </>
  );
}

export default App;
