
import LoginSignup from "./componentes/Login/LoginSignup";
import { Routes, Route } from "react-router-dom";

import Main from "./componentes/Main/Main"
import NavBar from "./componentes/NavBar/NavBar";
import Nosotros from "./Pages/Nosotros";
import Ayudar from "./Pages/Ayudar";
import Mapa from "./Pages/Mapa";

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <Routes>
          <Route path="/" element={<Mapa />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Ayudar" element={<Ayudar />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
      </Main>
      <div className="footer">
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </div>
    </>
  );
}

export default App;
