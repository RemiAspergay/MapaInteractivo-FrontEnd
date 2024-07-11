import Cards from "../componentes/Cards/Cards";
import regiones from "../componentes/assets/all_region";

function Mapa() {
  return (
    <>
      <Cards data={regiones}/>
    </>
  );
}

export default Mapa;