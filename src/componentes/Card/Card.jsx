import "./cardStyle.css";
 
function Card({title, user, time}) {
  return (
    <div className="tarjeta">
      <div className="tarjetaImagen"></div>
      <div className="tarjetaTitulo">
        <h3>{title}</h3>
      </div>
      <div className="tarjetaContenido">
        <div className="author">
            <span>
                {user}
            </span>
        </div>
        <div className="tiempo">
            {time} 
        </div>
      </div>
    </div>
  );
}
 
export default Card;