
import Benjamin from "../componentes/assets/Benjamin.png";
import Henry from "../componentes/assets/Henry.png";
import Paula from "../componentes/assets/Paula.png";
import Rafael from "../componentes/assets/Rafael.png";
import Remi from "../componentes/assets/Remi.png";

function Nosotros() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "5px",
        }}
      >
        <div
          className="nosotros"
          style={{
            backgroundColor: "var(--fondo-a)",
            color: "var(--letra-a)",
            padding: "10px",
            borderRadius: "5px",
            maxWidth: "85%",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "25px", marginBottom: "5px" }}>
            ¿Quiénes somos?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.15",
              textAlign: "justify",
            }}
          >
            Somos un equipo pequeño de desarrolladores con la misión de generar
            consciencia y responsabilidad en la población sobre los animales
            endémicos chilenos.
            <br />
            Entregamos esta herramienta para su educación y uso público.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <img
          src={Benjamin}
          alt="Benjamín"
          style={{ width: "15%", height: "auto" }}
        />
        <img src={Henry} alt="Henry" style={{ width: "15%", height: "auto" }} />
        <img src={Paula} alt="Paula" style={{ width: "15%", height: "auto" }} />
        <img
          src={Rafael}
          alt="Rafael"
          style={{ width: "15%", height: "auto" }}
        />
        <img src={Remi} alt="Remi" style={{ width: "15%", height: "auto" }} />
      </div>
      <div className="footer">
        © EndemiMapa.cl 2024 Todos los derechos reservados.
      </div>
    </>
  );
}

export default Nosotros;
