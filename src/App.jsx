import { Routes, Route } from "react-router-dom";

import NavBar from "./componentes/NavBar/NavBar";
import Nosotros from "./pages/Nosotros";
import Ayudar from "./pages/Ayudar";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Mapa from "./pages/Mapa";

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
      <div className="footer">
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </div>
    </>
  );
}

export default App;
