import React from "react";
import "./faunaCard.css";
import faunaImagen from "../assets/animalFauna.png";
import faunaHuella from "../assets/huellaFauna.png";

const FaunaCard = () => {
  return (
    <div className="fauna-card">
      <div
        className="imagen-fauna"
        style={{ backgroundImage: `url(${faunaImagen})` }}
      ></div>
      <div className="ncientifico">
        <span>Nombre científico</span>
      </div>
      <div className="ncomun">
        <span>Nombre común</span>
      </div>
      <div className="nombre-comun">
        <span>Ejemplo de nombre</span>
      </div>
      <div className="estado">
        <span>Estado</span>
      </div>
      <div className="medida">
        <span>Centímetros</span>
      </div>
      <div className="masa">
        <span>Kilogramos</span>
      </div>
      <div className="descripcion">
        <span>
          Aquí va una breve descripción. Este es un ejemplo. La idea es lograr
          que sea modificable.
        </span>
      </div>
      <div className="huella">
        <span>Huella</span>
      </div>
      <div
        className="imagen-huella"
        style={{ backgroundImage: `url(${faunaHuella})` }}
      ></div>
    </div>
  );
};

export default FaunaCard;
