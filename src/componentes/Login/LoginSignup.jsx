import { useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ruta = "http://localhost:8080/api";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [nombre, setNombre] = useState("");
  const [password, setPass] = useState("");
  const [correo, setCorreo] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Se crea login y se guarda en el local storage
    axios
      .get(`${ruta}/usuarios/correo/${correo}`, {
        nombre,
        password,
        correo,
      })
      .then((response) => {
        const usuarioJSON = JSON.stringify(response.data);
        localStorage.setItem("usuario", usuarioJSON); // Guarda en el local Storage
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    if (action === e) {
      if (e === "Sign Up") {
        // Se crea nuevo usuario
        axios
          .post(`${ruta}/usuarios/crear`, {
            nombre,
            password,
            correo,
          })
          .then((response) => {
            if (response.data) handleLogin();
          })
          .catch((error) => console.log(error));
      } else {
        handleLogin();
      }
    } else {
      setAction(e);
    }
  };

  /* useEffect(() => {
    console.log("hola");
    axios
      .post(ruta, {
        nombre: "Fiona",
        password: "fiona123",
        correo: "fiona@123.com",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []); */

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <input
            type="email"
            placeholder="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit pink" : "submit"}
            onClick={() => handleSubmit("Sign Up")}
          >
            Regístrate
          </div>
          <div
            className={action === "Login" ? "submit pink" : "submit"}
            onClick={() => handleSubmit("Login")}
          >
            Inicia Sesión
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
