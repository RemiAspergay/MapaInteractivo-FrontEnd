import LoginSignup from "./componentes/Login/LoginSignup";
import { Routes, Route } from "react-router-dom";

import Main from "./componentes/Main/Main";
import NavBar from "./componentes/NavBar/NavBar";
import Nosotros from "./Pages/Nosotros";
import Ayudar from "./Pages/Ayudar";
import Mapa from "./Pages/Mapa";
import Region from "./Pages/Region";

function App() {
  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <Registro />
=======
      <Main>
        <Routes>
          <Route path="/" element={<Mapa />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Ayudar" element={<Ayudar />} />
          <Route path="/Login" element={<LoginSignup />} />
          <Route path="/Region/:id" element={<Region />} />
        </Routes>
      </Main>
>>>>>>> 10cb15b3baa7b21e0d91ef862ccb7deab14fc22e
      <div className="footer">
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </div>
    </>
  );
}

export default App;
