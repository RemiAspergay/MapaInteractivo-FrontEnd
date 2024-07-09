import { useState } from "react";
import "./App.css";
import Card from "./componentes/Card/Card";
import Registro from "./componentes/Registro/Registro";
import LoginSignup from "./componentes/Login/LoginSignup";
import { Routes, Route } from "react-router-dom";

import NavBar from "./componentes/NavBar/NavBar";
import Nosotros from "./Pages/Nosotros";
import Ayudar from "./Pages/Ayudar";
import Registro from "./Pages/Registro";
import Login from "./Pages/Login";
import Mapa from "./Pages/Mapa";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Ayudar" element={<Ayudar />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
