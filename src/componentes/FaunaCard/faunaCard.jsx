import React from "react";
import "./faunaCard.css";

function FaunaCard(props) {
  const {
    ncomun,
    nombreCientifico,
    estado,
    medida,
    masa,
    descripcion,
    imagenFauna,
    imagenHuella,
  } = props;

  return (
    <div className="fauna-card">
      <div
        className="imagen-fauna"
        style={{ backgroundImage: `url(${imagenFauna})` }}
      ></div>
      <div className="ncomun">
        <span>{ncomun}</span>
      </div>
      <div className="ncientifico">
        <span>Nombre científico</span>
      </div>
      <div className="nombre-cientifico">
        <span>{nombreCientifico}</span>
      </div>
      <div className="estado">
        <span>{estado}</span>
      </div>
      <div className="medida">
        <span>{medida}</span>
      </div>
      <div className="masa">
        <span>{masa}</span>
      </div>
      <div className="descripcion">
        <span>{descripcion}</span>
      </div>
      <div className="huella">
        <span>Huella</span>
      </div>
      <div
        className="imagen-huella"
        style={{ backgroundImage: `url(${imagenHuella})` }}
      ></div>
    </div>
  );
}

export default FaunaCard;
