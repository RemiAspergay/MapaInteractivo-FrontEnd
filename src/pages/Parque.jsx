import FaunaCard from "../componentes/FaunaCard/faunaCard";
import Fauna from "../componentes/assets/all_fauna";
import parque from "../componentes/assets/all_parque";
import {useEffect, useState} from "react";

function Parque() {
  const[faunaparque,setFaunaparque] = useState(null) /* nombre estado, funcion para modificar estado*/
  useEffect(() => {
    const filterData = Fauna.filter(
      (fauna) => fauna.parques[0] == parque[0].nombre
      /* (fauna) => parque.nombre.includes(fauna.parques) */
    );
    setFaunaparque(filterData) 
  },[])
  console.log(faunaparque)
  return (
    <>
      {faunaparque && <FaunaCard data={faunaparque}/>}
    </>
  );
}

export default Parque;
