import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
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
            <input type="text" placeholder="Nombre" />
          </div>
        )}

        <div className="input">
          <input type="email" placeholder="correo" />
        </div>
        <div className="input">
          <input type="password" placeholder="contraseña" />
        </div>

        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit pink" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Regístrate
          </div>
          <div
            className={action === "Login" ? "submit pink" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Inicia Sesión
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
