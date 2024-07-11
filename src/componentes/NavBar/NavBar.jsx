import { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../assets/wina.svg";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { drawerClasses } from "@mui/material";

function NavBar({children}) {
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setDrawer(false);
  }, [menu]);
  return (
   <>
    <header>
      <nav>
        <div
          className="burger"
          role="button"
          onClick={() => setDrawer(!drawer)}
        >
          <svg className="vbp-header-menu-button__svg">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className="top"
              shapeRendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className="middle"
              shapeRendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className="bottom"
              shapeRendering="crispEdges"
            />
          </svg>
        </div>
        <div className="nav-text">
          <h1 className="title">EndemiMapa</h1>
          <h2 className="subtitle">
            Mapa interactivo de parques nacionales y fauna endémica chilena
          </h2>
        </div>
        <div className="navUser">B</div>
      </nav>
      
    </header>
    {children}
    <div className={`nav-menu ${drawer ? "nav-menu-down" : "nav-menu-top"}`}>
        <ul>
          <li onClick={() => setMenu("Mapa")}>
            <Link to="/">Mapa</Link>
          </li>
          <li onClick={() => setMenu("Nosotros")}>
            <Link to="/Nosotros">Nosotros</Link>
          </li>
          <li onClick={() => setMenu("Ayudar")}>
            <Link to="/Ayudar">Ayudar</Link>
          </li>
          <li onClick={() => setMenu("Login")}>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
   </>
  );
}

export default NavBar;
