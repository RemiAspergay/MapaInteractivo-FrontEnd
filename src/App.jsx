import LoginSignup from "./componentes/Login/LoginSignup";
import { Routes, Route } from "react-router-dom";
import "./App.css"

import Main from "./componentes/Main/Main";
import Nosotros from "./Pages/Nosotros";
import Ayudar from "./Pages/Ayudar";
import Mapa from "./Pages/Mapa";
import Region from "./Pages/Region";
import Parque from "./Pages/Parque";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Mapa />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Ayudar" element={<Ayudar />} />
          <Route path="/Login" element={<LoginSignup />} />
          <Route
            path="/Region/:id"
            element={<Region />}
          />
          <Route
            path="/Parque/:id"
            element={<Parque />}
          />
        </Routes>
      </Main>
      <footer>
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </footer>
    </>
  );
}

export default App;
