{/*import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>Quiénes somos</li>
        <li>Cómo ayudar</li>
        <li>Registrarse</li>
      </ul>
    </div>
  );
}

export default NavBar;*/}

import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/wina.svg";
import { Link } from "react-router-dom";

//div.nav-login-cart>buttom = Acceso rapido de Emmet para crear el div con className AUTOMATICO y un button dentro

function NavBar() {
  /* HOOK  useState
  const [NombreVar, function modificadoraDeVariable) = useState(valor inicial variable)] 
  La convencion es que la funcion modificadora de varible se le anteponga un set. + nombre de la variable, todo junto y usando camelCase*/
  const [menu, setMenu] = useState("Mapa");
  {
    /* tienda como parametro de useState es el valor inicial que tendra la pagina web cuando ingresemos a ella */
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Endemimapa</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Mapa")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Mapa
            {/* Sintaxis
          Operador ternario:   evaluador ? si cumple la condicion : si no cumple 
          Operador AND:  evaluador && si cumple la condicion (si no cumple lo evalua como NULL)*/}
            {menu === "Mapa" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("Nosotros")}>
          <Link to="/Nosotros" style={{ textDecoration: "none" }}>
            Nosotros {menu === "Nosotros" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("Ayudar")}>
          <Link to="/Ayudar" style={{ textDecoration: "none" }}>
            Ayudar {menu === "Ayudar" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("Registro")}>
          <Link to="/Registro" style={{ textDecoration: "none" }}>
            Registro{menu === "Registro" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("Login")}>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            Login{menu === "Login" && <hr />}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

