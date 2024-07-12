import FaunaCard from "../componentes/FaunaCard/faunaCard";
import Fauna from "../componentes/assets/all_fauna";
import parque from "../componentes/assets/all_parque";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function Parque() {
  const[faunaparque,setFaunaparque] = useState(null) /* nombre estado, funcion para modificar estado*/

  const {id} = useParams()

  useEffect(() => {
    const parqueporid = parque.find(
      (parque) => parque.id == id
      /* (fauna) => parque.nombre.includes(fauna.parques) */
    );
    const nombreparque = parqueporid.nombre
    const faunaporparque = Fauna.filter(
      (Fauna) => Fauna.parques.includes(nombreparque)
    )
    console.log(faunaporparque)
    setFaunaparque(faunaporparque)
  },[])
  console.log(faunaparque)
  return (
    <>
      {faunaparque && <FaunaCard data={faunaparque}/>}
    </>
  );
}

export default Parque;