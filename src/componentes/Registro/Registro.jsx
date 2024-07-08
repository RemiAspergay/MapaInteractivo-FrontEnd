import "./Registro.css";
import { useState } from "react";

function Registro() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "" || contraseña === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <section>
      <div className="rounded">
        <h2>Registro</h2>
        <form className="Formulario" onSubmit={handleSubmit}>
          <h3>Nombre de Usuario</h3>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <h3>Contraseña</h3>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button>Completar registro</button>
        </form>
      </div>
      {error && <p>Todos los campos deben llenarse</p>}
    </section>
  );
}
export default Registro;
