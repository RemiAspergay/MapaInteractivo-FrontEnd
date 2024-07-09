import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <nav>
        <div className="burger">
          <svg class="vbp-header-menu-button__svg">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              class="top"
              shape-rendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              class="middle"
              shape-rendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              class="bottom"
              shape-rendering="crispEdges"
            />
          </svg>
        </div>
        <div className="nav-text">
          <h1 className="title">EndemiMapa</h1>
          <h2 className="subtitle">
            Mapa interactivo de parques nacionales y fauna endémica chilena
          </h2>
        </div>
      </nav>
      <div>
        <ul>
          <li>Quiénes somos</li>
          <li>Cómo ayudar</li>
          <li>Registrarse</li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
